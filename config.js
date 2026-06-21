// config.js 
const APP_CONFIG = {
    // 🚨 已經幫你將 API 網址換做你真正運行緊嘅 passionate-jerboa
    N8N_BASE_URL: "https://passionate-jerboa.pikapod.net/webhook",
    N8N_TOKEN: "PhFhsEfKlOxtRJxn"
};

if (localStorage.getItem('custom_n8n_url')) {
    APP_CONFIG.N8N_BASE_URL = localStorage.getItem('custom_n8n_url');
}
if (localStorage.getItem('custom_n8n_token')) {
    APP_CONFIG.N8N_TOKEN = localStorage.getItem('custom_n8n_token');
}

window.APP_CONFIG = APP_CONFIG;


// ==========================================
// 📱 PWA 全域動態注入 (Single Source of Truth)
// ==========================================
(function injectPWATags() {
    if (document.querySelector('link[rel="manifest"]')) return;

    const pwaMetaHtml = `
        <link rel="manifest" href="manifest.json">
        <link rel="icon" type="image/png" href="icon-192.png">
        
        <meta name="theme-color" content="#dc2626">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-title" content="Transit Hub">
        <link rel="apple-touch-icon" href="icon-192.png">
    `;
    document.head.insertAdjacentHTML('beforeend', pwaMetaHtml);
})();

// ==========================================
// 🎨 全站字體升級 (Google Noto Sans HK 思源黑體)
// ==========================================
(function injectGlobalFont() {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;500;700;900&display=swap';
    document.head.appendChild(fontLink);

    const style = document.createElement('style');
    style.innerHTML = `
        /* 強制所有介面元素使用 Noto Sans HK，保證中文字體圓滑不銳角 */
        body, input, select, textarea, button, option {
            font-family: 'Noto Sans HK', -apple-system, BlinkMacSystemFont, "PingFang HK", "Microsoft JhengHei", sans-serif !important;
        }
        /* 針對下拉選單特別優化 */
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1em;
        }
    `;
    document.head.appendChild(style);
})(); // ⬅️ 這裡正確關閉字體注入模塊

// ==========================================
// 📱 PWA 全域動態注入 (Single Source of Truth)
// ==========================================
(function injectPWATags() {
    // 防禦機制：若頁面已存在 manifest，則不重複注入，避免 DOM 污染
    if (document.querySelector('link[rel="manifest"]')) return;

    const pwaMetaHtml = `
        <link rel="manifest" href="manifest.json">
        <meta name="theme-color" content="#dc2626">
        
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-title" content="Transit Hub">
        <link rel="apple-touch-icon" href="icon-192.png">
    `;
    document.head.insertAdjacentHTML('beforeend', pwaMetaHtml);
})(); // ⬅️ 這裡是完全獨立的 PWA 注入模塊