let currentLang = localStorage.getItem('transit_app_lang') || 'tc';

const langDict = {
    tc: {
        appName: "貼地通", setupTitle: "設定中心", step1Group: "第一步：設定群組", step2Select: "第二步：選擇交通工具類別",
        step3Route: "第三步：路線與上車分站", step4Save: "第四步：個人化與儲存", searchBtn: "全網智能搜尋 (Omni-Search)", searchPlaceholder: "例如: 112, 46M, E33",
        loading: "大腦聯查中...", selectStop: "請選擇上車分站...", saveBtn: "新增至儀表板", navHome: "儀表板", navAdd: "新增", navSetup: "設定",
        selectGroup: "請選擇或建立群組...", createNewGroup: "➕ 建立新群組...", newGroupPlaceholder: "輸入新群組名稱...", aliasLabel: "自訂花名 (Alias)", colorLabel: "顏色標籤",
        groupHome: "🏠 屋企落樓", groupWork: "💼 返工轉車", arriving: "即將抵達", minutes: "分鐘", no_schedule: "暫無班次", load_failed: "連線失敗",
        emptyDesc: "尚未設定任何路線，立即去設定中心打造專屬你嘅出門儀表板啦！", goToSetupBtn: "+ 新增路線", 
        static_select_placeholder: "請選擇綫路 / 航線...", placeholderMTR: "請選擇港鐵路線...", placeholderLRT: "請選擇輕鐵路線...",
        transitBUS: "巴士", transitKMB: "九巴", transitLWB: "龍運", transitCTB: "城巴", transitMTR: "港鐵", transitGMB: "綠色小巴", transitGMB_new: "專線小巴", transitNLB: "嶼巴", transitLRT: "輕鐵",
        outbound: "去程", inbound: "回程", ctb_outbound: "去程", ctb_inbound: "回程",
        
        dataVaultTitle: "數據保險箱", dataVaultDesc: "安全備份你的儀表板路線及群組設定。換手機時可隨時還原。", exportBtn: "匯出備份", importBtn: "匯入還原",
        displaySettingsTitle: "顯示設定", langLabel: "介面語言 (Language)", langTc: "繁體", langSc: "简体", langEn: "ENG",
        refreshLabel: "ETA 自動刷新頻率", refresh15: "15秒 (極速)", refresh30: "30秒 (預設)", refresh60: "60秒 (省電)",
        dangerZoneTitle: "危險區域", factoryResetBtn: "恢復原廠設定 (清空所有路線)", exportNoRoutes: "儀表板目前沒有任何路線，無須備份！",
        importSuccessAlert: "🎉 成功還原備份資料！請前往儀表板查看。", importErrorFormat: "❌ 檔案格式錯誤，請確保選擇正確的 JSON 備份檔。",
        refreshSetMsg1: "已將 ETA 刷新頻率設為 ", refreshSetMsg2: " 秒。", factoryResetWarn: "🚨 警告：這將會清除你所有的路線、自訂花名及群組設定。\n\n這個動作無法復原！確定要繼續嗎？", factoryResetDone: "🗑️ 系統已成功恢復原廠設定。",
        deleteGroupConfirm: "⚠️ 確定要刪除整個群組「{group}」及裡面所有的路線嗎？\n\n此動作無法復原！",
        
        footerDisclaimerBtn: "關於我們、條款及免責聲明", footerCopyright: "© 2026 貼地通", footerDevTeam: "開發團隊: ", footerDevName: "懶人工具駅",
        modalTitle: "免責聲明及服務條款", 
        modalP1: "<strong>1. 數據來源與準確性：</strong>本應用程式提供的交通到站時間均擷取自開放數據。我們不保證數據的絕對準確性。",
        modalP2: "<strong>2. 僅供參考：</strong>資訊僅供參考，強烈建議使用者提早出門。",
        modalP3: "<strong>3. 隱私與數據安全：</strong>本程式採用無伺服器架構，所有路線設定均儲存於您的設備。",
        modalBtn: "我明白及接受",

        // User Manual
        tabTitleManual: "貼地通 - 使用指南", manualTitle: "User Manual", manualSubtitle: "貼地通 使用指南",
        manualObjectiveTitle: "<i class='fas fa-bullseye text-red-500 mr-2'></i>設計初衷 (Objective)",
        manualObjP1: "<strong>貼地通 (HK Transit Hub)</strong> 旨在為香港市民打造一個<strong>「極速、零廣告、高度個人化」</strong>的日常通勤儀表板。",
        manualObjP2: "有別於傳統的交通 App 需要每次重新輸入路線和車站，本程式讓你將最常用的路線（如「屋企落樓」、「放工轉車」）一次性釘選在首頁。打開網頁，所有目標車次的時間立刻一目了然，助你精準掌握出門時機。",
        manualHeaderTitle: "<i class='fas fa-window-maximize text-blue-500 mr-2'></i>頂部列功能 (Header Features)",
        manualShareTitle: "分享應用程式 (Share App)", manualShareDesc: "點擊頂部的 <i class='fas fa-share-nodes mx-1'></i> 分享圖示，你可以快速將「貼地通」的網址發送給親朋好友。",
        manualBookTitle: "使用指南 (User Manual)", manualBookDesc: "點擊頂部的 <i class='fas fa-book mx-1'></i> 書本圖示，即可隨時返回本頁面查閱各項功能的使用教學。",
        manualLangTitle: "切換語言 (Language Switch)", manualLangDesc: "點擊頂部的 <strong>繁 | 简 | EN</strong> 即可即時切換整個應用程式的顯示語言。",
        manualBasicTitle: "<i class='fas fa-hand-pointer text-blue-500 mr-2'></i>基礎操作 (Basic Usage)",
        manualAddTitle: "新增路線 (Add Routes)", manualAddDesc: "點擊底部 <strong><i class='fas fa-circle-plus text-[#B8860B] mx-1'></i> 新增</strong> 進入設定中心，選擇交通工具、搜尋路線，並將其釘選到你的儀表板。",
        manualDragTitle: "排序與整理 (Drag & Reorder)", manualDragDesc: "在儀表板中，長按群組標題旁邊的 <i class='fas fa-grip-vertical text-gray-400 mx-1'></i> 或卡片右側的 <i class='fas fa-bars text-gray-400 mx-1'></i>，即可上下拖曳，將最常用的路線排在最頂。",
        manualDelTitle: "刪除路線 (Swipe to Delete)", manualDelDesc: "將不想要的路線卡片向左滑動 <strong>(Swipe Left)</strong>，垃圾桶圖示便會出現，再次點擊即可刪除。你亦可以直接點擊群組標題旁的垃圾桶 <i class='fas fa-trash-can text-red-500 mx-1'></i> 刪除整個群組。",
        manualBackupTitle: "數據備份 (Backup Data)", manualBackupDesc: "點擊底部 <strong><i class='fas fa-gear text-[#B8860B] mx-1'></i> 設定</strong>，你可以隨時將目前的路線佈局匯出成 JSON 檔案。日後更換手機或清理瀏覽器數據後，只需匯入該檔案即可瞬間復原。",
        
        // Share App
        shareText: "極速、零廣告的香港交通 ETA 儀表板！",
        linkCopied: "🔗 連結已複製到剪貼簿！",

        // MTR Routes & Dests
        route_tcl: "東涌綫", route_tml: "屯馬綫", route_ktl: "觀塘綫", route_twl: "荃灣綫", route_isl: "港島綫", route_eal: "東鐵綫", route_sil: "南港島綫", route_tkl: "將軍澳綫", route_ael: "機場快綫", route_drl: "迪士尼綫",
        route_lrt_505: "輕鐵 505 綫", route_lrt_507: "輕鐵 507 綫", route_lrt_610: "輕鐵 610 綫", route_lrt_614: "輕鐵 614 綫", route_lrt_614p: "輕鐵 614P 綫", route_lrt_615: "輕鐵 615 綫", route_lrt_615p: "輕鐵 615P 綫", route_lrt_705: "輕鐵 705 綫", route_lrt_706: "輕鐵 706 綫", route_lrt_751: "輕鐵 751 綫", route_lrt_761p: "輕鐵 761P 綫",
        dest_hong_kong: "香港", dest_tung_chung: "東涌", dest_wu_kai_sha: "烏溪沙", dest_tuen_mun: "屯門", dest_tiu_keng_leng: "調景嶺", dest_whampoa: "黃埔", dest_tsuen_wan: "荃灣", dest_central: "中環", dest_chai_wan: "柴灣", dest_kennedy_town: "堅尼地城", dest_lo_wu_lmc: "羅湖/落馬洲", dest_admiralty: "金鐘", dest_south_horizons: "海怡半島", dest_yuen_long: "元朗", dest_po_lam: "寶琳/康城", dest_north_point: "北角", dest_asia_world_expo: "博覽館", dest_disneyland: "迪士尼", dest_sunny_bay: "欣澳", dest_lrt_705_loop: "天水圍循環(逆)", dest_lrt_706_loop: "天水圍循環(順)", dest_tuen_mun_ferry: "屯門碼頭", dest_sam_shing: "三聖", dest_siu_hong: "兆康", dest_tin_king: "田景", dest_yau_oi: "友愛", dest_tin_yat: "天逸"
    },
    sc: {
        appName: "贴地通", setupTitle: "设定中心", step1Group: "第一步：设定群组", step2Select: "第二步：选择交通工具类别",
        step3Route: "第三步：路线与上车分站", step4Save: "第四步：个人化与储存", searchBtn: "全网智能搜寻", searchPlaceholder: "例如: 112, 46M, E33",
        loading: "大脑联查中...", selectStop: "请选择上车分站...", saveBtn: "新增至仪表板", navHome: "仪表板", navAdd: "新增", navSetup: "设定",
        selectGroup: "请选择或建立群组...", createNewGroup: "➕ 建立新群组...", newGroupPlaceholder: "输入新群组名称...", aliasLabel: "自订花名 (Alias)", colorLabel: "颜色标签",
        groupHome: "🏠 屋企落楼", groupWork: "💼 返工转车", arriving: "即将抵达", minutes: "分钟", no_schedule: "暂无班次", load_failed: "连线失败",
        emptyDesc: "尚未设定任何路线，立即去设定中心打造专属您的出门仪表板吧！", goToSetupBtn: "+ 新增路线", 
        static_select_placeholder: "请选择线路 / 航线...", placeholderMTR: "请选择港铁路线...", placeholderLRT: "请选择轻铁路线...",
        transitBUS: "巴士", transitKMB: "九巴", transitLWB: "龙运", transitCTB: "城巴", transitMTR: "港铁", transitGMB: "绿色小巴", transitGMB_new: "专线小巴", transitNLB: "屿巴", transitLRT: "轻铁",
        outbound: "去程", inbound: "回程", ctb_outbound: "去程", ctb_inbound: "回程",

        dataVaultTitle: "数据保险箱", dataVaultDesc: "安全备份你的仪表板路线及群组设定。换手机时可随时还原。", exportBtn: "导出备份", importBtn: "汇入还原",
        displaySettingsTitle: "显示设定", langLabel: "界面语言", langTc: "繁体", langSc: "简体", langEn: "ENG",
        refreshLabel: "ETA 自动刷新频率", refresh15: "15秒 (极速)", refresh30: "30秒 (默认)", refresh60: "60秒 (省电)",
        dangerZoneTitle: "危险区域", factoryResetBtn: "恢复原厂设定", exportNoRoutes: "仪表板目前没有任何路线，无须备份！",
        importSuccessAlert: "🎉 成功还原备份资料！请前往仪表板查看。", importErrorFormat: "❌ 档案格式错误，请确保选择正确的 JSON 备份档。",
        refreshSetMsg1: "已将 ETA 刷新频率设为 ", refreshSetMsg2: " 秒。", factoryResetWarn: "🚨 警告：这将会清除你所有的路线。\n\n确定要继续吗？", factoryResetDone: "🗑️ 系统已成功恢复原厂设定。",
        deleteGroupConfirm: "⚠️ 确定要删除整个群组「{group}」及里面所有的路线吗？\n\n此动作无法复原！",
        
        footerDisclaimerBtn: "关于我们、条款及免责声明", footerCopyright: "© 2026 贴地通", footerDevTeam: "开发团队: ", footerDevName: "懒人工具驿",
        modalTitle: "免责声明及服务条款", 
        modalP1: "<strong>1. 数据来源：</strong>数据取自开放数据。我们不保证绝对准确性。",
        modalP2: "<strong>2. 仅供参考：</strong>资讯仅供参考，请提早出门。",
        modalP3: "<strong>3. 隐私：</strong>所有设定均储存於您的设备本地端。",
        modalBtn: "我明白及接受",

        // User Manual
        tabTitleManual: "贴地通 - 使用指南", manualTitle: "User Manual", manualSubtitle: "贴地通 使用指南",
        manualObjectiveTitle: "<i class='fas fa-bullseye text-red-500 mr-2'></i>设计初衷 (Objective)",
        manualObjP1: "<strong>贴地通 (HK Transit Hub)</strong> 旨在为香港市民打造一个<strong>「极速、零广告、高度个人化」</strong>的日常通勤仪表板。",
        manualObjP2: "有别于传统的交通 App 需要每次重新输入路线和车站，本程式让你将最常用的路线（如「屋企落楼」、「放工转车」）一次性钉选在首页。打开网页，所有目标车次的时间立刻一目了然，助你精准掌握出门时机。",
        manualHeaderTitle: "<i class='fas fa-window-maximize text-blue-500 mr-2'></i>顶部列功能 (Header Features)",
        manualShareTitle: "分享应用程式 (Share App)", manualShareDesc: "点击顶部的 <i class='fas fa-share-nodes mx-1'></i> 分享图示，你可以快速将「贴地通」的网址发送给亲朋好友。",
        manualBookTitle: "使用指南 (User Manual)", manualBookDesc: "点击顶部的 <i class='fas fa-book mx-1'></i> 书本图示，即可随时返回本页面查阅各项功能的使用教学。",
        manualLangTitle: "切换语言 (Language Switch)", manualLangDesc: "点击顶部的 <strong>繁 | 简 | EN</strong> 即可即时切换整个应用程式的显示语言。",
        manualBasicTitle: "<i class='fas fa-hand-pointer text-blue-500 mr-2'></i>基础操作 (Basic Usage)",
        manualAddTitle: "新增路线 (Add Routes)", manualAddDesc: "点击底部 <strong><i class='fas fa-circle-plus text-[#B8860B] mx-1'></i> 新增</strong> 进入设定中心，选择交通工具、搜寻路线，并将其钉选到你的仪表板。",
        manualDragTitle: "排序与整理 (Drag & Reorder)", manualDragDesc: "在仪表板中，长按群组标题旁边的 <i class='fas fa-grip-vertical text-gray-400 mx-1'></i> 或卡片右侧的 <i class='fas fa-bars text-gray-400 mx-1'></i>，即可上下拖曳，将最常用的路线排在最顶。",
        manualDelTitle: "删除路线 (Swipe to Delete)", manualDelDesc: "将不想要的路线卡片向左滑动 <strong>(Swipe Left)</strong>，垃圾桶图示便会出现，再次点击即可删除。你亦可以直接点击群组标题旁的垃圾桶 <i class='fas fa-trash-can text-red-500 mx-1'></i> 删除整个群组。",
        manualBackupTitle: "数据备份 (Backup Data)", manualBackupDesc: "点击底部 <strong><i class='fas fa-gear text-[#B8860B] mx-1'></i> 设定</strong>，你可以随时将目前的路线布局汇出成 JSON 档案。日后更换手机或清理浏览器数据后，只需汇入该档案即可瞬间复原。",
        
        // Share App
        shareText: "极速、零广告的香港交通 ETA 仪表板！",
        linkCopied: "🔗 连结已复制到剪贴簿！",

        // MTR Routes & Dests
        route_tcl: "东涌线", route_tml: "屯马线", route_ktl: "观塘线", route_twl: "荃湾线", route_isl: "港岛线", route_eal: "东铁线", route_sil: "南港岛线", route_tkl: "将军澳线", route_ael: "机场快线", route_drl: "迪士尼线",
        route_lrt_505: "轻铁 505 线", route_lrt_507: "轻铁 507 线", route_lrt_610: "轻铁 610 线", route_lrt_614: "轻铁 614 线", route_lrt_614p: "轻铁 614P 线", route_lrt_615: "轻铁 615 线", route_lrt_615p: "轻铁 615P 线", route_lrt_705: "轻铁 705 线", route_lrt_706: "轻铁 706 线", route_lrt_751: "轻铁 751 线", route_lrt_761p: "轻铁 761P 线",
        dest_hong_kong: "香港", dest_tung_chung: "东涌", dest_wu_kai_sha: "乌溪沙", dest_tuen_mun: "屯门", dest_tiu_keng_leng: "调景岭", dest_whampoa: "黄埔", dest_tsuen_wan: "荃湾", dest_central: "中环", dest_chai_wan: "柴湾", dest_kennedy_town: "坚尼地城", dest_lo_wu_lmc: "罗湖/落马洲", dest_admiralty: "金钟", dest_south_horizons: "海怡半岛", dest_yuen_long: "元朗", dest_po_lam: "宝琳/康城", dest_north_point: "北角", dest_asia_world_expo: "博览馆", dest_disneyland: "迪士尼", dest_sunny_bay: "欣澳", dest_lrt_705_loop: "天水围循环(逆)", dest_lrt_706_loop: "天水围循环(顺)", dest_tuen_mun_ferry: "屯门码头", dest_sam_shing: "三圣", dest_siu_hong: "兆康", dest_tin_king: "田景", dest_yau_oi: "友爱", dest_tin_yat: "天逸"
    },
    en: {
        appName: "Transit Hub", setupTitle: "Setup Hub", step1Group: "Step 1: Set Group", step2Select: "Step 2: Select Transit",
        step3Route: "Step 3: Route & Stops", step4Save: "Step 4: Save", searchBtn: "Omni-Search", searchPlaceholder: "e.g., 112, 46M, E33",
        loading: "Connecting...", selectStop: "Select a stop...", saveBtn: "Add to Dashboard", navHome: "Dashboard", navAdd: "Add", navSetup: "Setup",
        selectGroup: "Select or create group...", createNewGroup: "➕ Create new group...", newGroupPlaceholder: "Enter new group name...", aliasLabel: "Custom Alias", colorLabel: "Color Tag",
        groupHome: "🏠 Home", groupWork: "💼 Commute", arriving: "Arriving", minutes: "mins", no_schedule: "No departures", load_failed: "Failed",
        emptyDesc: "No routes set up yet.", goToSetupBtn: "+ Add Route", 
        static_select_placeholder: "Select Route...", placeholderMTR: "Select MTR Line...", placeholderLRT: "Select Light Rail Line...",
        transitBUS: "Bus", transitKMB: "KMB", transitLWB: "LWB", transitCTB: "CTB", transitMTR: "MTR", transitGMB: "Minibus", transitGMB_new: "GMB", transitNLB: "NLB", transitLRT: "Light Rail",
        outbound: "Outbound", inbound: "Inbound", ctb_outbound: "Outbound", ctb_inbound: "Inbound",

        dataVaultTitle: "Data Vault", dataVaultDesc: "Securely backup your dashboard routes and groups. Restore them anytime.", exportBtn: "Export Backup", importBtn: "Import & Restore",
        displaySettingsTitle: "Display Settings", langLabel: "Interface Language", langTc: "繁體", langSc: "简体", langEn: "ENG",
        refreshLabel: "ETA Auto Refresh Rate", refresh15: "15s (Fast)", refresh30: "30s (Default)", refresh60: "60s (Eco)",
        dangerZoneTitle: "Danger Zone", factoryResetBtn: "Factory Reset", exportNoRoutes: "No routes on dashboard, nothing to backup!",
        importSuccessAlert: "🎉 Backup restored successfully! Please check your dashboard.", importErrorFormat: "❌ Invalid file format.",
        refreshSetMsg1: "ETA refresh rate set to ", refreshSetMsg2: " seconds.", factoryResetWarn: "🚨 WARNING: This will clear ALL your routes.\n\nAre you sure?", factoryResetDone: "🗑️ System has been successfully reset.",
        deleteGroupConfirm: "⚠️ Are you sure you want to delete the entire group '{group}' and all its routes?\n\nThis action cannot be undone!",
        
        footerDisclaimerBtn: "About Us, Terms & Disclaimer", footerCopyright: "© 2026 HK Transit Hub", footerDevTeam: "Dev Team: ", footerDevName: "Lazy Tools Station",
        modalTitle: "Disclaimer & Terms", 
        modalP1: "<strong>1. Data Source:</strong> Data retrieved from DATA.GOV.HK. Not guaranteed to be accurate.",
        modalP2: "<strong>2. Reference Only:</strong> For reference only. Allow ample time for travel.",
        modalP3: "<strong>3. Privacy:</strong> Data stored locally on your device.",
        modalBtn: "I Accept",

        // User Manual
        tabTitleManual: "HK Transit Hub - Manual", manualTitle: "User Manual", manualSubtitle: "HK Transit Hub User Guide",
        manualObjectiveTitle: "<i class='fas fa-bullseye text-red-500 mr-2'></i>Objective",
        manualObjP1: "<strong>HK Transit Hub</strong> aims to provide Hong Kong citizens with a <strong>lightning-fast, ad-free, and highly personalized</strong> daily commute dashboard.",
        manualObjP2: "Unlike traditional transit apps that require repetitive searching, this app lets you pin your most frequent routes directly to the home screen. Open the app, and your target ETAs are instantly visible.",
        manualHeaderTitle: "<i class='fas fa-window-maximize text-blue-500 mr-2'></i>Header Features",
        manualShareTitle: "Share App", manualShareDesc: "Tap the <i class='fas fa-share-nodes mx-1'></i> share icon at the top to quickly send the app link to your friends and family.",
        manualBookTitle: "User Manual", manualBookDesc: "Tap the <i class='fas fa-book mx-1'></i> book icon at the top to access this user manual at any time.",
        manualLangTitle: "Language Switch", manualLangDesc: "Tap <strong>繁 | 简 | EN</strong> at the top to instantly switch the app's display language.",
        manualBasicTitle: "<i class='fas fa-hand-pointer text-blue-500 mr-2'></i>Basic Usage",
        manualAddTitle: "Add Routes", manualAddDesc: "Tap <strong><i class='fas fa-circle-plus text-[#B8860B] mx-1'></i> Add</strong> at the bottom to enter the Setup Hub. Select your transit type, search for a route, and pin it to your dashboard.",
        manualDragTitle: "Drag & Reorder", manualDragDesc: "On the dashboard, long-press the <i class='fas fa-grip-vertical text-gray-400 mx-1'></i> next to a group title or <i class='fas fa-bars text-gray-400 mx-1'></i> on a card to drag and reorder them to your preference.",
        manualDelTitle: "Swipe to Delete", manualDelDesc: "<strong>Swipe Left</strong> on any route card to reveal the trash icon for deletion. You can also tap the trash icon <i class='fas fa-trash-can text-red-500 mx-1'></i> next to a group title to delete the entire group at once.",
        manualBackupTitle: "Backup Data", manualBackupDesc: "Tap <strong><i class='fas fa-gear text-[#B8860B] mx-1'></i> Setup</strong> to export your current dashboard layout as a JSON file. If you switch phones, simply import this file to restore everything instantly.",
        
        // Share App
        shareText: "Lightning-fast, ad-free HK Transit ETA Dashboard!",
        linkCopied: "🔗 Link copied to clipboard!",

        // MTR Routes & Dests
        route_tcl: "Tung Chung Line", route_tml: "Tuen Ma Line", route_ktl: "Kwun Tong Line", route_twl: "Tsuen Wan Line", route_isl: "Island Line", route_eal: "East Rail Line", route_sil: "South Island Line", route_tkl: "Tseung Kwan O Line", route_ael: "Airport Express", route_drl: "Disneyland Resort Line",
        route_lrt_505: "LRT 505", route_lrt_507: "LRT 507", route_lrt_610: "LRT 610", route_lrt_614: "LRT 614", route_lrt_614p: "LRT 614P", route_lrt_615: "LRT 615", route_lrt_615p: "LRT 615P", route_lrt_705: "LRT 705", route_lrt_706: "LRT 706", route_lrt_751: "LRT 751", route_lrt_761p: "LRT 761P",
        dest_hong_kong: "Hong Kong", dest_tung_chung: "Tung Chung", dest_wu_kai_sha: "Wu Kai Sha", dest_tuen_mun: "Tuen Mun", dest_tiu_keng_leng: "Tiu Keng Leng", dest_whampoa: "Whampoa", dest_tsuen_wan: "Tsuen Wan", dest_central: "Central", dest_chai_wan: "Chai Wan", dest_kennedy_town: "Kennedy Town", dest_lo_wu_lmc: "Lo Wu / LMC", dest_admiralty: "Admiralty", dest_south_horizons: "South Horizons", dest_yuen_long: "Yuen Long", dest_po_lam: "Po Lam / LOHAS", dest_north_point: "North Point", dest_asia_world_expo: "AsiaWorld-Expo", dest_disneyland: "Disneyland", dest_sunny_bay: "Sunny Bay", dest_lrt_705_loop: "Tin Shui Wai Loop", dest_lrt_706_loop: "Tin Shui Wai Loop", dest_tuen_mun_ferry: "Tuen Mun Pier", dest_sam_shing: "Sam Shing", dest_siu_hong: "Siu Hong", dest_tin_king: "Tin King", dest_yau_oi: "Yau Oi", dest_tin_yat: "Tin Yat"
    }
};

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => { 
        const key = el.getAttribute('data-i18n'); 
        if (langDict[currentLang] && langDict[currentLang][key]) { 
            el.innerHTML = langDict[currentLang][key]; 
        } 
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { 
        const key = el.getAttribute('data-i18n-placeholder'); 
        if (langDict[currentLang] && langDict[currentLang][key]) { 
            el.setAttribute('placeholder', langDict[currentLang][key]); 
        } 
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => { 
        const key = el.getAttribute('data-i18n-title'); 
        if (langDict[currentLang] && langDict[currentLang][key]) { 
            el.setAttribute('title', langDict[currentLang][key]); 
        } 
    });
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('transit_app_lang', lang);
    
    if (typeof loadExistingGroups === 'function') loadExistingGroups(); 
    if (typeof renderDirectionTabs === 'function' && window.currentRouteData) { renderDirectionTabs(); renderStopDropdown(); }
    if (typeof initDashboard === 'function') initDashboard(); 
    
    translatePage();
    
    document.querySelectorAll('.lang-btn').forEach(btn => { 
        btn.classList.remove('text-[#B8860B]', 'text-yellow-300', 'text-white', 'font-bold'); 
        btn.classList.add('text-gray-400'); 
    });
    
    const activeBtn = document.getElementById(`btn-${lang}`);
    if(activeBtn) { 
        activeBtn.classList.remove('text-gray-400'); 
        activeBtn.classList.add('text-[#B8860B]', 'font-bold'); 
    }
}

function getTranslation(key, defaultText) { 
    return (langDict[currentLang] && langDict[currentLang][key]) ? langDict[currentLang][key] : (defaultText || key); 
}