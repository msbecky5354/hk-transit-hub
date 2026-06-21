function renderHeader() {
    const headerHtml = `
    <style>
        /* 走馬燈專用動畫 */
        @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-150%); }
        }
        .animate-scroll {
            display: inline-block;
            white-space: nowrap;
            animation: scroll-left 25s linear infinite;
        }
        /* 左右兩側漸變遮罩，令文字出入時有漸隱效果 */
        .weather-ticker-container {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        /* 隱藏原生捲軸 */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>

    <header class="bg-white text-gray-800 p-2 shadow-sm border-b border-gray-100 flex flex-col sticky top-0 z-[100] transition-colors duration-300">
        
        <!-- 上層：Logo、特別天氣消息、按鈕 -->
        <div class="flex justify-between items-center w-full mb-1 h-10 gap-1">
            
            <!-- 左側：Logo -->
            <div class="flex items-center shrink-0 h-full cursor-pointer pl-1" onclick="window.location.href='index.html'">
                <img src="HKTH.png" alt="HK Transit Hub" class="h-9 w-auto object-contain">
            </div>

            <!-- 中間：特別天氣預警 (專注於突發/簡短消息，適合手機窄螢幕) -->
            <div id="special-weather-container" class="flex-1 min-w-0 flex items-center justify-center overflow-hidden px-1 h-full opacity-0 transition-opacity duration-500">
                <!-- 內容會由 fetchSpecialNews 動態載入 -->
            </div>
            
            <!-- 右側：按鈕 -->
            <div class="flex items-center gap-2 shrink-0 h-full">
                <div class="flex items-center space-x-1.5 text-xs font-bold bg-gray-100 px-2 py-1.5 rounded-full border border-gray-200 hidden sm:flex">
                    <button id="btn-tc" class="lang-btn text-gray-400 transition hover:scale-110" onclick="setLang('tc')">繁</button>
                    <span class="text-gray-300">|</span>
                    <button id="btn-sc" class="lang-btn text-gray-400 transition hover:scale-110" onclick="setLang('sc')">简</button>
                    <span class="text-gray-300">|</span>
                    <button id="btn-en" class="lang-btn text-gray-400 transition hover:scale-110" onclick="setLang('en')">EN</button>
                </div>
                
                <button onclick="shareApp()" class="text-gray-500 hover:text-[#B8860B] transition text-lg px-1 active:scale-95 flex items-center" title="分享 / Share">
                    <i class="fas fa-share-nodes"></i>
                </button>
                
                <button onclick="window.location.href='manual.html'" class="text-gray-500 hover:text-[#B8860B] transition text-lg px-1 active:scale-95 flex items-center" data-i18n-title="userManualBtn" title="使用說明">
                    <i class="fas fa-book"></i>
                </button>
            </div>
        </div>

        <!-- 下層：常規天氣走馬燈 (還原全寬度，適合長文字) -->
        <div id="weather-badge-container" class="w-full transition-all duration-500 opacity-0"></div>
        
    </header>
    `;
    
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHtml;
        
        // 設定語言按鈕高亮
        setTimeout(() => {
            const currentLang = localStorage.getItem('transit_app_lang') || 'tc';
            document.querySelectorAll('.lang-btn').forEach(btn => { 
                btn.classList.remove('text-[#B8860B]', 'text-yellow-300', 'font-bold'); 
                btn.classList.add('text-gray-400'); 
            });
            const activeBtn = document.getElementById(`btn-${currentLang}`);
            if(activeBtn) { 
                activeBtn.classList.remove('text-gray-400'); 
                activeBtn.classList.add('text-[#B8860B]', 'font-bold'); 
            }
        }, 50);

        if (typeof translatePage === "function") {
            translatePage();
        }

        // 同時觸發讀取兩份天氣數據
        fetchWeatherNews();
        fetchSpecialNews();
    }
}

// 🌤️ 功能 1：讀取常規天氣 (還原全寬度走馬燈)
async function fetchWeatherNews() {
    const container = document.getElementById('weather-badge-container');
    if (!container) return;

    try {
        const apiUrl = `https://raw.githubusercontent.com/msbecky5354/hk-transit-hub/main/data/hk_weather.json?v=${Date.now()}`; 
        const res = await fetch(apiUrl, { method: 'GET' });

        if (res.ok) {
            const data = await res.json();
            let msg = data.hk_message || "";
            
            if (msg) {
                msg = msg.replace(/\n/g, '<span class="text-blue-300 mx-3">|</span>'); 
                msg = msg.replace(/\*(.*?)\*/g, '<strong class="font-bold text-blue-900">$1</strong>'); 
                msg = msg.replace(/(\|\s*\|)+/g, '<span class="text-blue-300 mx-3">|</span>');

                container.innerHTML = `
                    <div class="weather-ticker-container w-full overflow-hidden bg-blue-50/60 rounded-md border border-blue-100/50 px-2 flex items-center h-7 text-[12px] text-blue-800 shadow-sm">
                        <i class="fas fa-cloud-sun text-blue-500 mr-2 shrink-0 text-[11px]"></i>
                        <div class="w-full overflow-hidden relative h-full flex items-center no-scrollbar">
                            <div class="animate-scroll font-medium tracking-wide">
                                ${msg}
                            </div>
                        </div>
                    </div>
                `;
                container.classList.remove('opacity-0');
            }
        }
    } catch (e) {
        console.log("Routine weather fetch failed:", e);
    }
}

// 🚨 功能 2：讀取特別天氣消息 (置於頂部中間，適合手機)
async function fetchSpecialNews() {
    const container = document.getElementById('special-weather-container');
    if (!container) return;

    try {
        // ⚠️ 將下面條 URL 換成你專屬特別天氣 JSON 嘅真實 GitHub 路徑
        const apiUrl = `https://raw.githubusercontent.com/msbecky5354/hk-transit-hub/main/data/special_weather.json?v=${Date.now()}`; 
        const res = await fetch(apiUrl, { method: 'GET' });

        if (res.ok) {
            const data = await res.json();
            let msg = data.special_message || ""; 
            
            if (msg) {
                container.innerHTML = `
                    <div class="bg-red-50 text-red-600 border border-red-200 text-[11px] px-2 py-0.5 rounded-full font-bold flex items-center shadow-sm animate-pulse max-w-full truncate cursor-default" title="${msg}">
                        <i class="fas fa-exclamation-triangle mr-1.5 shrink-0"></i>
                        <span class="truncate">${msg}</span>
                    </div>
                `;
                container.classList.remove('opacity-0');
            }
        }
    } catch (e) {
        console.log("Special weather fetch failed or no special news currently.", e);
    }
}

// 支援三文兩語的分享功能
window.shareApp = function() {
    const shareTitle = typeof getTranslation === 'function' ? getTranslation('appName', '貼地通 HK Transit Hub') : '貼地通 HK Transit Hub';
    const shareDesc = typeof getTranslation === 'function' ? getTranslation('shareText', '極速、零廣告的香港交通 ETA 儀表板！') : '極速、零廣告的香港交通 ETA 儀表板！';
    
    const shareData = {
        title: shareTitle,
        text: shareDesc,
        url: window.location.origin + window.location.pathname
    };

    if (navigator.share) {
        navigator.share(shareData).catch(err => console.log('Share cancelled', err));
    } else {
        navigator.clipboard.writeText(shareData.url).then(() => {
            const alertMsg = typeof getTranslation === 'function' ? getTranslation('linkCopied', '🔗 連結已複製到剪貼簿！') : '🔗 連結已複製到剪貼簿！';
            alert(alertMsg);
        });
    }
};