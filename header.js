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
            /* 🌟 核心修改：將 25s 延長至 45s，大幅減慢跑馬燈捲動速度 */
            animation: scroll-left 45s linear infinite;
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
        
        <div class="flex justify-between items-center w-full mb-1 h-10 gap-1">
            
            <div class="flex items-center shrink-0 h-full cursor-pointer pl-1" onclick="window.location.href='index.html'">
                <img src="HKTH.png" alt="HK Transit Hub" class="h-9 w-auto object-contain">
                <span class="ml-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm tracking-wider uppercase border border-amber-600/50">
                    BETA
                </span>
            </div>

            <div id="special-weather-container" class="flex-1 min-w-0 flex items-center justify-center overflow-hidden px-1 h-full opacity-0 transition-opacity duration-500">
                </div>
            
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 h-full">
                <div class="flex items-center space-x-1 sm:space-x-1.5 text-[10px] sm:text-xs font-bold bg-gray-100 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-full border border-gray-200">
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
        const apiUrl = `https://msbecky5354.github.io/JSON/data/hk_weather.json?v=${Date.now()}`; 
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
        const apiUrl = `https://msbecky5354.github.io/JSON/data/special_weather.json?v=${Date.now()}`; 
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

// 🌟 終極大升級：動態 QR Code 視窗分享功能
window.shareApp = function() {
    // 讀取當前語言，並自動加入網址尾部
    const currentLang = localStorage.getItem('transit_app_lang') || 'tc';
    
    // 🌟 乾淨俐落：直接用 ?lang= 參數，唔再搞跳板！
    const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    const baseUrl = window.location.origin + basePath;
    const shareUrl = baseUrl + '?lang=' + currentLang;
    
    const shareTitle = typeof getTranslation === 'function' ? getTranslation('appName', '貼地通 HK Transit Hub') : '貼地通 HK Transit Hub';
    const shareDesc = typeof getTranslation === 'function' ? getTranslation('shareText', '極速、零廣告的香港交通 ETA 儀表板！') : '極速、零廣告的香港交通 ETA 儀表板！';
    const modalTitle = typeof getTranslation === 'function' ? getTranslation('manualShareTitle', '分享應用程式') : 'Share App';
    
    const btnCopyText = typeof getTranslation === 'function' ? getTranslation('shareCopy', '複製') : '複製';
    const btnSendText = typeof getTranslation === 'function' ? getTranslation('shareSend', '傳送') : '傳送';
    
    // 生成專屬 QR Code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(shareUrl)}`;

    let modal = document.getElementById('share-modal-container');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'share-modal-container';
        modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-6 w-11/12 max-w-sm shadow-2xl transform scale-95 transition-transform duration-300 relative">
            <button onclick="closeShareModal()" class="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl leading-none">&times;</button>
            
            <h3 class="font-black text-xl text-gray-800 mb-2 flex items-center justify-center gap-2">
                <i class="fas fa-qrcode text-[#B8860B]"></i> ${modalTitle}
            </h3>
            <p class="text-sm text-gray-500 mb-4 text-center">${shareDesc}</p>
            
            <div class="bg-gray-50 p-3 rounded-xl flex justify-center mb-5 border border-gray-200">
                <img src="${qrUrl}" alt="QR Code" class="w-48 h-48 rounded-lg shadow-sm">
            </div>
            
            <div class="flex gap-2">
                <button onclick="copyShareLink('${shareUrl}')" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm">
                    <i class="fas fa-link"></i> ${btnCopyText}
                </button>
                <button onclick="nativeShare('${shareTitle}', '${shareDesc}', '${shareUrl}')" class="flex-1 bg-[#B8860B] hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-md">
                    <i class="fas fa-share"></i> ${btnSendText}
                </button>
            </div>
        </div>
    `;

    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.firstElementChild.classList.remove('scale-95');
    });
};

window.closeShareModal = function() {
    const modal = document.getElementById('share-modal-container');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.firstElementChild.classList.add('scale-95');
    }
};

window.copyShareLink = function(url) {
    navigator.clipboard.writeText(url).then(() => {
        const alertMsg = typeof getTranslation === 'function' ? getTranslation('linkCopied', '🔗 連結已複製到剪貼簿！') : '🔗 連結已複製到剪貼簿！';
        alert(alertMsg);
        closeShareModal();
    });
};

window.nativeShare = function(title, text, url) {
    if (navigator.share) {
        navigator.share({ title: title, text: text, url: url }).catch(err => console.log('Share cancelled', err));
        closeShareModal();
    } else {
        copyShareLink(url);
    }
};
