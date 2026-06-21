// 🚀 路線 A+B: 全網聯查 (智能分流：小巴前台直連，巴士後台聯查)
async function fetchOmniStops() {
    const routeInput = document.getElementById('route-input').value.trim().toUpperCase();
    const loadingText = document.getElementById('loading-text');

    if(!routeInput) {
        loadingText.classList.add('hidden-step');
        loadingText.innerText = "";
        return;
    }
    
    loadingText.innerText = "連線中...";
    loadingText.classList.remove('hidden-step', 'text-red-700', 'font-bold');
    loadingText.classList.add('text-red-500');
    
    try {
        // 🌟 靜態攔截
        const staticKey = window.selectedTransit === 'GMB' ? routeInput : (window.selectedTransit === 'MTR' ? routeInput : routeInput);
        if (window.STATIC_DICTIONARY && window.STATIC_DICTIONARY[staticKey]) {
            const staticData = window.STATIC_DICTIONARY[staticKey];
            window.currentRouteData = staticData;
            window.currentTransit = staticData.transitType;
            loadingText.classList.add('hidden-step');
            document.getElementById('stop-selection-ui').classList.remove('hidden-step');
            window.activeDirection = Object.keys(staticData.directions)[0];
            renderDirectionTabs();
            renderStopDropdown();
            return; 
        }

        // 🌟 終極升級：綠色小巴 (GMB) 100% 前台直連 (Edge Fetch)，徹底消滅 n8n 斷鏈 Bug！
        if (window.selectedTransit === 'GMB') {
            loadingText.innerText = "直連政府小巴數據庫中...";
            
            const urls = [
                `https://data.etagmb.gov.hk/route/HKI/${routeInput}`,
                `https://data.etagmb.gov.hk/route/KLN/${routeInput}`,
                `https://data.etagmb.gov.hk/route/NT/${routeInput}`
            ];
            
            // 並發請求三個區域
            const responses = await Promise.all(urls.map(url => fetch(url).then(r => r.json()).catch(() => ({}))));
            
            let validRoute = null;
            let regionName = '';
            
            if (responses[0].data && responses[0].data.length > 0) { validRoute = responses[0].data[0]; regionName = '港島'; }
            else if (responses[1].data && responses[1].data.length > 0) { validRoute = responses[1].data[0]; regionName = '九龍'; }
            else if (responses[2].data && responses[2].data.length > 0) { validRoute = responses[2].data[0]; regionName = '新界'; }
            
            if (!validRoute) throw new Error(`找不到小巴路線 ${routeInput}。`);
            
            window.currentRouteData = {
                route: routeInput,
                transitType: 'GMB',
                directions: {}
            };

            const routeId = validRoute.route_id;

            // 獲取方向 1 (去程)
            try {
                const res1 = await fetch(`https://data.etagmb.gov.hk/route-stop/${routeId}/1`);
                if (res1.ok) {
                    const json1 = await res1.json();
                    if (json1.data && json1.data.route_stops && json1.data.route_stops.length > 0) {
                        const stopsList = json1.data.route_stops.map(s => ({
                            stop_id: s.stop_id.toString(),
                            name_obj: { tc: s.name_tc, en: s.name_en },
                            api_url: `https://data.etagmb.gov.hk/eta/route-stop/${routeId}/${s.stop_id}`
                        }));
                        window.currentRouteData.directions.outbound = {
                            dest_name: { 
                                tc: `[${regionName}小巴] ${routeInput} 往 ${stopsList[stopsList.length - 1].name_obj.tc}`,
                                en: `[${regionName} GMB] ${routeInput} To ${stopsList[stopsList.length - 1].name_obj.en}`
                            },
                            stops: stopsList
                        };
                    }
                }
            } catch(e) {}

            // 獲取方向 2 (回程)
            try {
                const res2 = await fetch(`https://data.etagmb.gov.hk/route-stop/${routeId}/2`);
                if (res2.ok) {
                    const json2 = await res2.json();
                    if (json2.data && json2.data.route_stops && json2.data.route_stops.length > 0) {
                        const stopsList = json2.data.route_stops.map(s => ({
                            stop_id: s.stop_id.toString(),
                            name_obj: { tc: s.name_tc, en: s.name_en },
                            api_url: `https://data.etagmb.gov.hk/eta/route-stop/${routeId}/${s.stop_id}`
                        }));
                        window.currentRouteData.directions.inbound = {
                            dest_name: { 
                                tc: `[${regionName}小巴] ${routeInput} 往 ${stopsList[stopsList.length - 1].name_obj.tc}`,
                                en: `[${regionName} GMB] ${routeInput} To ${stopsList[stopsList.length - 1].name_obj.en}`
                            },
                            stops: stopsList
                        };
                    }
                }
            } catch(e) {}

            if (Object.keys(window.currentRouteData.directions).length === 0) {
                throw new Error(`找不到 ${routeInput} 的車站資料。`);
            }

            window.currentTransit = 'GMB';
            loadingText.classList.add('hidden-step');
            document.getElementById('stop-selection-ui').classList.remove('hidden-step');
            
            window.activeDirection = Object.keys(window.currentRouteData.directions)[0];
            renderDirectionTabs();
            renderStopDropdown();
            return;
        }

        // --- 原有巴士 (BUS) n8n 聯查邏輯保持不變 ---
        loadingText.innerText = "大腦全網並行聯查中...";
        // 加入 ?v=2 確保不會被瀏覽器緩存
        const n8nWebhookUrl = `${window.APP_CONFIG.N8N_BASE_URL}/get-omni-setup?route=${routeInput}&type=${window.selectedTransit}&v=2`;
        
        const response = await fetch(n8nWebhookUrl, {
            method: 'GET',
            headers: { 'x-transit-token': window.APP_CONFIG.N8N_TOKEN }
        });

        if (!response.ok) throw new Error(`大腦連線失敗 (HTTP ${response.status})`);
        
        const json = await response.json();
        if (json.error) throw new Error(json.error);

        if (!json.directions || Object.keys(json.directions).length === 0) {
            throw new Error(`找不到路線 ${routeInput} 的資料，請確認號碼無誤。`);
        }

        window.currentRouteData = json;
        window.currentTransit = json.transitType || 'MIXED';

        loadingText.classList.add('hidden-step');
        document.getElementById('stop-selection-ui').classList.remove('hidden-step');
        
        window.activeDirection = Object.keys(json.directions)[0];
        renderDirectionTabs();
        renderStopDropdown();

    } catch (error) {
        console.error("Omni-Fetch error:", error);
        let displayMessage = error.message.replace(/^Error:\s*/, '');
        loadingText.innerText = displayMessage;
        loadingText.classList.remove('text-red-500');
        loadingText.classList.add('text-red-700', 'font-bold');
    }
}
