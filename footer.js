function renderFooter() {
    const footerHTML = `
        <footer class="fixed bottom-0 w-full max-w-lg mx-auto bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
            <div class="flex justify-around items-center p-3">
                <a href="index.html" class="flex flex-col items-center text-gray-400 hover:text-red-600 transition">
                    <span class="text-xl mb-1">📊</span>
                    <span class="text-xs font-bold" data-i18n="navHome">儀表板</span>
                </a>
                
                <a href="setup.html" class="flex flex-col items-center text-red-600 transition">
                    <span class="text-xl mb-1">➕</span>
                    <span class="text-xs font-bold" data-i18n="navAdd">新增</span>
                </a>

                <a href="settings.html" class="flex flex-col items-center text-gray-400 hover:text-red-600 transition">
                    <span class="text-xl mb-1">⚙️</span>
                    <span class="text-xs font-bold" data-i18n="navSetup">設定</span>
                </a>
            </div>
        </footer>
    `;
    
    const footerContainer = document.getElementById('app-footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}