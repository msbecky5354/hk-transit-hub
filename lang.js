let currentLang = localStorage.getItem('transit_app_lang') || 'tc';

const langDict = {
    tc: {
        appName: "貼地通", setupTitle: "設定中心", step1Group: "第一步：設定群組", step2Select: "第二步：選擇交通工具類別",
        step3Route: "第三步：路線與上車分站", step4Save: "第四步：個人化與儲存", searchBtn: "全網智能搜尋 (Omni-Search)", searchPlaceholder: "例如: 112, 46M, E33",
        loading: "大腦聯查中...", selectStop: "請選擇上車分站...", saveBtn: "新增至儀表板", navHome: "儀表板", navAdd: "新增", navSetup: "設定",
        selectGroup: "請選擇或建立群組...", createNewGroup: "➕ 建立新群組...", newGroupPlaceholder: "輸入新群組名稱...", aliasLabel: "自訂花名 (Alias)", colorLabel: "顏色標籤",
        groupHome: "🏠 屋企落樓", groupWork: "💼 返工轉車", arriving: "即將抵達", minutes: "分鐘", no_schedule: "暫無班次", load_failed: "連線失敗",
        emptyDesc: "尚未設定任何路線，立即去設定中心打造專屬你嘅出門儀表板啦！", goToSetupBtn: "+ 新增路線", static_select_placeholder: "請選擇綫路 / 航線...",
        transitBUS: "巴士", transitKMB: "九巴", transitLWB: "龍運", transitCTB: "城巴", transitMTR: "港鐵", transitGMB: "綠色小巴", transitGMB_new: "專線小巴", transitNLB: "嶼巴", transitLRT: "輕鐵",
        outbound: "去程", inbound: "回程", ctb_outbound: "去程", ctb_inbound: "回程",
        
        dataVaultTitle: "數據保險箱", dataVaultDesc: "安全備份你的儀表板路線及群組設定。換手機時可隨時還原。", exportBtn: "匯出備份", importBtn: "匯入還原",
        displaySettingsTitle: "顯示設定", langLabel: "介面語言 (Language)", langTc: "繁體", langSc: "简体", langEn: "ENG",
        refreshLabel: "ETA 自動刷新頻率", refresh15: "15秒 (極速)", refresh30: "30秒 (預設)", refresh60: "60秒 (省電)",
        dangerZoneTitle: "危險區域", factoryResetBtn: "恢復原廠設定 (清空所有路線)", exportNoRoutes: "儀表板目前沒有任何路線，無須備份！",
        importSuccessAlert: "🎉 成功還原備份資料！請前往儀表板查看。", importErrorFormat: "❌ 檔案格式錯誤，請確保選擇正確的 JSON 備份檔。",
        refreshSetMsg1: "已將 ETA 刷新頻率設為 ", refreshSetMsg2: " 秒。", factoryResetWarn: "🚨 警告：這將會清除你所有的路線、自訂花名及群組設定。\n\n這個動作無法復原！確定要繼續嗎？", factoryResetDone: "🗑️ 系統已成功恢復原廠設定。",
        userManualBtn: "使用說明", 
        
        footerDisclaimerBtn: "關於我們、條款及免責聲明", footerCopyright: "© 2026 貼地通", footerDevTeam: "開發團隊: ", footerDevName: "懶人工具駅",
        modalTitle: "免責聲明及服務條款", 
        modalP1: "<strong>1. 數據來源與準確性：</strong>本應用程式提供的交通到站時間均擷取自開放數據。我們不保證數據的絕對準確性。",
        modalP2: "<strong>2. 僅供參考：</strong>資訊僅供參考，強烈建議使用者提早出門。",
        modalP3: "<strong>3. 隱私與數據安全：</strong>本程式採用無伺服器架構，所有路線設定均儲存於您的設備。",
        modalBtn: "我明白及接受",

        tabTitleManual: "貼地通 - 使用指南", manualTitle: "User Manual", manualSubtitle: "貼地通 使用指南",
        manualBasicTitle: "<i class='fas fa-hand-pointer text-blue-500 mr-2'></i>基礎操作",
        manualAddTitle: "新增路線", manualAddDesc: "點擊底部新增進入設定中心。",
        manualDragTitle: "排序與整理", manualDragDesc: "長按群組標題或卡片右側，即可上下拖曳調整順序。",
        manualDelTitle: "刪除路線", manualDelDesc: "將不想要的路線卡片 <b>向左滑動</b> 即可刪除。",
        manualBackupTitle: "數據備份", manualBackupDesc: "點擊設定可將路線匯出成 JSON 檔案備份。",

        route_tcl: "東涌綫", route_tml: "屯馬綫", route_ktl: "觀塘綫", route_twl: "荃灣綫", route_isl: "港島綫", route_eal: "東鐵綫", route_sil: "南港島綫", route_tkl: "將軍澳綫", route_ael: "機場快綫", route_drl: "迪士尼綫",
        route_lrt_505: "輕鐵 505 綫", route_lrt_507: "輕鐵 507 綫", route_lrt_610: "輕鐵 610 綫", route_lrt_614: "輕鐵 614 綫", route_lrt_614p: "輕鐵 614P 綫", route_lrt_615: "輕鐵 615 綫", route_lrt_615p: "輕鐵 615P 綫", route_lrt_705: "輕鐵 705 綫", route_lrt_706: "輕鐵 706 綫", route_lrt_751: "輕鐵 751 綫", route_lrt_761p: "輕鐵 761P 綫", 
        
        dest_hong_kong: "香港", dest_tung_chung: "東涌", dest_wu_kai_sha: "烏溪沙", dest_tuen_mun: "屯門", dest_tiu_keng_leng: "調景嶺", dest_whampoa: "黃埔", dest_tsuen_wan: "荃灣", dest_central: "中環", dest_chai_wan: "柴灣", dest_kennedy_town: "堅尼地城", dest_lo_wu_lmc: "羅湖/落馬洲", dest_admiralty: "金鐘", dest_south_horizons: "海怡半島", dest_yuen_long: "元朗", dest_po_lam: "寶琳/康城", dest_north_point: "北角", dest_asia_world_expo: "博覽館", dest_disneyland: "迪士尼", dest_sunny_bay: "欣澳", dest_lrt_705_loop: "天水圍循環(逆)", dest_lrt_706_loop: "天水圍循環(順)", dest_tuen_mun_ferry: "屯門碼頭", dest_sam_shing: "三聖", dest_siu_hong: "兆康", dest_tin_king: "田景", dest_yau_oi: "友愛", dest_tin_yat: "天逸",
        
        stop_mtr_hok: "香港站", stop_mtr_kow: "九龍站", stop_mtr_oly: "奧運站", stop_mtr_nac: "南昌站", stop_mtr_lak: "荔景站", stop_mtr_tsy: "青衣站", stop_mtr_sun: "欣澳站", stop_mtr_tuc: "東涌站", stop_mtr_wks: "烏溪沙站", stop_mtr_mos: "馬鞍山站", stop_mtr_heo: "恆安站", stop_mtr_tsh: "大水坑站", stop_mtr_shm: "石門站", stop_mtr_cio: "第一城站", stop_mtr_stw: "沙田圍站", stop_mtr_ckt: "車公廟站", stop_mtr_taw: "大圍站", stop_mtr_hik: "顯徑站", stop_mtr_dih: "鑽石山站", stop_mtr_kat: "啟德站", stop_mtr_suw: "宋皇臺站", stop_mtr_tkw: "土瓜灣站", stop_mtr_hom: "何文田站", stop_mtr_huh: "紅磡站", stop_mtr_ets: "尖東站", stop_mtr_aus: "柯士甸站", stop_mtr_mef: "美孚站", stop_mtr_tww: "荃灣西站", stop_mtr_ksr: "錦上路站", stop_mtr_yul: "元朗站", stop_mtr_lop: "朗屏站", stop_mtr_tis: "天水圍站", stop_mtr_sih: "兆康站", stop_mtr_tum: "屯門站", stop_mtr_wha: "黃埔站", stop_mtr_ymt: "油麻地站", stop_mtr_mok: "旺角站", stop_mtr_pre: "太子站", stop_mtr_skm: "石硤尾站", stop_mtr_kot: "九龍塘站", stop_mtr_lof: "樂富站", stop_mtr_wts: "黃大仙站", stop_mtr_chh: "彩虹站", stop_mtr_kob: "九龍灣站", stop_mtr_ntk: "牛頭角站", stop_mtr_kwt: "觀塘站", stop_mtr_lat: "藍田站", stop_mtr_yat: "油塘站", stop_mtr_tik: "調景嶺站", stop_mtr_cen: "中環站", stop_mtr_adm: "金鐘站", stop_mtr_tst: "尖沙咀站", stop_mtr_jor: "佐敦站", stop_mtr_ssp: "深水埗站", stop_mtr_csw: "長沙灣站", stop_mtr_lck: "荔枝角站", stop_mtr_kwh: "葵興站", stop_mtr_kwf: "葵芳站", stop_mtr_twh: "大窩口站", stop_mtr_tsw: "荃灣站", stop_mtr_ket: "堅尼地城站", stop_mtr_hku: "香港大學站", stop_mtr_syp: "西營盤站", stop_mtr_shw: "上環站", stop_mtr_wac: "灣仔站", stop_mtr_cab: "銅鑼灣站", stop_mtr_tih: "天后站", stop_mtr_foh: "炮台山站", stop_mtr_nop: "北角站", stop_mtr_qub: "鰂魚涌站", stop_mtr_tak: "太古站", stop_mtr_swh: "西灣河站", stop_mtr_skw: "筲箕灣站", stop_mtr_hfc: "杏花邨站", stop_mtr_chw: "柴灣站", stop_mtr_exc: "會展站", stop_mtr_mkk: "旺角東站", stop_mtr_sht: "沙田站", stop_mtr_fot: "火炭站", stop_mtr_rac: "馬場站", stop_mtr_uni: "大學站", stop_mtr_tap: "大埔墟站", stop_mtr_two: "太和站", stop_mtr_fan: "粉嶺站", stop_mtr_shs: "上水站", stop_mtr_low: "羅湖站", stop_mtr_lmc: "落馬洲站", stop_mtr_ocp: "海洋公園站", stop_mtr_wch: "黃竹坑站", stop_mtr_let: "利東站", stop_mtr_soh: "海怡半島站", stop_mtr_tko: "將軍澳站", stop_mtr_lhp: "康城站", stop_mtr_hah: "坑口站", stop_mtr_poa: "寶琳站", stop_mtr_air: "機場站", stop_mtr_awe: "博覽館站", stop_mtr_dis: "迪士尼站",
        stop_kennedy_town: "堅尼地城站", stop_hku: "香港大學站", stop_sai_ying_pun: "西營盤站", stop_sheung_wan: "上環站", stop_central: "中環站", stop_admiralty: "金鐘站", stop_wan_chai: "灣仔站", stop_causeway_bay: "銅鑼灣站", stop_tin_hau: "天后站", stop_fortress_hill: "炮台山站", stop_north_point: "北角站", stop_quarry_bay: "鰂魚涌站", stop_tai_koo: "太古站", stop_shau_kei_wan: "筲箕灣站", stop_chai_wan: "柴灣站", stop_tsim_sha_tsui: "尖沙咀站", stop_jordan: "佐敦站", stop_yau_ma_tei: "油麻地站", stop_mong_kok: "旺角站", stop_prince_edward: "太子站", stop_sham_shui_po: "深水埗站", stop_cheung_sha_wan: "長沙灣站", stop_lai_chi_kok: "荔枝角站", stop_mei_foo: "美孚站", stop_tsuen_wan_west: "荃灣西站", stop_tsuen_wan: "荃灣站", stop_kowloon_tong: "九龙塘站", stop_lam_tin: "藍田站", stop_kowloon_bay: "九龍灣站", stop_choi_hung: "彩虹站", stop_whampoa: "黃埔站", stop_tiu_keng_leng: "調景嶺站", stop_yau_tong: "油塘站", stop_tseung_wan_o: "將軍澳站", stop_lohas_park: "康城站", stop_po_lam: "寶琳站", stop_tsing_yi: "青衣站", stop_tung_chung: "東涌站", stop_sunny_bay: "欣澳站", stop_hong_kong: "香港站", stop_kowloon: "九龍站", stop_olympic: "奧運站", stop_nam_cheong: "南昌站", stop_lai_king: "荔景站", stop_tai_wai: "大圍站", stop_sha_tin: "沙田站", stop_fo_tan: "火炭站", stop_university: "大學站", stop_tai_po_market: "大埔墟站", stop_fanling: "粉嶺站", stop_sheung_shui: "上水站", stop_lok_ma_chau: "落馬洲站", stop_lo_wu: "羅湖站", stop_ho_man_tin: "何文田站", stop_exhibition_centre: "會展站", stop_wu_kai_sha: "烏溪沙站", stop_ma_on_shan: "馬鞍山站", stop_kai_tak: "啟德站", stop_sung_wong_toi: "宋皇臺站", stop_yuen_long: "元朗站", stop_tin_shui_wai: "天水圍站", stop_tuen_mun: "屯門站", stop_ocean_park: "海洋公園站", stop_wong_chuk_hang: "黃竹坑站", stop_lei_tung: "利東站", stop_south_horizons: "海怡半島站",
        stop_lrt_tin_shui_wai: "天水圍", stop_lrt_tin_shui: "天瑞", stop_lrt_tin_wing: "天榮", stop_lrt_tuen_mun_ferry: "屯門碼頭", stop_lrt_yuen_long: "元朗", stop_lrt_siu_hong: "兆康", stop_lrt_sam_shing: "三聖", stop_lrt_tin_king: "田景", stop_lrt_tin_yat: "天逸", stop_lrt_yau_oi: "友愛", stop_lrt_pui_to: "杯渡", stop_lrt_town_centre: "市中心", stop_lrt_kin_on: "建安", stop_lrt_shan_king: "山景", stop_lrt_tai_hing: "大興", stop_lrt_lam_tei: "藍地", stop_lrt_hung_shui_kiu: "洪水橋", stop_lrt_tin_yiu: "天耀"
    },
    sc: {
        appName: "贴地通", setupTitle: "设定中心", step1Group: "第一步：设定群组", step2Select: "第二步：选择交通工具类别",
        step3Route: "第三步：路线与上车分站", step4Save: "第四步：个人化与储存", searchBtn: "全网智能搜寻", searchPlaceholder: "例如: 112, 46M, E33",
        loading: "大脑联查中...", selectStop: "请选择上车分站...", saveBtn: "新增至仪表板", navHome: "仪表板", navAdd: "新增", navSetup: "设定",
        selectGroup: "请选择或建立群组...", createNewGroup: "➕ 建立新群组...", newGroupPlaceholder: "输入新群组名称...", aliasLabel: "自订花名 (Alias)", colorLabel: "颜色标签",
        groupHome: "🏠 屋企落楼", groupWork: "💼 返工转车", arriving: "即将抵达", minutes: "分钟", no_schedule: "暂无班次", load_failed: "连线失败",
        emptyDesc: "尚未设定任何路线，立即去设定中心打造专属您的出门仪表板吧！", goToSetupBtn: "+ 新增路线", static_select_placeholder: "请选择线路 / 航线...",
        transitBUS: "巴士", transitKMB: "九巴", transitLWB: "龙运", transitCTB: "城巴", transitMTR: "港铁", transitGMB: "绿色小巴", transitGMB_new: "专线小巴", transitNLB: "屿巴", transitLRT: "轻铁",
        outbound: "去程", inbound: "回程", ctb_outbound: "去程", ctb_inbound: "回程",

        dataVaultTitle: "数据保险箱", dataVaultDesc: "安全备份你的仪表板路线及群组设定。换手机时可随时还原。", exportBtn: "导出备份", importBtn: "汇入还原",
        displaySettingsTitle: "显示设定", langLabel: "界面语言", langTc: "繁体", langSc: "简体", langEn: "ENG",
        refreshLabel: "ETA 自动刷新频率", refresh15: "15秒 (极速)", refresh30: "30秒 (默认)", refresh60: "60秒 (省电)",
        dangerZoneTitle: "危险区域", factoryResetBtn: "恢复原厂设定", exportNoRoutes: "仪表板目前没有任何路线，无须备份！",
        importSuccessAlert: "🎉 成功还原备份资料！请前往仪表板查看。", importErrorFormat: "❌ 档案格式错误，请确保选择正确的 JSON 备份档。",
        refreshSetMsg1: "已将 ETA 刷新频率设为 ", refreshSetMsg2: " 秒。", factoryResetWarn: "🚨 警告：这将会清除你所有的路线。\n\n确定要继续吗？", factoryResetDone: "🗑️ 系统已成功恢复原厂设定。",
        userManualBtn: "使用说明",
        
        footerDisclaimerBtn: "关于我们、条款及免责声明", footerCopyright: "© 2026 贴地通", footerDevTeam: "开发团队: ", footerDevName: "懒人工具驿",
        modalTitle: "免责声明及服务条款", 
        modalP1: "<strong>1. 数据来源：</strong>数据取自开放数据。我们不保证绝对准确性。",
        modalP2: "<strong>2. 仅供参考：</strong>资讯仅供参考，请提早出门。",
        modalP3: "<strong>3. 隐私：</strong>所有设定均储存於您的设备本地端。",
        modalBtn: "我明白及接受",

        tabTitleManual: "贴地通 - 使用指南", manualTitle: "User Manual", manualSubtitle: "贴地通 使用指南",
        manualBasicTitle: "<i class='fas fa-hand-pointer text-blue-500 mr-2'></i>基础操作",
        manualAddTitle: "新增路线", manualAddDesc: "点击底部新增进入设定中心。",
        manualDragTitle: "排序与整理", manualDragDesc: "长按可上下拖曳调整顺序。",
        manualDelTitle: "删除路线", manualDelDesc: "将卡片 <b>向左滑动</b> 即可删除。",
        manualBackupTitle: "数据备份", manualBackupDesc: "进入设定可将路线汇出成 JSON 档案。",

        route_tcl: "东涌线", route_tml: "屯马线", route_ktl: "观塘线", route_twl: "荃湾线", route_isl: "港岛线", route_eal: "东铁线", route_sil: "南港岛线", route_tkl: "将军澳线", route_ael: "机场快线", route_drl: "迪士尼线",
        route_lrt_505: "轻铁 505 线", route_lrt_507: "轻铁 507 线", route_lrt_610: "轻铁 610 线", route_lrt_614: "轻铁 614 线", route_lrt_614p: "轻铁 614P 线", route_lrt_615: "轻铁 615 线", route_lrt_615p: "轻铁 615P 线", route_lrt_705: "轻铁 705 线", route_lrt_706: "轻铁 706 线", route_lrt_751: "轻铁 751 线", route_lrt_761p: "轻铁 761P 线", 
        
        dest_hong_kong: "Hong Kong", dest_tung_chung: "Tung Chung", dest_wu_kai_sha: "Wu Kai Sha", dest_tuen_mun: "Tuen Mun", dest_tiu_keng_leng: "调景岭", dest_whampoa: "黄埔", dest_tsuen_wan: "荃湾", dest_central: "中环", dest_chai_wan: "柴湾", dest_kennedy_town: "坚尼地城", dest_lo_wu_lmc: "罗湖/落马洲", dest_admiralty: "金钟", dest_south_horizons: "海怡半岛", dest_yuen_long: "元朗", dest_po_lam: "宝琳", dest_north_point: "北角", dest_asia_world_expo: "博览馆", dest_disneyland: "迪士尼", dest_sunny_bay: "欣澳", dest_lrt_705_loop: "天水围循环", dest_lrt_706_loop: "天水围循环", dest_tuen_mun_ferry: "屯门码头", dest_sam_shing: "三圣", dest_siu_hong: "兆康", dest_tin_king: "田景", dest_yau_oi: "友爱", dest_tin_yat: "天逸",
        
        stop_mtr_hok: "香港站", stop_mtr_kow: "九龙站", stop_mtr_oly: "奥运站", stop_mtr_nac: "南昌站", stop_mtr_lak: "荔景站", stop_mtr_tsy: "青衣站", stop_mtr_sun: "欣澳站", stop_mtr_tuc: "东涌站", stop_mtr_wks: "乌溪沙站", stop_mtr_mos: "马鞍山站", stop_mtr_heo: "恒安站", stop_mtr_tsh: "大水坑站", stop_mtr_shm: "石门站", stop_mtr_cio: "第一城站", stop_mtr_stw: "沙田围站", stop_mtr_ckt: "车公庙站", stop_mtr_taw: "大围站", stop_mtr_hik: "显径站", stop_mtr_dih: "钻石山站", stop_mtr_kat: "启德站", stop_mtr_suw: "宋皇台站", stop_mtr_tkw: "土瓜湾站", stop_mtr_hom: "何文田站", stop_mtr_huh: "红磡站", stop_mtr_ets: "尖东站", stop_mtr_aus: "柯士甸站", stop_mtr_mef: "美孚站", stop_mtr_tww: "荃湾西站", stop_mtr_ksr: "锦上路站", stop_mtr_yul: "元朗站", stop_mtr_lop: "朗屏站", stop_mtr_tis: "天水围站", stop_mtr_sih: "兆康站", stop_mtr_tum: "屯门站", stop_mtr_wha: "黄埔站", stop_mtr_ymt: "油麻地站", stop_mtr_mok: "旺角站", stop_mtr_pre: "太子站", stop_mtr_skm: "石硖尾站", stop_mtr_kot: "九龙塘站", stop_mtr_lof: "乐富站", stop_mtr_wts: "黄大仙站", stop_mtr_chh: "彩虹站", stop_mtr_kob: "九龙湾站", stop_mtr_ntk: "牛头角站", stop_mtr_kwt: "观塘站", stop_mtr_lat: "蓝田站", stop_mtr_yat: "油塘站", stop_mtr_tik: "调景岭站", stop_mtr_cen: "中环站", stop_mtr_adm: "金钟站", stop_mtr_tst: "尖沙咀站", stop_mtr_jor: "佐敦站", stop_mtr_ssp: "深水埗站", stop_mtr_csw: "长沙湾站", stop_mtr_lck: "荔枝角站", stop_mtr_kwh: "葵兴站", stop_mtr_kwf: "葵芳站", stop_mtr_twh: "大窝口站", stop_mtr_tsw: "荃湾站", stop_mtr_ket: "坚尼地城站", stop_mtr_hku: "香港大学站", stop_mtr_syp: "西营盘站", stop_mtr_shw: "上环站", stop_mtr_wac: "湾仔站", stop_mtr_cab: "铜锣湾站", stop_mtr_tih: "天后站", stop_mtr_foh: "炮台山站", stop_mtr_nop: "北角站", stop_mtr_qub: "鲗鱼涌站", stop_mtr_tak: "太古站", stop_mtr_swh: "西湾河站", stop_mtr_skw: "筲箕湾站", stop_mtr_hfc: "杏花邨站", stop_mtr_chw: "柴湾站", stop_mtr_exc: "会展站", stop_mtr_mkk: "旺角东站", stop_mtr_sht: "沙田站", stop_mtr_fot: "火炭站", stop_mtr_rac: "马场站", stop_mtr_uni: "大学站", stop_mtr_tap: "大埔墟站", stop_mtr_two: "太和站", stop_mtr_fan: "粉岭站", stop_mtr_shs: "上水站", stop_mtr_low: "罗湖站", stop_mtr_lmc: "落马洲站", stop_mtr_ocp: "海洋公园站", stop_mtr_wch: "黄竹坑站", stop_mtr_let: "利东站", stop_mtr_soh: "海怡半岛站", stop_mtr_tko: "将军澳站", stop_mtr_lhp: "康城站", stop_mtr_hah: "坑口站", stop_mtr_poa: "宝琳站", stop_mtr_air: "机场站", stop_mtr_awe: "博览馆站", stop_mtr_dis: "迪士尼站",
        stop_kennedy_town: "坚尼地城站", stop_hku: "香港大学站", stop_sai_ying_pun: "西营盘站", stop_sheung_wan: "上环站", stop_central: "中环站", stop_admiralty: "金钟站", stop_wan_chai: "湾仔站", stop_causeway_bay: "铜锣湾站", stop_tin_hau: "天后站", stop_fortress_hill: "炮台山站", stop_north_point: "北角站", stop_quarry_bay: "鲗鱼涌站", stop_tai_koo: "太古站", stop_shau_kei_wan: "筲箕湾站", stop_chai_wan: "柴湾站", stop_tsim_sha_tsui: "尖沙咀站", stop_jordan: "佐敦站", stop_yau_ma_tei: "油麻地站", stop_mong_kok: "旺角站", stop_prince_edward: "太子站", stop_sham_shui_po: "深水埗站", stop_cheung_sha_wan: "长沙湾站", stop_lai_chi_kok: "荔枝角站", stop_mei_foo: "美孚站", stop_tsuen_wan_west: "荃湾西站", stop_tsuen_wan: "荃湾站", stop_kowloon_tong: "九龙塘站", stop_lam_tin: "蓝田站", stop_kowloon_bay: "九龙湾站", stop_choi_hung: "彩虹站", stop_whampoa: "黄埔站", stop_tiu_keng_leng: "调景岭站", stop_yau_tong: "油塘站", stop_tseung_wan_o: "将军澳站", stop_lohas_park: "康城站", stop_po_lam: "宝琳站", stop_tsing_yi: "青衣站", stop_tung_chung: "东涌站", stop_sunny_bay: "欣澳站", stop_hong_kong: "香港站", stop_kowloon: "九龙站", stop_olympic: "奥运站", stop_nam_cheong: "南昌站", stop_lai_king: "荔景站", stop_tai_wai: "大围站", stop_sha_tin: "沙田站", stop_fo_tan: "火炭站", stop_university: "大学站", stop_tai_po_market: "大埔墟站", stop_fanling: "粉岭站", stop_sheung_shui: "上水站", stop_lok_ma_chau: "落马洲站", stop_lo_wu: "罗湖站", stop_ho_man_tin: "何文田站", stop_exhibition_centre: "会展站", stop_wu_kai_sha: "乌溪沙站", stop_ma_on_shan: "马鞍山站", stop_kai_tak: "启德站", stop_sung_wong_toi: "宋皇台站", stop_yuen_long: "元朗站", stop_tin_shui_wai: "天水围站", stop_tuen_mun: "屯门站", stop_ocean_park: "海洋公园站", stop_wong_chuk_hang: "黄竹坑站", stop_lei_tung: "利东站", stop_south_horizons: "海怡半岛站",
        stop_lrt_tin_shui_wai: "天水围", stop_lrt_tin_shui: "天瑞", stop_lrt_tin_wing: "天荣", stop_lrt_tuen_mun_ferry: "屯门码头", stop_lrt_yuen_long: "元朗", stop_lrt_siu_hong: "兆康", stop_lrt_sam_shing: "三圣", stop_lrt_tin_king: "田景", stop_lrt_tin_yat: "天逸", stop_lrt_yau_oi: "友爱", stop_lrt_pui_to: "杯渡", stop_lrt_town_centre: "市中心", stop_lrt_kin_on: "建安", stop_lrt_shan_king: "山景", stop_lrt_tai_hing: "大兴", stop_lrt_lam_tei: "蓝地", stop_lrt_hung_shui_kiu: "洪水桥", stop_lrt_tin_yiu: "天耀"
    },
    en: {
        appName: "Transit Hub", setupTitle: "Setup Hub", step1Group: "Step 1: Set Group", step2Select: "Step 2: Select Transit",
        step3Route: "Step 3: Route & Stops", step4Save: "Step 4: Save", searchBtn: "Omni-Search", searchPlaceholder: "e.g., 112, 46M, E33",
        loading: "Connecting...", selectStop: "Select a stop...", saveBtn: "Add to Dashboard", navHome: "Dashboard", navAdd: "Add", navSetup: "Setup",
        selectGroup: "Select or create group...", createNewGroup: "➕ Create new group...", newGroupPlaceholder: "Enter new group name...", aliasLabel: "Custom Alias", colorLabel: "Color Tag",
        groupHome: "🏠 Home", groupWork: "💼 Commute", arriving: "Arriving", minutes: "mins", no_schedule: "No departures", load_failed: "Failed",
        emptyDesc: "No routes set up yet.", goToSetupBtn: "+ Add Route", static_select_placeholder: "Select Route...",
        transitBUS: "Bus", transitKMB: "KMB", transitLWB: "LWB", transitCTB: "CTB", transitMTR: "MTR", transitGMB: "Minibus", transitGMB_new: "GMB", transitNLB: "NLB", transitLRT: "Light Rail",
        outbound: "Outbound", inbound: "Inbound", ctb_outbound: "Outbound", ctb_inbound: "Inbound",

        dataVaultTitle: "Data Vault", dataVaultDesc: "Securely backup your dashboard routes and groups. Restore them anytime.", exportBtn: "Export Backup", importBtn: "Import & Restore",
        displaySettingsTitle: "Display Settings", langLabel: "Interface Language", langTc: "繁體", langSc: "简体", langEn: "ENG",
        refreshLabel: "ETA Auto Refresh Rate", refresh15: "15s (Fast)", refresh30: "30s (Default)", refresh60: "60s (Eco)",
        dangerZoneTitle: "Danger Zone", factoryResetBtn: "Factory Reset", exportNoRoutes: "No routes on dashboard, nothing to backup!",
        importSuccessAlert: "🎉 Backup restored successfully! Please check your dashboard.", importErrorFormat: "❌ Invalid file format.",
        refreshSetMsg1: "ETA refresh rate set to ", refreshSetMsg2: " seconds.", factoryResetWarn: "🚨 WARNING: This will clear ALL your routes.\n\nAre you sure?", factoryResetDone: "🗑️ System has been successfully reset.",
        userManualBtn: "User Manual", 
        
        footerDisclaimerBtn: "About Us, Terms & Disclaimer", footerCopyright: "© 2026 HK Transit Hub", footerDevTeam: "Dev Team: ", footerDevName: "Lazy Tools Station",
        modalTitle: "Disclaimer & Terms", 
        modalP1: "<strong>1. Data Source:</strong> Data retrieved from DATA.GOV.HK. Not guaranteed to be accurate.",
        modalP2: "<strong>2. Reference Only:</strong> For reference only. Allow ample time for travel.",
        modalP3: "<strong>3. Privacy:</strong> Data stored locally on your device.",
        modalBtn: "I Accept",

        tabTitleManual: "HK Transit Hub - Manual", manualTitle: "User Manual", manualSubtitle: "HK Transit Hub User Guide",
        manualBasicTitle: "<i class='fas fa-hand-pointer text-blue-500 mr-2'></i>Basic Usage",
        manualAddTitle: "Add Routes", manualAddDesc: "Tap Add at the bottom to search routes.",
        manualDragTitle: "Drag & Reorder", manualDragDesc: "Press and drag to reorder cards.",
        manualDelTitle: "Swipe to Delete", manualDelDesc: "<b>Swipe Left</b> on a card to delete.",
        manualBackupTitle: "Backup Data", manualBackupDesc: "Go to Settings to export/import JSON backup.",

        route_tcl: "Tung Chung Line", route_tml: "Tuen Ma Line", route_ktl: "Kwun Tong Line", route_twl: "Tsuen Wan Line", route_isl: "Island Line", route_eal: "East Rail Line", route_sil: "South Island Line", route_tkl: "Tseung Kwan O Line", route_ael: "Airport Express", route_drl: "Disneyland Resort Line",
        route_lrt_505: "LRT 505", route_lrt_507: "LRT 507", route_lrt_610: "LRT 610", route_lrt_614: "LRT 614", route_lrt_614p: "LRT 614P", route_lrt_615: "LRT 615", route_lrt_615p: "LRT 615P", route_lrt_705: "LRT 705", route_lrt_706: "LRT 706", route_lrt_751: "LRT 751", route_lrt_761p: "LRT 761P",
        
        dest_hong_kong: "Hong Kong", dest_tung_chung: "Tung Chung", dest_wu_kai_sha: "Wu Kai Sha", dest_tuen_mun: "Tuen Mun", dest_tiu_keng_leng: "Tiu Keng Leng", dest_whampoa: "Whampoa", dest_tsuen_wan: "Tsuen Wan", dest_central: "Central", dest_chai_wan: "Chai Wan", dest_kennedy_town: "Kennedy Town", dest_lo_wu_lmc: "Lo Wu/LMC", dest_admiralty: "Admiralty", dest_south_horizons: "South Horizons", dest_yuen_long: "Yuen Long", dest_po_lam: "Po Lam", dest_north_point: "North Point", dest_asia_world_expo: "AsiaWorld-Expo", dest_disneyland: "Disneyland", dest_sunny_bay: "Sunny Bay", dest_lrt_705_loop: "Tin Shui Wai Loop", dest_lrt_706_loop: "Tin Shui Wai Loop", dest_tuen_mun_ferry: "Tuen Mun Pier", dest_sam_shing: "Sam Shing", dest_siu_hong: "Siu Hong", dest_tin_king: "Tin King", dest_yau_oi: "Yau Oi", dest_tin_yat: "Tin Yat",
        
        stop_mtr_hok: "Hong Kong", stop_mtr_kow: "Kowloon", stop_mtr_oly: "Olympic", stop_mtr_nac: "Nam Cheong", stop_mtr_lak: "Lai King", stop_mtr_tsy: "Tsing Yi", stop_mtr_sun: "Sunny Bay", stop_mtr_tuc: "Tung Chung", stop_mtr_wks: "Wu Kai Sha", stop_mtr_mos: "Ma On Shan", stop_mtr_heo: "Heng On", stop_mtr_tsh: "Tai Shui Hang", stop_mtr_shm: "Shek Mun", stop_mtr_cio: "City One", stop_mtr_stw: "Sha Tin Wai", stop_mtr_ckt: "Che Kung Temple", stop_mtr_taw: "Tai Wai", stop_mtr_hik: "Hin Keng", stop_mtr_dih: "Diamond Hill", stop_mtr_kat: "Kai Tak", stop_mtr_suw: "Sung Wong Toi", stop_mtr_tkw: "To Kwa Wan", stop_mtr_hom: "Ho Man Tin", stop_mtr_huh: "Hung Hom", stop_mtr_ets: "East Tsim Sha Tsui", stop_mtr_aus: "Austin", stop_mtr_mef: "Mei Foo", stop_mtr_tww: "Tsuen Wan West", stop_mtr_ksr: "Kam Sheung Road", stop_mtr_yul: "Yuen Long", stop_mtr_lop: "Long Ping", stop_mtr_tis: "Tin Shui Wai", stop_mtr_sih: "Siu Hong", stop_mtr_tum: "Tuen Mun", stop_mtr_wha: "Whampoa", stop_mtr_ymt: "Yau Ma Tei", stop_mtr_mok: "Mong Kok", stop_mtr_pre: "Prince Edward", stop_mtr_skm: "Shek Kip Mei", stop_mtr_kot: "Kowloon Tong", stop_mtr_lof: "Lok Fu", stop_mtr_wts: "Wong Tai Sin", stop_mtr_chh: "Choi Hung", stop_mtr_kob: "Kowloon Bay", stop_mtr_ntk: "Ngau Tau Kok", stop_mtr_kwt: "Kwun Tong", stop_mtr_lat: "Lam Tin", stop_mtr_yat: "Yau Tong", stop_mtr_tik: "Tiu Keng Leng", stop_mtr_cen: "Central", stop_mtr_adm: "Admiralty", stop_mtr_tst: "Tsim Sha Tsui", stop_mtr_jor: "Jordan", stop_mtr_ssp: "Sham Shui Po", stop_mtr_csw: "Cheung Sha Wan", stop_mtr_lck: "Lai Chi Kok", stop_mtr_kwh: "Kwai Hing", stop_mtr_kwf: "Kwai Fong", stop_mtr_twh: "Tai Wo Hau", stop_mtr_tsw: "Tsuen Wan", stop_mtr_ket: "Kennedy Town", stop_mtr_hku: "HKU", stop_mtr_syp: "Sai Ying Pun", stop_mtr_shw: "Sheung Wan", stop_mtr_wac: "Wan Chai", stop_mtr_cab: "Causeway Bay", stop_mtr_tih: "Tin Hau", stop_mtr_foh: "Fortress Hill", stop_mtr_nop: "North Point", stop_mtr_qub: "Quarry Bay", stop_mtr_tak: "Tai Koo", stop_mtr_swh: "Sai Wan Ho", stop_mtr_skw: "Shau Kei Wan", stop_mtr_hfc: "Heng Fa Chuen", stop_mtr_chw: "Chai Wan", stop_mtr_exc: "Exhibition Centre", stop_mtr_mkk: "Mong Kok East", stop_mtr_sht: "Sha Tin", stop_mtr_fot: "Fo Tan", stop_mtr_rac: "Racecourse", stop_mtr_uni: "University", stop_mtr_tap: "Tai Po Market", stop_mtr_two: "Tai Wo", stop_mtr_fan: "Fanling", stop_mtr_shs: "Sheung Shui", stop_mtr_low: "Lo Wu", stop_mtr_lmc: "Lok Ma Chau", stop_mtr_ocp: "Ocean Park", stop_mtr_wch: "Wong Chuk Hang", stop_mtr_let: "Lei Tung", stop_mtr_soh: "South Horizons", stop_mtr_tko: "Tseung Kwan O", stop_mtr_lhp: "LOHAS Park", stop_mtr_hah: "Hang Hau", stop_mtr_poa: "Po Lam", stop_mtr_air: "Airport", stop_mtr_awe: "AsiaWorld-Expo", stop_mtr_dis: "Disneyland Resort",
        stop_kennedy_town: "Kennedy Town Station", stop_hku: "HKU Station", stop_sai_ying_pun: "Sai Ying Pun Station", stop_sheung_wan: "Sheung Wan Station", stop_central: "Central Station", stop_admiralty: "Admiralty Station", stop_wan_chai: "Wan Chai Station", stop_causeway_bay: "Causeway Bay Station", stop_tin_hau: "Tin Hau Station", stop_fortress_hill: "Fortress Hill Station", stop_north_point: "North Point Station", stop_quarry_bay: "Quarry Bay Station", stop_tai_koo: "Tai Koo Station", stop_shau_kei_wan: "Shau Kei Wan Station", stop_chai_wan: "Chai Wan Station", stop_tsim_sha_tsui: "Tsim Sha Tsui Station", stop_jordan: "Jordan Station", stop_yau_ma_tei: "Yau Ma Tei Station", stop_mong_kok: "Mong Kok Station", stop_prince_edward: "Prince Edward Station", stop_sham_shui_po: "Sham Shui Po Station", stop_cheung_sha_wan: "Cheung Sha Wan Station", stop_lai_chi_kok: "Lai Chi Kok Station", stop_mei_foo: "Mei Foo Station", stop_tsuen_wan_west: "Tsuen Wan West Station", stop_tsuen_wan: "Tsuen Wan Station", stop_kowloon_tong: "Kowloon Tong Station", stop_lam_tin: "Lam Tin Station", stop_kowloon_bay: "Kowloon Bay Station", stop_choi_hung: "Choi Hung Station", stop_whampoa: "Whampoa Station", stop_tiu_keng_leng: "Tiu Keng Leng Station", stop_yau_tong: "Yau Tong Station", stop_tseung_wan_o: "Tseung Kwan O Station", stop_lohas_park: "LOHAS Park Station", stop_po_lam: "Po Lam Station", stop_tsing_yi: "Tsing Yi Station", stop_tung_chung: "Tung Chung Station", stop_sunny_bay: "Sunny Bay Station", stop_hong_kong: "Hong Kong Station", stop_kowloon: "Kowloon Station", stop_olympic: "Olympic Station", stop_nam_cheong: "Nam Cheong Station", stop_lai_king: "Lai King Station", stop_tai_wai: "Tai Wai Station", stop_sha_tin: "Sha Tin Station", stop_fo_tan: "Fo Tan Station", stop_university: "University Station", stop_tai_po_market: "Tai Po Market Station", stop_fanling: "Fanling Station", stop_sheung_shui: "Sheung Shui Station", stop_lok_ma_chau: "Lok Ma Chau Station", stop_lo_wu: "Lo Wu Station", stop_ho_man_tin: "Ho Man Tin Station", stop_exhibition_centre: "Exhibition Centre Station", stop_wu_kai_sha: "Wu Kai Sha Station", stop_ma_on_shan: "Ma On Shan Station", stop_kai_tak: "Kai Tak Station", stop_sung_wong_toi: "Sung Wong Toi Station", stop_yuen_long: "Yuen Long Station", stop_tin_shui_wai: "Tin Shui Wai Station", stop_tuen_mun: "Tuen Mun Station", stop_ocean_park: "Ocean Park Station", stop_wong_chuk_hang: "Wong Chuk Hang Station", stop_lei_tung: "Lei Tung Station", stop_south_horizons: "South Horizons Station",
        stop_lrt_tin_shui_wai: "Tin Shui Wai", stop_lrt_tin_shui: "Tin Shui", stop_lrt_tin_wing: "Tin Wing", stop_lrt_tuen_mun_ferry: "Tuen Ferry Pier", stop_lrt_yuen_long: "Yuen Long", stop_lrt_siu_hong: "Siu Hong", stop_lrt_sam_shing: "Sam Shing", stop_lrt_tin_king: "Tin King", stop_lrt_tin_yat: "Tin Yat", stop_lrt_yau_oi: "Yau Oi", stop_lrt_pui_to: "Pui To", stop_lrt_town_centre: "Town Centre", stop_lrt_kin_on: "Kin On", stop_lrt_shan_king: "Shan King", stop_lrt_tai_hing: "Tai Hing", stop_lrt_lam_tei: "Lam Tei", stop_lrt_hung_shui_kiu: "Hung Shui Kiu", stop_lrt_tin_yiu: "Tin Yiu"
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
    
   // 替換 lang.js 內 setLang() 嘅最底部：
    document.querySelectorAll('.lang-btn').forEach(btn => { 
        // 大掃除：清走舊嘅黃字/白字
        btn.classList.remove('text-[#B8860B]', 'text-yellow-300', 'text-white', 'font-bold'); 
        btn.classList.add('text-gray-400'); // 變回淺灰色
    });
    
    const activeBtn = document.getElementById(`btn-${lang}`);
    if(activeBtn) { 
        activeBtn.classList.remove('text-gray-400'); 
        activeBtn.classList.add('text-[#B8860B]', 'font-bold'); // 選中變深金色！
    }
}

function getTranslation(key, defaultText) { 
    return (langDict[currentLang] && langDict[currentLang][key]) ? langDict[currentLang][key] : (defaultText || key); 
}