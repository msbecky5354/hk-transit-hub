function renderHeader() {
    const headerHtml = `
    <header class="bg-red-600 text-white p-4 shadow-md flex justify-between items-center sticky top-0 z-[100]">
        <div class="flex items-center gap-2 overflow-hidden flex-1 pr-2">
            <h1 class="text-xl font-black tracking-wide flex items-center gap-2 cursor-pointer shrink-0" onclick="window.location.href='index.html'">
                <i class="fas fa-bus-simple"></i>
                <span data-i18n="appName">貼地通</span>
            </h1>
            <div id="weather-badge-container" class="flex-1 overflow-hidden flex items-center"></div>
        </div>
        
        <div class="flex items-center gap-3 shrink-0">
            <div class="flex items-center space-x-2 text-sm font-bold bg-red-700 px-3 py-1.5 rounded-full shadow-inner">
                <button id="btn-tc" class="lang-btn text-white transition hover:scale-110" onclick="setLang('tc')">繁</button>
                <span class="text-red-400">|</span>
                <button id="btn-sc" class="lang-btn text-red-300 transition hover:scale-110" onclick="setLang('sc')">简</button>
                <span class="text-red-400">|</span>
                <button id="btn-en" class="lang-btn text-red-300 transition hover:scale-110" onclick="setLang('en')">EN</button>
            </div>
            
            <button onclick="window.location.href='manual.html'" class="text-white hover:text-gray-200 transition text-xl px-1 active:scale-95" data-i18n-title="userManualBtn" title="使用說明">
                <i class="fas fa-book"></i>
            </button>
        </div>
    </header>
    `;
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHtml;
        
        // 確保載入時按鈕高亮正確
        setTimeout(() => {
            const currentLang = localStorage.getItem('transit_app_lang') || 'tc';
            document.querySelectorAll('.lang-btn').forEach(btn => { 
                btn.classList.remove('text-white', 'font-bold'); 
                btn.classList.add('text-red-300'); 
            });
            const activeBtn = document.getElementById(`btn-${currentLang}`);
            if(activeBtn) { 
                activeBtn.classList.remove('text-red-300'); 
                activeBtn.classList.add('text-white', 'font-bold'); 
            }
        }, 50);

        // ✅ 強制載入後立即翻譯 Tooltip
        if (typeof translatePage === "function") {
            translatePage();
        }
    }
}
