window.APP_VERSION = "v61"; // 完美對接 LRT 數字

window.MTR_BUS_DICT = { "ROUTES": {}, "STOPS": {} };
window.STATIC_DICTIONARY = {};
window.MTR_RAIL_STOPS = {};

window.MTR_CSV_URL = "https://raw.githubusercontent.com/msbecky5354/hk-transit-hub/main/data/mtr_bus_stops.csv";
window.LRT_CSV_URL = "https://raw.githubusercontent.com/msbecky5354/hk-transit-hub/main/data/light_rail_routes_and_stops.csv";
window.MTR_RAIL_CSV_URL = "https://raw.githubusercontent.com/msbecky5354/hk-transit-hub/main/data/mtr_lines_and_stations.csv";

const parseCSV = (str) => {
    const arr = []; let quote = false;
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];
        arr[row] = arr[row] || []; arr[row][col] = arr[row][col] || '';
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }
        if (cc == '"') { quote = !quote; continue; }
        if (cc == ',' && !quote) { ++col; continue; }
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }
        arr[row][col] += cc;
    }
    return arr;
};

window.loadTransitDictionaries = async function() {
    console.log("🚀 開始全自動構建交通字典...");

    // 任務一：載入 MTR Bus CSV
    try {
        const csvRes = await fetch(window.MTR_CSV_URL);
        if (csvRes.ok) {
            const rows = parseCSV(await csvRes.text());
            const headers = rows[0].map(h => h.trim());
            const idIdx = headers.indexOf('STATION_ID'), tcIdx = headers.indexOf('STATION_NAME_CHI'), enIdx = headers.indexOf('STATION_NAME_ENG');
            if (idIdx !== -1) {
                for (let i = 1; i < rows.length; i++) {
                    if (rows[i].length > Math.max(idIdx, tcIdx, enIdx)) {
                        const stopId = rows[i][idIdx] ? rows[i][idIdx].trim() : '';
                        if (stopId) window.MTR_BUS_DICT.STOPS[stopId] = { tc: rows[i][tcIdx].trim(), en: rows[i][enIdx].trim() };
                    }
                }
            }
        }
    } catch (e) {}

    // 任務二：載入輕鐵 (LRT) CSV
    try {
        const lrtRes = await fetch(window.LRT_CSV_URL);
        if (lrtRes.ok) {
            const rows = parseCSV(await lrtRes.text());
            const headers = rows[0].map(h => h.trim());
            const routeIdx = headers.findIndex(h => h.includes('Line Code')), dirIdx = headers.findIndex(h => h.includes('Direction')), idIdx = headers.findIndex(h => h.includes('Stop ID')), tcIdx = headers.findIndex(h => h.includes('Chinese Name')), enIdx = headers.findIndex(h => h.includes('English Name'));

            if (routeIdx !== -1) {
                for (let i = 1; i < rows.length; i++) {
                    if (rows[i].length > Math.max(routeIdx, dirIdx, idIdx)) {
                        let routeId = rows[i][routeIdx] ? rows[i][routeIdx].trim() : '';
                        let dir = rows[i][dirIdx] ? rows[i][dirIdx].trim() : '';
                        let stopId = rows[i][idIdx] ? rows[i][idIdx].trim() : '';
                        if (stopId.endsWith('.0')) stopId = stopId.replace('.0', '');
                        if (routeId.endsWith('.0')) routeId = routeId.replace('.0', '');
                        let tcName = rows[i][tcIdx] ? rows[i][tcIdx].trim() : stopId;
                        let enName = rows[i][enIdx] ? rows[i][enIdx].trim() : stopId;

                        if (routeId && stopId) {
                            const originalRoute = routeId; // 💡 記住純數字 "615"
                            
                            if (!routeId.startsWith('LRT-')) routeId = `LRT-${routeId}`;
                            if (!stopId.startsWith('LRT-')) stopId = `LRT-${stopId}`;

                            window.MTR_RAIL_STOPS[stopId] = { tc: tcName, en: enName };

                            if (!window.STATIC_DICTIONARY[routeId]) {
                                window.STATIC_DICTIONARY[routeId] = { 
                                    route_key: `route_lrt_${originalRoute.toLowerCase()}`, 
                                    route: originalRoute, // 💡 關鍵修復：補回 route 屬性供 UI 顯示
                                    transitType: "LRT", 
                                    directions: { outbound: { dest_name: {tc:"未知", en:"Unknown"}, stops: [] }, inbound: { dest_name: {tc:"未知", en:"Unknown"}, stops: [] } } 
                                };
                            }

                            const dirKey = (dir === '1' || dir === 'O') ? 'outbound' : 'inbound';
                            window.STATIC_DICTIONARY[routeId].directions[dirKey].stops.push({ stop_id: stopId, name_obj: { tc: tcName, en: enName }, api_url: `https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=${stopId.replace('LRT-', '')}&with_special=1` });
                        }
                    }
                }
                
                Object.keys(window.STATIC_DICTIONARY).forEach(key => {
                    if (window.STATIC_DICTIONARY[key].transitType === 'LRT') {
                        const outStops = window.STATIC_DICTIONARY[key].directions.outbound.stops, inStops = window.STATIC_DICTIONARY[key].directions.inbound.stops;
                        if (outStops.length > 0) window.STATIC_DICTIONARY[key].directions.outbound.dest_name = outStops[outStops.length - 1].name_obj; else delete window.STATIC_DICTIONARY[key].directions.outbound;
                        if (inStops.length > 0) window.STATIC_DICTIONARY[key].directions.inbound.dest_name = inStops[inStops.length - 1].name_obj; else delete window.STATIC_DICTIONARY[key].directions.inbound;
                    }
                });
            }
        }
    } catch (e) {}

   // 任務三：載入重鐵 (MTR Heavy Rail) CSV
    try {
        const mtrRes = await fetch(window.MTR_RAIL_CSV_URL);
        if (mtrRes.ok) {
            const rows = parseCSV(await mtrRes.text());
            const headers = rows[0].map(h => h.trim());
            const routeIdx = headers.findIndex(h => h.includes('Line Code')), 
                  dirIdx = headers.findIndex(h => h.includes('Direction')), 
                  idIdx = headers.findIndex(h => h.includes('Station Code')), 
                  tcIdx = headers.findIndex(h => h.includes('Chinese Name')), 
                  enIdx = headers.findIndex(h => h.includes('English Name'));

            if (routeIdx !== -1) {
                // 步驟一：暫存資料，以解決支線重疊問題
                const tempDirs = {};
                
                for (let i = 1; i < rows.length; i++) {
                    if (rows[i].length > Math.max(routeIdx, dirIdx, idIdx)) {
                        let routeId = rows[i][routeIdx] ? rows[i][routeIdx].trim() : '';
                        let dir = rows[i][dirIdx] ? rows[i][dirIdx].trim() : '';
                        let stopCode = rows[i][idIdx] ? rows[i][idIdx].trim() : '';
                        let tcName = rows[i][tcIdx] ? rows[i][tcIdx].trim() : stopCode;
                        let enName = rows[i][enIdx] ? rows[i][enIdx].trim() : stopCode;

                        if (routeId && stopCode && dir) {
                            window.MTR_RAIL_STOPS[stopCode] = { tc: tcName, en: enName };

                            if (!tempDirs[routeId]) tempDirs[routeId] = {};
                            // 保存最原始的細分方向 (如 UT, UT-LMC)
                            if (!tempDirs[routeId][dir]) tempDirs[routeId][dir] = [];
                            tempDirs[routeId][dir].push({ stopCode, tcName, enName });
                        }
                    }
                }

                // 步驟二：開始合併與去重處理
                for (const routeId in tempDirs) {
                    if (!window.STATIC_DICTIONARY[routeId]) {
                        window.STATIC_DICTIONARY[routeId] = { route_key: `route_${routeId.toLowerCase()}`, route: routeId, transitType: "MTR", directions: {} };
                    }
                    
                    const mergedStops = { 'UP': new Map(), 'DOWN': new Map() };
                    const destNames = { 'UP': { tc: [], en: [] }, 'DOWN': { tc: [], en: [] } };

                    for (const dir in tempDirs[routeId]) {
                        // 🚨 核心修復：強制將所有 UT 分支轉為 UP，DT 分支轉為 DOWN
                        const apiDir = dir.includes('UT') ? 'UP' : 'DOWN'; 
                        const stops = tempDirs[routeId][dir];

                        if (stops.length > 0) {
                            // 將每條支線的最後一站當作終點候選
                            const lastStop = stops[stops.length - 1];
                            if (!destNames[apiDir].tc.includes(lastStop.tcName)) {
                                destNames[apiDir].tc.push(lastStop.tcName);
                                destNames[apiDir].en.push(lastStop.enName);
                            }
                        }

                        // 加入車站並利用 Map 去重 (確保火炭和馬場支綫合併時，沙田站只會加入一次)
                        stops.forEach(s => {
                            if (!mergedStops[apiDir].has(s.stopCode)) {
                                mergedStops[apiDir].set(s.stopCode, s);
                            }
                        });
                    }

                    // 步驟三：寫入最終全域字典
                    for (const apiDir of ['UP', 'DOWN']) {
                        if (mergedStops[apiDir].size > 0) {
                            let finalTc = destNames[apiDir].tc.join(' / ');
                            let finalEn = destNames[apiDir].en.join(' / ');

                            // ✨ 人工美化東鐵綫和將軍澳綫的特殊分支顯示名稱
                            if (routeId === 'EAL' && apiDir === 'UP') { finalTc = '羅湖 / 落馬洲'; finalEn = 'Lo Wu / LMC'; }
                            if (routeId === 'TKL' && apiDir === 'UP') { finalTc = '寶琳 / 康城'; finalEn = 'Po Lam / LOHAS Park'; }
                            if (routeId === 'TKL' && apiDir === 'DOWN') { finalTc = '北角'; finalEn = 'North Point'; }

                            window.STATIC_DICTIONARY[routeId].directions[apiDir] = {
                                dest_name: { tc: finalTc, en: finalEn },
                                stops: Array.from(mergedStops[apiDir].values()).map(s => ({
                                    stop_id: `${s.stopCode}-${apiDir}`,
                                    name_obj: { tc: s.tcName, en: s.enName },
                                    api_url: `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${routeId}&sta=${s.stopCode}&dir=${apiDir}`
                                }))
                            };
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.error("MTR parsing error:", e);
    }

    document.dispatchEvent(new Event('StaticDictionaryLoaded'));
};
window.loadTransitDictionaries();
