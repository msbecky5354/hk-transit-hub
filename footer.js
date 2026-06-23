// footer.js
function renderFooter() {
    
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // 👇 核心修改：反轉高亮邏輯 (Call to Action 模式)
    // 喺 setup.html 嗰陣，isIndex 變 true (著儀表板)
    // 喺 index.html 嗰陣，isSetup 變 true (著新增)
    const isIndex = currentPath === 'setup.html'; 
    const isSetup = currentPath === 'index.html' || currentPath === '';
    const isSettings = currentPath === 'settings.html' || currentPath === 'manual.html';

    const bottomNavHtml = `
        <footer class="fixed bottom-0 left-0 right-0 w-full max-w-lg mx-auto bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-[100] pb-safe transition-colors duration-300" style="padding-bottom: env(safe-area-inset-bottom);">
            <div class="flex justify-around items-center p-3">
                <a href="index.html" class="flex flex-col items-center transition-all duration-200 ${isIndex ? 'text-[#B8860B] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-[#B8860B] hover:scale-105'}">
                    <i class="fas fa-chart-simple text-xl mb-1"></i>
                    <span class="text-xs font-bold" data-i18n="navHome">儀表板</span>
                </a>
                
                <a href="setup.html" class="flex flex-col items-center transition-all duration-200 ${isSetup ? 'text-[#B8860B] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-[#B8860B] hover:scale-105'}">
                    <i class="fas fa-circle-plus text-xl mb-1"></i>
                    <span class="text-xs font-bold" data-i18n="navAdd">新增</span>
                </a>

                <a href="settings.html" class="flex flex-col items-center transition-all duration-200 ${isSettings ? 'text-[#B8860B] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-[#B8860B] hover:scale-105'}">
                    <i class="fas fa-gear text-xl mb-1"></i>
                    <span class="text-xs font-bold" data-i18n="navSetup">設定</span>
                </a>
            </div>
        </footer>
    `;

    const copyHtml = `
    <div class="text-center pt-6 pb-24 flex-none w-full z-20 relative"> 
        <button onclick="document.getElementById('disclaimerModal').classList.remove('hidden');" 
                class="text-[11px] text-[#B8860B] hover:text-yellow-700 underline decoration-yellow-600/30 transition" data-i18n="footerDisclaimerBtn">
            關於我們、條款及免責聲明
        </button>
        <div class="text-[10px] text-gray-500 mt-1.5 tracking-wide flex items-center justify-center transition-colors">
            <span data-i18n="footerCopyright">© 2026 貼地通</span> 
            <span class="mx-1.5">|</span> 
            <span data-i18n="footerDevTeam">開發團隊: </span>
            <a href="https://www.facebook.com/share/18j3qqx64K/?mibextid=wwXIfr" target="_blank" class="text-[#B8860B] hover:text-yellow-700 underline transition cursor-pointer ml-1" data-i18n="footerDevName">懶人工具駅</a>
        </div>
    </div>
    `;

    // 🌟 核心更新：在 modalP3 中加入了 Google Analytics 的免責聲明
    const modalHtml = `
    <div id="disclaimerModal" class="hidden fixed inset-0 bg-gray-900/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
        <div class="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col max-h-[80vh] border border-gray-100 transition-colors duration-300">
            <div class="flex items-center gap-2 mb-4">
                <span class="text-[20px]">🛡️</span>
                <h2 class="text-[17px] font-black text-gray-800 transition-colors" data-i18n="modalTitle">免責聲明及服務條款</h2>
            </div>        
            <div class="overflow-y-auto text-[13px] text-gray-600 space-y-4 pr-1 mb-2 leading-relaxed transition-colors">
                <p data-i18n="modalP1"><strong>1. 數據來源與準確性：</strong>本應用程式 (貼地通 HK Transit Hub) 提供的交通到站時間 (ETA) 均擷取自香港政府「資料一線通」及各公共交通營辦商的開放數據。我們不保證數據的絕對準確性、完整性或及時性。</p>
                <p data-i18n="modalP2"><strong>2. 僅供參考：</strong>本程式的資訊僅供參考之用。強烈建議使用者提早出門，開發團隊對因依賴本程式資訊而導致的任何延誤、損失或不便，概不負責。</p>
                <p data-i18n="modalP3"><strong>3. 隱私與數據分析：</strong>您的路線設定僅儲存於本地設備。然而，為改善應用體驗，本程式採用 Google Analytics (分析) 來收集匿名的使用數據（如瀏覽量、設備類型）。這些數據不會包含可識別您個人身份的資訊。使用本程式即表示您同意我們透過 Cookies 及相關技術進行上述分析。</p>
            </div>
            <button onclick="document.getElementById('disclaimerModal').classList.add('hidden')" class="mt-4 w-full bg-[#B8860B] text-white font-bold py-3.5 rounded-2xl active:scale-95 transition-transform text-[15px] shadow-md shadow-yellow-600/30" data-i18n="modalBtn">我明白及接受</button>
        </div>
    </div>
    `;

    const footerContainer = document.getElementById('app-footer');
    if (footerContainer) {
        footerContainer.innerHTML = bottomNavHtml;
    }

    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforeend', copyHtml);
    } else {
        document.body.insertAdjacentHTML('beforeend', copyHtml);
    }

    if (!document.getElementById('disclaimerModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
    
    if (typeof translatePage === "function") {
        translatePage();
    }
}