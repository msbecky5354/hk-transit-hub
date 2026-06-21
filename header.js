// header.js
function renderHeader() {
    const headerHtml = `
    <header class="bg-white text-gray-800 p-3 shadow-sm border-b border-gray-100 flex justify-between items-center sticky top-0 z-[100] transition-colors duration-300">
        
        <div class="flex items-center gap-2 overflow-hidden flex-1 pr-2 h-full">
            <h1 class="cursor-pointer shrink-0 flex items-center justify-center m-0 h-full pl-1" onclick="window.location.href='index.html'">
                <img src="HKTH.png" alt="HK Transit Hub" class="h-12 w-auto object-contain self-center scale-110">
            </h1>
            <div id="weather-badge-container" class="flex-1 overflow-hidden flex items-center"></div>
        </div>
        
        <div class="flex items-center gap-3 shrink-0 h-full">
            
            <div class="flex items-center space-x-2 text-sm font-bold bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
                <button id="btn-tc" class="lang-btn text-gray-400 transition hover:scale-110" onclick="setLang('tc')">繁</button>
                <span class="text-gray-300">|</span>
                <button id="btn-sc" class="lang-btn text-gray-400 transition hover:scale-110" onclick="setLang('sc')">简</button>
                <span class="text-gray-300">|</span>
                <button id="btn-en" class="lang-btn text-gray-400 transition hover:scale-110" onclick="setLang('en')">EN</button>
            </div>
            
            <button onclick="shareApp()" class="text-gray-500 hover:text-[#B8860B] transition text-xl px-1 active:scale-95 flex items-center" title="分享 / Share">
                <i class="fas fa-share-nodes"></i>
            </button>
            
            <button onclick="window.location.href='manual.html'" class="text-gray-500 hover:text-[#B8860B] transition text-xl px-1 active:scale-95 flex items-center" data-i18n-title="userManualBtn" title="使用說明">
                <i class="fas fa-book"></i>
            </button>
        </div>
    </header>
    `;
    
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHtml;
        
        // 👇 高亮顏色轉為深金色 #B8860B，因為白底用亮黃色會睇唔清
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
    }
}

window.shareApp = function() {
    const shareData = {
        title: '貼地通 HK Transit Hub',
        text: '即時香港交通到站時間儀表板！',
        url: window.location.origin + window.location.pathname
    };

    if (navigator.share) {
        navigator.share(shareData).catch(err => console.log('Share cancelled', err));
    } else {
        navigator.clipboard.writeText(shareData.url).then(() => {
            alert('連結已複製！ Link copied to clipboard!');
        });
    }
};