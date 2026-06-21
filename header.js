function renderHeader() {
    const headerHtml = `
    <style>
        /* 走馬燈專用動畫 (上下滾動) */
        @keyframes scroll-up {
            0% { transform: translateY(100%); }
            10% { transform: translateY(0); } /* 快速進入並停留 */
            90% { transform: translateY(0); } /* 停留時間 */
            100% { transform: translateY(-100%); } /* 快速離開 */
        }
        
        /* 走馬燈專用動畫 (左右滾動 - 預設) */
        @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-150%); }
        }
        
        .animate-scroll {
            display: inline-block;
            white-space: nowrap;
            /* 預設使用左右滾動，如果你想轉做上下，請將下面改為 scroll-up */
            animation: scroll-left 25s linear infinite; 
        }
        
        /* 左右兩側漸變遮罩，令文字出入時有漸隱效果 */
        .weather-ticker-container {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        /* 隱藏原生捲軸 */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>

    <header class="bg-white text-gray-800 px-3 py-2 shadow-sm border-b border-gray-100 flex items-center justify-between sticky top-0 z-[100] transition-colors duration-300 gap-2 h-14">
        
        <div class="flex items-center shrink-0 h-full cursor-pointer" onclick="window.location.href='index.html'">
            <img src="HKTH.png" alt="HK Transit Hub" class="h-9 w-auto object-contain">
        </div>

        <div id="weather-badge-container" class="flex-1 flex items-center justify-center overflow-hidden h-full min-w-0 transition-all duration-500 opacity-0">
            </div>
        
        <div class="flex items-center gap-2 shrink-0 h-full">
            <div class="flex items-center space-x-1.5 text-xs font-bold bg-gray-100 px-2.5 py-1.5 rounded-full border border-gray-200">
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

        // 觸發讀取天氣數據
        fetchWeatherNews();
    }
}

// 🌤️ 核心功能：強制從 GitHub Raw 讀取 JSON 檔案
async function fetchWeatherNews() {
    const container = document.getElementById('weather-badge-container');
    if (!container) return;

    try {
        // 嚴格執行：只讀取 GitHub Raw URL
        const apiUrl = `https://raw.githubusercontent.com/msbecky5354/hk-transit-hub/main/data/hk_weather.json?v=${Date.now()}`; 

        const res = await fetch(apiUrl, {
            method: 'GET'
        });

        if (res.ok) {
            const data = await res.json();
            
            // 讀取 hk_message
            let msg = data.hk_message || "";
            
            if (msg) {
                // 🧹 清洗 WhatsApp 格式轉換為網頁 HTML
                // 將 \n 換成直線分隔符號
                msg = msg.replace(/\n/g, '<span class="text-blue-300 mx-2">|</span>'); 
                // 將 WhatsApp 的 *粗體* 轉換為網頁的 <strong>
                msg = msg.replace(/\*(.*?)\*/g, '<strong class="font-bold text-blue-900">$1</strong>'); 
                // 移除連續多餘的直線
                msg = msg.replace(/(\|\s*\|)+/g, '<span class="text-blue-300 mx-2">|</span>');

                // 更新內容並顯示 (移除 opacity-0)
                container.innerHTML = `
                    <div class="weather-ticker-container w-full overflow-hidden bg-blue-50/60 rounded-md border border-blue-100/50 px-2 flex items-center h-7 text-[12px] text-blue-800">
                        <i class="fas fa-cloud-sun text-blue-500 mr-2 shrink-0 animate-pulse text-[10px]"></i>
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
        console.log("Weather fetch from GitHub failed:", e);
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