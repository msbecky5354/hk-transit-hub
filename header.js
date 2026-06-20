function renderHeader() {
    const headerHTML = `
        <header class="bg-red-600 text-white p-4 shadow-md sticky top-0 z-50 flex justify-between items-center">
            <h1 class="text-xl font-bold tracking-wide" data-i18n="appName">貼地通 (HK Transit Hub)</h1>
            <div class="flex space-x-3 text-sm font-medium">
                <button onclick="setLang('tc')" id="btn-tc" class="lang-btn hover:text-red-200 transition">繁</button>
                <button onclick="setLang('sc')" id="btn-sc" class="lang-btn hover:text-red-200 transition">简</button>
                <button onclick="setLang('en')" id="btn-en" class="lang-btn hover:text-red-200 transition">EN</button>
            </div>
        </header>
    `;
    
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
    
    // 渲染完即刻初始化語言狀態
    setLang(currentLang);
}