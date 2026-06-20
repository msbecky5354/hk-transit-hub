// 檔案：lang.js (MTR 全網補完對應字典)

let currentLang = localStorage.getItem('transit_app_lang') || 'tc';

const langDict = {
    tc: {
        appName: "貼地通 (HK Transit Hub)",
        setupTitle: "設定中心",
        step1Group: "第一步：設定群組",
        step2Select: "第二步：選擇交通工具類別",
        step3Route: "第三步：路線與上車分站",
        step4Save: "第四步：個人化與儲存",
        searchBtn: "全網智能搜尋 (Omni-Search)",
        searchPlaceholder: "例如: 112, 46M, B2P",
        loading: "大腦聯查中...",
        selectStop: "請選擇上車分站...",
        saveBtn: "新增至儀表板",
        navHome: "儀表板",
        navAdd: "新增",
        navSetup: "設定",
        selectGroup: "請選擇或建立群組...",
        createNewGroup: "➕ 建立新群組...",
        newGroupPlaceholder: "輸入新群組名稱...",
        aliasLabel: "自訂花名 (Alias)",
        colorLabel: "顏色標籤",
        groupHome: "🏠 屋企落樓",
        groupWork: "💼 返工轉車",
        arriving: "即將抵達",
        minutes: "分鐘",
        no_schedule: "暫無班次",
        load_failed: "連線失敗",
        emptyDesc: "尚未設定任何路線，立即去設定中心打造專屬你嘅出門儀表板啦！",
        goToSetupBtn: "+ 新增路線",
        static_select_placeholder: "請選擇綫路 / 航線...",
        
        transitBUS: "巴士", transitKMB: "九巴", transitCTB: "城巴",
        transitMTR: "港鐵", transitGMB: "綠色小巴", transitNLB: "嶼巴",
        transitLRT: "輕鐵", transitTRAM: "電車", transitFERRY: "渡輪",

        outbound: "去程", inbound: "回程", ctb_outbound: "去程", ctb_inbound: "回程",

        // 🚇 港鐵重鐵綫路翻譯
        route_tcl: "東涌綫 (Tung Chung Line)", route_tml: "屯馬綫 (Tuen Ma Line)",
        route_ktl: "觀塘綫 (Kwun Tong Line)", route_twl: "荃灣綫 (Tsuen Wan Line)",
        route_isl: "港島綫 (Island Line)", route_eal: "東鐵綫 (East Rail Line)",
        route_sil: "南港島綫 (South Island Line)", route_tkl: "將軍澳綫 (Tseung Kwan O Line)",
        route_ael: "機場快綫 (Airport Express)", route_drl: "迪士尼綫 (Disneyland Resort Line)",
        
        // 🚇 輕鐵 11 條路綫全網補完
        route_lrt_505: "輕鐵 505 綫", route_lrt_507: "輕鐵 507 綫",
        route_lrt_610: "輕鐵 610 綫", route_lrt_614: "輕鐵 614 綫", route_lrt_614p: "輕鐵 614P 綫",
        route_lrt_615: "輕鐵 615 綫", route_lrt_615p: "輕鐵 615P 綫",
        route_lrt_705: "輕鐵 705 綫", route_lrt_706: "輕鐵 706 綫",
        route_lrt_751: "輕鐵 751 綫", route_lrt_761p: "輕鐵 761P 綫", 

        // 🚃 電車雙向
        route_tram_east: "香港電車 (東行)", route_tram_west: "香港電車 (西行)",
        
        // ⛴️ 渡輪航線全網大滿貫
        route_ferry_cc: "中環 ↔ 長洲 (新渡輪)", route_ferry_mw: "中環 ↔ 梅窩 (新渡輪)",
        route_ferry_nwff_np_hh: "北角 ↔ 紅磡 (新渡輪)", route_ferry_nwff_np_kc: "北角 ↔ 九龍城 (新渡輪)",
        route_ferry_star_cen: "尖沙咀 ↔ 中環 (天星小輪)", route_ferry_star_wan: "尖沙咀 ↔ 灣仔 (天星小輪)",
        route_ferry_ysw: "中環 ↔ 榕樹灣 (港九小輪)", route_ferry_skw: "中環 ↔ 索罟灣 (港九小輪)",
        route_ferry_pc: "中環 ↔ 坪洲 (港九小輪)",
        route_ferry_db: "中環 ↔ 愉景灣 (愉景灣航運)", 
        route_ferry_ff_np_kt: "北角 ↔ 觀塘 (富裕小輪)", route_ferry_ff_np_hh: "北角 ↔ 紅磡 (富裕小輪)",
        route_ferry_ff_cen_hh: "中環 ↔ 紅磡 (富裕小輪)", route_ferry_ff_tm_to: "屯門 ↔ 大澳 (富裕小輪)",
        route_ferry_pi_cen_mw: "中環 ↔ 馬灣 (珀麗灣客運)", route_ferry_pi_tw_mw: "荃灣 ↔ 馬灣 (珀麗灣客運)",
        route_ferry_cs_swh_skt: "西灣河 ↔ 三家村 (珊瑚海)", route_ferry_cs_swh_kt: "西灣河 ↔ 觀塘 (珊瑚海)",

        // 📍 目的地翻譯
        dest_hong_kong: "香港", dest_tung_chung: "東涌", dest_wu_kai_sha: "烏溪沙", dest_tuen_mun: "屯門",
        dest_tiu_keng_leng: "調景嶺", dest_whampoa: "黃埔", dest_tsuen_wan: "荃灣", dest_central: "中環",
        dest_chai_wan: "柴灣", dest_kennedy_town: "堅尼地城", dest_lo_wu_lmc: "羅湖/落馬洲", dest_admiralty: "金鐘",
        dest_south_horizons: "海怡半島", dest_yuen_long: "元朗", dest_po_lam: "寶琳 / 康城",
        dest_north_point: "北角", dest_asia_world_expo: "博覽館", dest_disneyland: "迪士尼", dest_sunny_bay: "欣澳",
        dest_lrt_705_loop: "天水圍循環 (逆時針)", dest_lrt_706_loop: "天水圍循環 (順時針)",
        dest_tuen_mun_ferry: "屯門碼頭", dest_sam_shing: "三聖", dest_siu_hong: "兆康",
        dest_tin_king: "田景", dest_yau_oi: "友愛", dest_tin_yat: "天逸",
        dest_tram_eastbound: "往 筲箕灣/跑馬地", dest_tram_westbound: "往 堅尼地城/石塘咀",
        dest_cheung_chau: "長洲", dest_mui_wo: "梅窩", dest_tsim_sha_tsui: "尖沙咀", dest_wan_chai: "灣仔",
        dest_yung_shue_wan: "榕樹灣", dest_sok_kwu_wan: "索罟灣", dest_peng_chau: "坪洲",
        dest_discovery_bay: "愉景灣", dest_kwun_tong: "觀塘", dest_hung_hom: "紅磡", 
        dest_kowloon_city: "九龍城", dest_ma_wan: "馬灣 (珀麗灣)", dest_tai_o: "大澳", dest_sam_ka_tsuen: "三家村 (鯉魚門)", dest_sai_wan_ho: "西灣河",

        // 🚉 港鐵全網 10 條綫路近 100 車站翻譯
        stop_mtr_hok: "香港站", stop_mtr_kow: "九龍站", stop_mtr_oly: "奧運站", stop_mtr_nac: "南昌站", stop_mtr_lak: "荔景站", stop_mtr_tsy: "青衣站", stop_mtr_sow: "欣澳站", stop_mtr_tuc: "東涌站",
        stop_mtr_wks: "烏溪沙站", stop_mtr_mos: "馬鞍山站", stop_mtr_heo: "恆安站", stop_mtr_tsh: "大水坑站", stop_mtr_shm: "石門站", stop_mtr_cio: "第一城站", stop_mtr_stw: "沙田圍站", stop_mtr_che_kung_temple: "車公廟站", stop_mtr_taw: "大圍站", stop_mtr_hik: "顯徑站", stop_mtr_dih: "鑽石山站", stop_mtr_kat: "啟德站", stop_mtr_suw: "宋皇臺站", stop_mtr_tkw: "土瓜灣站", stop_mtr_hom: "何文田站", stop_mtr_huh: "紅磡站", stop_mtr_ets: "尖東站", stop_mtr_aus: "柯士甸站", stop_mtr_mef: "美孚站", stop_mtr_tww: "荃灣西站", stop_mtr_ksr: "錦上路站", stop_mtr_yul: "元朗站", stop_mtr_lop: "朗屏站", stop_mtr_tis: "天水圍站", stop_mtr_sih: "兆康站", stop_mtr_tum: "屯門站",
        stop_mtr_wha: "黃埔站", stop_mtr_ymt: "油麻地站", stop_mtr_mok: "旺角站", stop_mtr_pre: "太子站", stop_mtr_skm: "石硤尾站", stop_mtr_kot: "九龍塘站", stop_mtr_lof: "樂富站", stop_mtr_wts: "黃大仙站", stop_mtr_chh: "彩虹站", stop_mtr_kob: "九龍灣站", stop_mtr_ntk: "牛頭角站", stop_mtr_kwt: "觀塘站", stop_mtr_lat: "藍田站", stop_mtr_yat: "油塘站", stop_mtr_tik: "調景嶺站",
        stop_mtr_cen: "中環站", stop_mtr_adm: "金鐘站", stop_mtr_tst: "尖沙咀站", stop_mtr_jor: "佐敦站", stop_mtr_ssp: "深水埗站", stop_mtr_csw: "長沙灣站", stop_mtr_lck: "荔枝角站", stop_mtr_kwh: "葵興站", stop_mtr_twh: "葵芳站", stop_mtr_tsw: "荃灣站",
        stop_mtr_ket: "堅尼地城站", stop_mtr_hku: "香港大學站", stop_mtr_syp: "西營盤站", stop_mtr_shw: "上環站", stop_mtr_wac: "灣仔站", stop_mtr_cab: "銅鑼灣站", stop_mtr_tih: "天后站", stop_mtr_foh: "炮台山站", stop_mtr_nop: "北角站", stop_mtr_qub: "鰂魚涌站", stop_mtr_tak: "太古站", stop_mtr_skw: "筲箕灣站", stop_mtr_chw: "柴灣站",
        stop_mtr_exh: "會展站", stop_mtr_mkk: "旺角東站", stop_mtr_sht: "沙田站", stop_mtr_fot: "火炭站", stop_mtr_rac: "馬場站", stop_mtr_uni: "大學站", stop_mtr_tap: "大埔墟站", stop_mtr_two: "太和站", stop_mtr_fan: "粉嶺站", stop_mtr_shs: "上水站", stop_mtr_low: "羅湖站", stop_mtr_lmc: "落馬洲站",
        stop_mtr_ocp: "海洋公園站", stop_mtr_wch: "黃竹坑站", stop_mtr_let: "利東站", stop_mtr_soh: "海怡半島站",
        stop_mtr_tko: "將軍澳站", stop_mtr_lhp: "康城站", stop_mtr_hah: "坑口站", stop_mtr_poa: "寶琳站",
        stop_mtr_air: "機場站", stop_mtr_awe: "博覽館站", stop_mtr_dis: "迪士尼站",

        // 🚉 輕鐵全網重點車站翻譯
        stop_lrt_tin_shui_wai: "天水圍", stop_lrt_tin_shui: "天瑞", stop_lrt_tin_wing: "天榮",
        stop_lrt_tuen_mun_ferry: "屯門碼頭", stop_lrt_yuen_long: "元朗", stop_lrt_siu_hong: "兆康",
        stop_lrt_sam_shing: "三聖", stop_lrt_tin_king: "田景", stop_lrt_tin_yat: "天逸", stop_lrt_yau_oi: "友愛",
        stop_lrt_pui_to: "杯渡", stop_lrt_town_centre: "市中心", stop_lrt_kin_on: "建安", stop_lrt_shan_king: "山景",
        stop_lrt_tai_hing: "大興", stop_lrt_lam_tei: "藍地", stop_lrt_hung_shui_kiu: "洪水橋", stop_lrt_tin_yiu: "天耀",

        // 🚃 電車車站翻譯 (完美接入 CSV 120個車站)
        "stop_tram_t_skw": "筲箕灣總站", "stop_tram_02w": "柴灣道", "stop_tram_04w": "新成街", "stop_tram_06w": "海富街", 
        "stop_tram_08w": "聖十字徑", "stop_tram_10w": "太康街", "stop_tram_12w": "太古城道", "stop_tram_14w": "康山", 
        "stop_tram_16w": "船塢里", "stop_tram_18w": "柏架山道", "stop_tram_20w": "芬尼街", "stop_tram_22w": "渣華道", 
        "stop_tram_24w": "健康東街", "stop_tram_26w": "健康西街", "stop_tram_28w": "電照街", "stop_tram_30w": "書局街", 
        "stop_tram_t_np": "北角總站", "stop_tram_32w": "北角道", "stop_tram_34w": "炮台山", "stop_tram_36w": "木星街", 
        "stop_tram_38w": "琉璃街", "stop_tram_40w": "留仙街", "stop_tram_42w": "維多利亞公園", "stop_tram_44w": "信德街", 
        "stop_tram_t_cwb": "銅鑼灣總站", "stop_tram_46w": "邊寧頓街", "stop_tram_48w": "百德新街", "stop_tram_105": "富明街", 
        "stop_tram_106": "禮頓道", "stop_tram_107": "樂活道", "stop_tram_108": "黃泥涌道", "stop_tram_t_hv": "跑馬地總站", 
        "stop_tram_109": "天主教墳場", "stop_tram_110": "皇后大道東", "stop_tram_111": "摩利臣山道", "stop_tram_112": "天樂里", 
        "stop_tram_50w": "堅拿道西", "stop_tram_52w": "杜老誌道", "stop_tram_54w": "巴路士街", "stop_tram_56w": "柯布連道", 
        "stop_tram_58w": "汕頭街", "stop_tram_60w": "機利臣街", "stop_tram_62w": "軍器廠街", "stop_tram_64w": "金鐘港鐵站", 
        "stop_tram_66w": "紅棉道", "stop_tram_68w": "銀行街", "stop_tram_70w": "畢打街", "stop_tram_72w": "砵甸乍街", 
        "stop_tram_74w": "機利文街", "stop_tram_76w": "文華里", "stop_tram_t_sw": "上環 (西港城) 總站", "stop_tram_78w": "港澳碼頭", 
        "stop_tram_80w": "干諾道西", "stop_tram_82w": "修打蘭街", "stop_tram_84w": "東邊街", "stop_tram_86w": "西邊街", 
        "stop_tram_88w": "水街", "stop_tram_90w": "屈地街", "stop_tram_92w": "山道", "stop_tram_94w": "屈地街電車廠(城西道)只落客", 
        "stop_tram_d": "屈地街電車廠", "stop_tram_96w": "皇后大道西", "stop_tram_98w": "堅尼地城海傍", "stop_tram_100w": "山市街", 
        "stop_tram_102w": "士美菲路", "stop_tram_104w": "爹核士街", "stop_tram_101e": "柴灣道", "stop_tram_99e": "南康街", 
        "stop_tram_97e": "西灣河電車廠", "stop_tram_95e": "海富街", "stop_tram_93e": "太安街", "stop_tram_91e": "太康街", 
        "stop_tram_89e": "太古城道", "stop_tram_87e": "康山", "stop_tram_85e": "船塢里", "stop_tram_83e": "柏架山道", 
        "stop_tram_81e": "芬尼街", "stop_tram_79e": "渣華道", "stop_tram_77e": "健康東街", "stop_tram_75e": "健康西街", 
        "stop_tram_73e": "電照街", "stop_tram_71e": "書局街", "stop_tram_69e": "北角道", "stop_tram_67e": "春秧街", 
        "stop_tram_65e": "炮台山", "stop_tram_63e": "木星街", "stop_tram_61e": "永興街", "stop_tram_59e": "興發街", 
        "stop_tram_57e": "維多利亞公園", "stop_tram_55e": "信德街", "stop_tram_53e": "百德新街", "stop_tram_51e": "波斯富街", 
        "stop_tram_49e": "堅拿道西", "stop_tram_47e": "杜老誌道", "stop_tram_45e": "菲林明道", "stop_tram_43e": "柯布連道", 
        "stop_tram_41e": "盧押道", "stop_tram_39e": "分域街", "stop_tram_37e": "軍器廠街", "stop_tram_35e": "金鐘港鐵站", 
        "stop_tram_33e": "美利道", "stop_tram_31e": "銀行街", "stop_tram_29e": "雪廠街", "stop_tram_27e": "畢打街", 
        "stop_tram_25e": "租庇利街", "stop_tram_23e": "機利文街", "stop_tram_21e": "禧利街", "stop_tram_t_sw_e": "上環 (西港城) 總站", 
        "stop_tram_19e": "港澳碼頭", "stop_tram_17e": "皇后街", "stop_tram_15e": "東邊街", "stop_tram_13e": "西邊街", 
        "stop_tram_11e": "水街", "stop_tram_09e": "屈地街", "stop_tram_t_stt": "石塘咀總站", "stop_tram_07e": "山道", 
        "stop_tram_05e": "皇后大道西", "stop_tram_03e": "荷蘭街", "stop_tram_01e": "北街", "stop_tram_t_kt": "堅尼地城總站",

        // ⛴️ 碼頭翻譯 (全覆蓋)
        pier_central_2: "中環二號碼頭", pier_central_3: "中環三號碼頭", pier_central_4: "中環四號碼頭", 
        pier_central_5: "中環五號碼頭", pier_central_6: "中環六號碼頭", pier_central_8: "中環八號碼頭",
        pier_cheung_chau: "長洲碼頭", pier_mui_wo: "梅窩碼頭", pier_star_tst: "尖沙咀天星碼頭", 
        pier_star_cen: "中環七號碼頭 (天星)", pier_star_wan: "灣仔渡輪碼頭", pier_yung_shue_wan: "榕樹灣碼頭", 
        pier_sok_kwu_wan: "索罟灣碼頭", pier_peng_chau: "坪洲碼頭", pier_db: "愉景灣碼頭", 
        pier_kt: "觀塘公眾碼頭", pier_hh: "紅磡渡輪碼頭", pier_np: "北角渡輪碼頭", pier_kc: "九龍城碼頭",
        pier_mwn: "馬灣碼頭", pier_tw: "荃灣渡輪碼頭", pier_tm: "屯門渡輪碼頭", pier_to: "大澳碼頭",
        pier_swh: "西灣河碼頭", pier_skt: "三家村碼頭"
    },
    sc: {
        appName: "贴地通 (HK Transit Hub)", setupTitle: "设定中心",
        step1Group: "第一步：设定群组", step2Select: "第二步：选择交通工具类别",
        step3Route: "第三步：路线与上车分站", step4Save: "第四步：个人化与储存",
        searchBtn: "全网智能搜寻 (Omni-Search)", searchPlaceholder: "例如: 112, 46M, B2P",
        loading: "大脑联查中...", selectStop: "请选择上车分站...", saveBtn: "新增至仪表板",
        navHome: "仪表板", navAdd: "新增", navSetup: "设定",
        selectGroup: "请选择或建立群组...", createNewGroup: "➕ 建立新群组...",
        newGroupPlaceholder: "输入新群组名称...", aliasLabel: "自订花名 (Alias)", colorLabel: "颜色标签",
        groupHome: "🏠 屋企落楼", groupWork: "💼 返工转车",
        arriving: "即将抵达", minutes: "分钟", no_schedule: "暂无班次", load_failed: "连线失败",
        emptyDesc: "尚未设定任何路线，立即去设定中心打造专属您的出门仪表板吧！", goToSetupBtn: "+ 新增路线",
        static_select_placeholder: "请选择线路 / 航线...",
        
        transitBUS: "巴士", transitKMB: "九巴", transitCTB: "城巴",
        transitMTR: "港铁", transitGMB: "绿色小巴", transitNLB: "屿巴",
        transitLRT: "轻铁", transitTRAM: "电车", transitFERRY: "渡轮",

        outbound: "去程", inbound: "回程", ctb_outbound: "去程", ctb_inbound: "回程",

        route_tcl: "东涌线", route_tml: "屯马线", route_ktl: "观塘线", route_twl: "荃湾线",
        route_isl: "港岛线", route_eal: "东铁线", route_sil: "南港岛线", route_tkl: "将军澳线",
        route_ael: "机场快线", route_drl: "迪士尼线",
        
        route_lrt_505: "轻铁 505 线", route_lrt_507: "轻铁 507 线", route_lrt_610: "轻铁 610 线", 
        route_lrt_614: "轻铁 614 线", route_lrt_614p: "轻铁 614P 线", route_lrt_615: "轻铁 615 线", 
        route_lrt_615p: "轻铁 615P 线", route_lrt_705: "轻铁 705 线", route_lrt_706: "轻铁 706 线",
        route_lrt_751: "轻铁 751 线", route_lrt_761p: "轻铁 761P 线", 
        route_tram_east: "香港电车 (东行)", route_tram_west: "香港电车 (西行)",
        
        route_ferry_cc: "中环 ↔ 长洲 (新渡轮)", route_ferry_mw: "中环 ↔ 梅窝 (新渡轮)",
        route_ferry_nwff_np_hh: "北角 ↔ 红磡 (新渡轮)", route_ferry_nwff_np_kc: "北角 ↔ 九龙城 (新渡轮)",
        route_ferry_star_cen: "尖沙咀 ↔ 中环 (天星小轮)", route_ferry_star_wan: "尖沙咀 ↔ 湾仔 (天星小轮)",
        route_ferry_ysw: "中环 ↔ 榕树湾 (港九小轮)", route_ferry_skw: "中环 ↔ 索罟湾 (港九小轮)", route_ferry_pc: "中环 ↔ 坪洲 (港九小轮)",
        route_ferry_db: "中环 ↔ 愉景湾 (愉景湾航运)", 
        route_ferry_ff_np_kt: "北角 ↔ 观塘 (富裕小轮)", route_ferry_ff_np_hh: "北角 ↔ 红磡 (富裕小轮)",
        route_ferry_ff_cen_hh: "中环 ↔ 红磡 (富裕小轮)", route_ferry_ff_tm_to: "屯门 ↔ 大澳 (富裕小轮)",
        route_ferry_pi_cen_mw: "中环 ↔ 马湾 (珀丽湾客运)", route_ferry_pi_tw_mw: "荃湾 ↔ 马湾 (珀丽湾客运)",
        route_ferry_cs_swh_skt: "西湾河 ↔ 三家村 (珊瑚海)", route_ferry_cs_swh_kt: "西湾河 ↔ 观塘 (珊瑚海)",

        dest_hong_kong: "Hong Kong", dest_tung_chung: "Tung Chung", dest_wu_kai_sha: "Wu Kai Sha", dest_tuen_mun: "Tuen Mun",
        dest_tiu_keng_leng: "调景岭", dest_whampoa: "黄埔", dest_tsuen_wan: "荃湾", dest_central: "中环",
        dest_chai_wan: "柴湾", dest_kennedy_town: "坚尼地城", dest_lo_wu_lmc: "罗湖/落马洲", dest_admiralty: "金钟",
        dest_south_horizons: "海怡半岛", dest_yuen_long: "元朗", dest_po_lam: "宝琳 / 康城",
        dest_north_point: "北角", dest_asia_world_expo: "博览馆", dest_disneyland: "迪士尼", dest_sunny_bay: "欣澳",
        dest_lrt_705_loop: "天水围循环 (逆时针)", dest_lrt_706_loop: "天水围循环 (顺时针)",
        dest_tuen_mun_ferry: "屯门码头", dest_sam_shing: "三圣", dest_siu_hong: "兆康",
        dest_tin_king: "田景", dest_yau_oi: "友爱", dest_tin_yat: "天逸",
        dest_tram_eastbound: "往 筲箕湾/跑马地", dest_tram_westbound: "往 坚尼地城/石塘咀",
        dest_cheung_chau: "长洲", dest_mui_wo: "梅窝", dest_tsim_sha_tsui: "尖沙咀", dest_wan_chai: "湾仔",
        dest_yung_shue_wan: "榕树湾", dest_sok_kwu_wan: "索罟湾", dest_peng_chau: "坪洲",
        dest_discovery_bay: "愉景湾", dest_kwun_tong: "观塘", dest_hung_hom: "红磡", 
        dest_kowloon_city: "九龙城", dest_ma_wan: "马湾", dest_tai_o: "大澳", dest_sam_ka_tsuen: "三家村", dest_sai_wan_ho: "西湾河",

        stop_mtr_hok: "香港站", stop_mtr_kow: "九龙站", stop_mtr_oly: "奥运站", stop_mtr_nac: "南昌站", stop_mtr_lak: "荔景站", stop_mtr_tsy: "青衣站", stop_mtr_sow: "欣澳站", stop_mtr_tuc: "东涌站",
        stop_mtr_wks: "乌溪沙站", stop_mtr_mos: "马鞍山站", stop_mtr_heo: "恒安站", stop_mtr_tsh: "大水坑站", stop_mtr_shm: "石门站", stop_mtr_cio: "第一城站", stop_mtr_stw: "沙田围站", stop_mtr_che_kung_temple: "车公庙站", stop_mtr_taw: "大围站", stop_mtr_hik: "显径站", stop_mtr_dih: "钻石山站", stop_mtr_kat: "启德站", stop_mtr_suw: "宋皇台站", stop_mtr_tkw: "土瓜湾站", stop_mtr_hom: "何文田站", stop_mtr_huh: "红磡站", stop_mtr_ets: "尖东站", stop_mtr_aus: "柯士甸站", stop_mtr_mef: "美孚站", stop_mtr_tww: "荃湾西站", stop_mtr_ksr: "锦上路站", stop_mtr_yul: "元朗站", stop_mtr_lop: "朗屏站", stop_mtr_tis: "天水围站", stop_mtr_sih: "兆康站", stop_mtr_tum: "屯门站",
        stop_mtr_wha: "黄埔站", stop_mtr_ymt: "油麻地站", stop_mtr_mok: "旺角站", stop_mtr_pre: "太子站", stop_mtr_skm: "石硖尾站", stop_mtr_kot: "九龙塘站", stop_mtr_lof: "乐富站", stop_mtr_wts: "黄大仙站", stop_mtr_chh: "彩虹站", stop_mtr_kob: "九龙湾站", stop_mtr_ntk: "牛头角站", stop_mtr_kwt: "观塘站", stop_mtr_lat: "蓝田站", stop_mtr_yat: "油塘站", stop_mtr_tik: "调景岭站",
        stop_mtr_cen: "中环站", stop_mtr_adm: "金钟站", stop_mtr_tst: "尖沙咀站", stop_mtr_jor: "佐敦站", stop_mtr_ssp: "深水埗站", stop_mtr_csw: "长沙湾站", stop_mtr_lck: "荔枝角站", stop_mtr_kwh: "葵兴站", stop_mtr_twh: "葵芳站", stop_mtr_tsw: "荃湾站",
        stop_mtr_ket: "坚尼地城站", stop_mtr_hku: "香港大学站", stop_mtr_syp: "西营盘站", stop_mtr_shw: "上环站", stop_mtr_wac: "湾仔站", stop_mtr_cab: "铜锣湾站", stop_mtr_tih: "天后站", stop_mtr_foh: "炮台山站", stop_mtr_nop: "北角站", stop_mtr_qub: "鲗鱼涌站", stop_mtr_tak: "太古站", stop_mtr_skw: "筲箕湾站", stop_mtr_chw: "柴湾站",
        stop_mtr_exh: "会展站", stop_mtr_mkk: "旺角东站", stop_mtr_sht: "沙田站", stop_mtr_fot: "火炭站", stop_mtr_rac: "马场站", stop_mtr_uni: "大学站", stop_mtr_tap: "大埔墟站", stop_mtr_two: "太和站", stop_mtr_fan: "粉岭站", stop_mtr_shs: "上水站", stop_mtr_low: "罗湖站", stop_mtr_lmc: "落马洲站",
        stop_mtr_ocp: "海洋公园站", stop_mtr_wch: "黄竹坑站", stop_mtr_let: "利东站", stop_mtr_soh: "海怡半岛站",
        stop_mtr_tko: "将军澳站", stop_mtr_lhp: "康城站", stop_mtr_hah: "坑口站", stop_mtr_poa: "宝琳站",
        stop_mtr_air: "机场站", stop_mtr_awe: "博览馆站", stop_mtr_dis: "迪士尼站",

        stop_lrt_tin_shui_wai: "天水围", stop_lrt_tin_shui: "天瑞", stop_lrt_tin_wing: "天荣",
        stop_lrt_tuen_mun_ferry: "屯门码头", stop_lrt_yuen_long: "元朗", stop_lrt_siu_hong: "兆康",
        stop_lrt_sam_shing: "三圣", stop_lrt_tin_king: "田景", stop_lrt_tin_yat: "天逸", stop_lrt_yau_oi: "友爱",
        stop_lrt_pui_to: "杯渡", stop_lrt_town_centre: "市中心", stop_lrt_kin_on: "建安", stop_lrt_shan_king: "山景",
        stop_lrt_tai_hing: "大兴", stop_lrt_lam_tei: "蓝地", stop_lrt_hung_shui_kiu: "洪水桥", stop_lrt_tin_yiu: "天耀",

        "stop_tram_t_skw": "筲箕湾总站", "stop_tram_02w": "柴湾道", "stop_tram_04w": "新成街", "stop_tram_06w": "海富街", 
        "stop_tram_08w": "圣十字径", "stop_tram_10w": "太康街", "stop_tram_12w": "太古城道", "stop_tram_14w": "康山", 
        "stop_tram_16w": "船坞里", "stop_tram_18w": "柏架山道", "stop_tram_20w": "芬尼街", "stop_tram_22w": "渣华道", 
        "stop_tram_24w": "健康东街", "stop_tram_26w": "健康西街", "stop_tram_28w": "电照街", "stop_tram_30w": "书局街", 
        "stop_tram_t_np": "北角总站", "stop_tram_32w": "北角道", "stop_tram_34w": "炮台山", "stop_tram_36w": "木星街", 
        "stop_tram_38w": "琉璃街", "stop_tram_40w": "留仙街", "stop_tram_42w": "维多利亚公园", "stop_tram_44w": "信德街", 
        "stop_tram_t_cwb": "铜锣湾总站", "stop_tram_46w": "边宁顿街", "stop_tram_48w": "百德新街", "stop_tram_105": "富明街", 
        "stop_tram_106": "礼顿道", "stop_tram_107": "乐活道", "stop_tram_108": "黄泥涌道", "stop_tram_t_hv": "跑马地总站", 
        "stop_tram_109": "天主教坟场", "stop_tram_110": "皇后大道东", "stop_tram_111": "摩利臣山道", "stop_tram_112": "天乐里", 
        "stop_tram_50w": "坚拿道西", "stop_tram_52w": "杜老志道", "stop_tram_54w": "巴路士街", "stop_tram_56w": "柯布连道", 
        "stop_tram_58w": "汕头街", "stop_tram_60w": "机利臣街", "stop_tram_62w": "军器厂街", "stop_tram_64w": "金钟港铁站", 
        "stop_tram_66w": "红棉道", "stop_tram_68w": "银行街", "stop_tram_70w": "毕打街", "stop_tram_72w": "砵甸乍街", 
        "stop_tram_74w": "机利文街", "stop_tram_76w": "文华里", "stop_tram_t_sw": "上环 (西港城) 总站", "stop_tram_78w": "港澳码头", 
        "stop_tram_80w": "干诺道西", "stop_tram_82w": "修打兰街", "stop_tram_84w": "东边街", "stop_tram_86w": "西边街", 
        "stop_tram_88w": "水街", "stop_tram_90w": "屈地街", "stop_tram_92w": "山道", "stop_tram_94w": "屈地街电车厂(城西道)只落客", 
        "stop_tram_d": "屈地街电车厂", "stop_tram_96w": "皇后大道西", "stop_tram_98w": "坚尼地城海傍", "stop_tram_100w": "山市街", 
        "stop_tram_102w": "士美菲路", "stop_tram_104w": "爹核士街", "stop_tram_101e": "柴湾道", "stop_tram_99e": "南康街", 
        "stop_tram_97e": "西湾河电车厂", "stop_tram_95e": "海富街", "stop_tram_93e": "太安街", "stop_tram_91e": "太康街", 
        "stop_tram_89e": "太古城道", "stop_tram_87e": "康山", "stop_tram_85e": "船坞里", "stop_tram_83e": "柏架山道", 
        "stop_tram_81e": "芬尼街", "stop_tram_79e": "渣华道", "stop_tram_77e": "健康东街", "stop_tram_75e": "健康西街", 
        "stop_tram_73e": "电照街", "stop_tram_71e": "书局街", "stop_tram_69e": "北角道", "stop_tram_67e": "春秧街", 
        "stop_tram_65e": "炮台山", "stop_tram_63e": "木星街", "stop_tram_61e": "永兴街", "stop_tram_59e": "兴发街", 
        "stop_tram_57e": "维多利亚公园", "stop_tram_55e": "信德街", "stop_tram_53e": "百德新街", "stop_tram_51e": "波斯富街", 
        "stop_tram_49e": "坚拿道西", "stop_tram_47e": "杜老志道", "stop_tram_45e": "菲林明道", "stop_tram_43e": "柯布连道", 
        "stop_tram_41e": "卢押道", "stop_tram_39e": "分域街", "stop_tram_37e": "军器厂街", "stop_tram_35e": "金钟港铁站", 
        "stop_tram_33e": "美利道", "stop_tram_31e": "银行街", "stop_tram_29e": "雪厂街", "stop_tram_27e": "毕打街", 
        "stop_tram_25e": "租庇利街", "stop_tram_23e": "机利文街", "stop_tram_21e": "禧利街", "stop_tram_t_sw_e": "上环 (西港城) 总站", 
        "stop_tram_19e": "港澳码头", "stop_tram_17e": "皇后街", "stop_tram_15e": "东边街", "stop_tram_13e": "西边街", 
        "stop_tram_11e": "水街", "stop_tram_09e": "屈地街", "stop_tram_t_stt": "石塘咀总站", "stop_tram_07e": "山道", 
        "stop_tram_05e": "皇后大道西", "stop_tram_03e": "荷兰街", "stop_tram_01e": "北街", "stop_tram_t_kt": "坚尼地城总站",

        pier_central_2: "中环二号码头", pier_central_3: "中环三号码头", pier_central_4: "中环四号码头", 
        pier_central_5: "中环五号码头", pier_central_6: "中环六号码头", pier_central_8: "中环八号码头",
        pier_cheung_chau: "长洲码头", pier_mui_wo: "梅窝码头", pier_star_tst: "尖沙咀天星码头", 
        pier_star_cen: "中环七号码头 (天星)", pier_star_wan: "湾仔渡轮码头", pier_yung_shue_wan: "榕树湾码头", 
        pier_sok_kwu_wan: "索罟湾码头", pier_peng_chau: "坪洲码头", pier_db: "愉景湾码头", 
        pier_kt: "观塘公众码头", pier_hh: "红磡渡轮码头", pier_np: "北角渡轮码头", pier_kc: "九龙城码头",
        pier_mwn: "马湾码头", pier_tw: "荃湾渡轮码头", pier_tm: "屯门渡轮码头", pier_to: "大澳码头",
        pier_swh: "西湾河码头", pier_skt: "三家村码头"
    },
    en: {
        appName: "HK Transit Hub", setupTitle: "Setup Hub",
        step1Group: "Step 1: Set Group", step2Select: "Step 2: Select Transit",
        step3Route: "Step 3: Route & Stops", step4Save: "Step 4: Save",
        searchBtn: "Omni-Search", searchPlaceholder: "e.g., 112, 46M, B2P",
        loading: "Connecting...", selectStop: "Select a stop...", saveBtn: "Add to Dashboard",
        navHome: "Dashboard", navAdd: "Add", navSetup: "Setup",
        selectGroup: "Select or create group...", createNewGroup: "➕ Create new group...",
        newGroupPlaceholder: "Enter new group name...", aliasLabel: "Custom Alias", colorLabel: "Color Tag",
        groupHome: "🏠 Home", groupWork: "💼 Commute",
        arriving: "Arriving", minutes: "mins", no_schedule: "No departures", load_failed: "Failed",
        emptyDesc: "No routes set up yet.", goToSetupBtn: "+ Add Route",
        static_select_placeholder: "Select Route / Pier...",
        
        transitBUS: "Bus", transitKMB: "KMB", transitCTB: "Citybus",
        transitMTR: "MTR", transitGMB: "Minibus", transitNLB: "Lantau Bus",
        transitLRT: "Light Rail", transitTRAM: "Tram", transitFERRY: "Ferry",

        outbound: "Outbound", inbound: "Inbound", ctb_outbound: "Outbound", ctb_inbound: "Inbound",

        route_tcl: "Tung Chung Line", route_tml: "Tuen Ma Line", route_ktl: "Kwun Tong Line", route_twl: "Tsuen Wan Line",
        route_isl: "Island Line", route_eal: "East Rail Line", route_sil: "South Island Line", route_tkl: "Tseung Kwan O Line",
        route_ael: "Airport Express", route_drl: "Disneyland Resort Line",
        
        route_lrt_505: "LRT 505", route_lrt_507: "LRT 507", route_lrt_610: "LRT 610", 
        route_lrt_614: "LRT 614", route_lrt_614p: "LRT 614P", route_lrt_615: "LRT 615", 
        route_lrt_615p: "LRT 615P", route_lrt_705: "LRT 705", route_lrt_706: "LRT 706",
        route_lrt_751: "LRT 751", route_lrt_761p: "LRT 761P",
        route_tram_east: "Tram (Eastbound)", route_tram_west: "Tram (Westbound)",
        
        route_ferry_cc: "Central ↔ Cheung Chau", route_ferry_mw: "Central ↔ Mui Wo",
        route_ferry_nwff_np_hh: "North Point ↔ Hung Hom", route_ferry_nwff_np_kc: "North Point ↔ Kowloon City",
        route_ferry_star_cen: "TST ↔ Central", route_ferry_star_wan: "TST ↔ Wan Chai",
        route_ferry_ysw: "Central ↔ Yung Shue Wan", route_ferry_skw: "Central ↔ Sok Kwu Wan", route_ferry_pc: "Central ↔ Peng Chau",
        route_ferry_db: "Central ↔ Discovery Bay", 
        route_ferry_ff_np_kt: "North Point ↔ Kwun Tong", route_ferry_ff_np_hh: "North Point ↔ Hung Hom",
        route_ferry_ff_cen_hh: "Central ↔ Hung Hom", route_ferry_ff_tm_to: "Tuen Mun ↔ Tai O",
        route_ferry_pi_cen_mw: "Central ↔ Ma Wan", route_ferry_pi_tw_mw: "Tsuen Wan ↔ Ma Wan",
        route_ferry_cs_swh_skt: "Sai Wan Ho ↔ Sam Ka Tsuen", route_ferry_cs_swh_kt: "Sai Wan Ho ↔ Kwun Tong",

        dest_hong_kong: "Hong Kong", dest_tung_chung: "Tung Chung", dest_wu_kai_sha: "Wu Kai Sha", dest_tuen_mun: "Tuen Mun",
        dest_tiu_keng_leng: "Tiu Keng Leng", dest_whampoa: "Whampoa", dest_tsuen_wan: "Tsuen Wan", dest_central: "Central",
        dest_chai_wan: "Chai Wan", dest_kennedy_town: "Kennedy Town", dest_lo_wu_lmc: "Lo Wu/LMC", dest_admiralty: "Admiralty",
        dest_south_horizons: "South Horizons", dest_yuen_long: "Yuen Long", dest_po_lam: "Po Lam / LOHAS Park",
        dest_north_point: "North Point", dest_asia_world_expo: "AsiaWorld-Expo", dest_disneyland: "Disneyland", dest_sunny_bay: "Sunny Bay",
        dest_lrt_705_loop: "Tin Shui Wai Loop", dest_lrt_706_loop: "Tin Shui Wai Loop",
        dest_tuen_mun_ferry: "Tuen Mun Pier", dest_sam_shing: "Sam Shing", dest_siu_hong: "Siu Hong",
        dest_tin_king: "Tin King", dest_yau_oi: "Yau Oi", dest_tin_yat: "Tin Yat",
        dest_tram_eastbound: "To Shau Kei Wan", dest_tram_westbound: "To Kennedy Town",
        dest_cheung_chau: "Cheung Chau", dest_mui_wo: "Mui Wo", dest_tsim_sha_tsui: "Tsim Sha Tsui", dest_wan_chai: "Wan Chai",
        dest_yung_shue_wan: "Yung Shue Wan", dest_sok_kwu_wan: "Sok Kwu Wan", dest_peng_chau: "Peng Chau",
        dest_discovery_bay: "Discovery Bay", dest_kwun_tong: "Kwun Tong", dest_hung_hom: "Hung Hom", 
        dest_kowloon_city: "Kowloon City", dest_ma_wan: "Ma Wan", dest_tai_o: "Tai O", dest_sam_ka_tsuen: "Sam Ka Tsuen", dest_sai_wan_ho: "Sai Wan Ho",

        stop_mtr_hok: "Hong Kong", stop_mtr_kow: "Kowloon", stop_mtr_oly: "Olympic", stop_mtr_nac: "Nam Cheong", stop_mtr_lak: "Lai King", stop_mtr_tsy: "Tsing Yi", stop_mtr_sow: "Sunny Bay", stop_mtr_tuc: "Tung Chung",
        stop_mtr_wks: "Wu Kai Sha", stop_mtr_mos: "Ma On Shan", stop_mtr_heo: "Heng On", stop_mtr_tsh: "Tai Shui Hang", stop_mtr_shm: "Shek Mun", stop_mtr_cio: "City One", stop_mtr_stw: "Sha Tin Wai", stop_mtr_che_kung_temple: "Che Kung Temple", stop_mtr_taw: "Tai Wai", stop_mtr_hik: "Hin Keng", stop_mtr_dih: "Diamond Hill", stop_mtr_kat: "Kai Tak", stop_mtr_suw: "Sung Wong Toi", stop_mtr_tkw: "To Kwa Wan", stop_mtr_hom: "Ho Man Tin", stop_mtr_huh: "Hung Hom", stop_mtr_ets: "East Tsim Sha Tsui", stop_mtr_aus: "Austin", stop_mtr_mef: "Mei Foo", stop_mtr_tww: "Tsuen Wan West", stop_mtr_ksr: "Kam Sheung Road", stop_mtr_yul: "Yuen Long", stop_mtr_lop: "Long Ping", stop_mtr_tis: "Tin Shui Wai", stop_mtr_sih: "Siu Hong", stop_mtr_tum: "Tuen Mun",
        stop_mtr_wha: "Whampoa", stop_mtr_ymt: "Yau Ma Tei", stop_mtr_mok: "Mong Kok", stop_mtr_pre: "Prince Edward", stop_mtr_skm: "Shek Kip Mei", stop_mtr_kot: "Kowloon Tong", stop_mtr_lof: "Lok Fu", stop_mtr_wts: "Wong Tai Sin", stop_mtr_chh: "Choi Hung", stop_mtr_kob: "Kowloon Bay", stop_mtr_ntk: "Ngau Tau Kok", stop_mtr_kwt: "Kwun Tong", stop_mtr_lat: "Lam Tin", stop_mtr_yat: "Yau Tong", stop_mtr_tik: "Tiu Keng Leng",
        stop_mtr_cen: "Central", stop_mtr_adm: "Admiralty", stop_mtr_tst: "Tsim Sha Tsui", stop_mtr_jor: "Jordan", stop_mtr_ssp: "Sham Shui Po", stop_mtr_csw: "Cheung Sha Wan", stop_mtr_lck: "Lai Chi Kok", stop_mtr_kwh: "Kwai Hing", stop_mtr_twh: "Kwai Fong", stop_mtr_tsw: "Tsuen Wan",
        stop_mtr_ket: "Kennedy Town", stop_mtr_hku: "HKU", stop_mtr_syp: "Sai Ying Pun", stop_mtr_shw: "Sheung Wan", stop_mtr_wac: "Wan Chai", stop_mtr_cab: "Causeway Bay", stop_mtr_tih: "Tin Hau", stop_mtr_foh: "Fortress Hill", stop_mtr_nop: "North Point", stop_mtr_qub: "Quarry Bay", stop_mtr_tak: "Tai Koo", stop_mtr_skw: "Shau Kei Wan", stop_mtr_chw: "Chai Wan",
        stop_mtr_exh: "Exhibition Centre", stop_mtr_mkk: "Mong Kok East", stop_mtr_sht: "Sha Tin", stop_mtr_fot: "Fo Tan", stop_mtr_rac: "Racecourse", stop_mtr_uni: "University", stop_mtr_tap: "Tai Po Market", stop_mtr_two: "Tai Wo", stop_mtr_fan: "Fanling", stop_mtr_shs: "Sheung Shui", stop_mtr_low: "Lo Wu", stop_mtr_lmc: "Lok Ma Chau",
        stop_mtr_ocp: "Ocean Park", stop_mtr_wch: "Wong Chuk Hang", stop_mtr_let: "Lei Tung", stop_mtr_soh: "South Horizons",
        stop_mtr_tko: "Tseung Kwan O", stop_mtr_lhp: "LOHAS Park", stop_mtr_hah: "Hang Hau", stop_mtr_poa: "Po Lam",
        stop_mtr_air: "Airport", stop_mtr_awe: "AsiaWorld-Expo", stop_mtr_dis: "Disneyland Resort",

        stop_lrt_tin_shui_wai: "Tin Shui Wai", stop_lrt_tin_shui: "Tin Shui", stop_lrt_tin_wing: "Tin Wing",
        stop_lrt_tuen_mun_ferry: "Tuen Mun Ferry Pier", stop_lrt_yuen_long: "Yuen Long", stop_lrt_siu_hong: "Siu Hong",
        stop_lrt_sam_shing: "Sam Shing", stop_lrt_tin_king: "Tin King", stop_lrt_tin_yat: "Tin Yat", stop_lrt_yau_oi: "Yau Oi",
        stop_lrt_pui_to: "Pui To", stop_lrt_town_centre: "Town Centre", stop_lrt_kin_on: "Kin On", stop_lrt_shan_king: "Shan King",
        stop_lrt_tai_hing: "Tai Hing", stop_lrt_lam_tei: "Lam Tei", stop_lrt_hung_shui_kiu: "Hung Shui Kiu", stop_lrt_tin_yiu: "Tin Yiu",
        
        "stop_tram_t_skw": "Shau Kei Wan Terminus", "stop_tram_02w": "Chai Wan Road", "stop_tram_04w": "Sun Sing Street", "stop_tram_06w": "Hoi Foo Street", 
        "stop_tram_08w": "Holy Cross Path", "stop_tram_10w": "Tai Hong Street", "stop_tram_12w": "Tai Koo Shing Road", "stop_tram_14w": "Kornhill", 
        "stop_tram_16w": "Shipyard Lane", "stop_tram_18w": "Mount Parker Road", "stop_tram_20w": "Finnie Street", "stop_tram_22w": "Java Road", 
        "stop_tram_24w": "Healthy Street East", "stop_tram_26w": "Healthy Street West", "stop_tram_28w": "Tin Chiu Street", "stop_tram_30w": "Shu Kuk Street", 
        "stop_tram_t_np": "North Point Terminus", "stop_tram_32w": "North Point Road", "stop_tram_34w": "Fortress Hill", "stop_tram_36w": "Jupiter Street", 
        "stop_tram_38w": "Lau Li Street", "stop_tram_40w": "Lau Sin Street", "stop_tram_42w": "Victoria Park", "stop_tram_44w": "Shelter Street", 
        "stop_tram_t_cwb": "Causeway Bay Terminus", "stop_tram_46w": "Pennington Street", "stop_tram_48w": "Paterson Street", "stop_tram_105": "Foo Ming Street", 
        "stop_tram_106": "Leighton Road", "stop_tram_107": "Broadwood Road", "stop_tram_108": "Wong Nai Chung Road", "stop_tram_t_hv": "Happy Valley Terminus", 
        "stop_tram_109": "Colonial Cemetery", "stop_tram_110": "Queen's Road East", "stop_tram_111": "Morrison Hill Road", "stop_tram_112": "Tin Lok Lane", 
        "stop_tram_50w": "Canal Road West", "stop_tram_52w": "Tonnochy Road", "stop_tram_54w": "Burrows Street", "stop_tram_56w": "O'Brien Road", 
        "stop_tram_58w": "Swatow Street", "stop_tram_60w": "Gresson Street", "stop_tram_62w": "Arsenal Street", "stop_tram_64w": "Admiralty MTR Station", 
        "stop_tram_66w": "Cotton Tree Drive", "stop_tram_68w": "Bank Street", "stop_tram_70w": "Pedder Street", "stop_tram_72w": "Pottinger Street", 
        "stop_tram_74w": "Gilman Street", "stop_tram_76w": "Man Wah Lane", "stop_tram_t_sw": "Western Market Terminus", "stop_tram_78w": "Macau Ferry Terminal", 
        "stop_tram_80w": "Connaught Road West", "stop_tram_82w": "Sutherland Street", "stop_tram_84w": "Eastern Street", "stop_tram_86w": "Western Street", 
        "stop_tram_88w": "Water Street", "stop_tram_90w": "Whitty Street", "stop_tram_92w": "Hill Road", "stop_tram_94w": "Whitty Street Depot (Passenger alight only)", 
        "stop_tram_d": "Whitty Street Depot", "stop_tram_96w": "Queen's Road West", "stop_tram_98w": "Kennedy Town Praya", "stop_tram_100w": "Sands Street", 
        "stop_tram_102w": "Smithfield", "stop_tram_104w": "Davis Street", "stop_tram_101e": "Chai Wan Road", "stop_tram_99e": "Nam Hong Street", 
        "stop_tram_97e": "Sai Wan Ho Depot", "stop_tram_95e": "Hoi Foo Street", "stop_tram_93e": "Tai On Street", "stop_tram_91e": "Tai Hong Street", 
        "stop_tram_89e": "Tai Koo Shing Road", "stop_tram_87e": "Kornhill", "stop_tram_85e": "Shipyard Lane", "stop_tram_83e": "Mount Parker Road", 
        "stop_tram_81e": "Finnie Street", "stop_tram_79e": "Java Road", "stop_tram_77e": "Healthy Street East", "stop_tram_75e": "Healthy Street West", 
        "stop_tram_73e": "Tin Chiu Street", "stop_tram_71e": "Shu Kuk Street", "stop_tram_69e": "North Point Road", "stop_tram_67e": "Chun Yeung Street", 
        "stop_tram_65e": "Fortress Hill", "stop_tram_63e": "Jupiter Street", "stop_tram_61e": "Wing Hing Street", "stop_tram_59e": "Hing Fat Street", 
        "stop_tram_57e": "Victoria Park", "stop_tram_55e": "Shelter Street", "stop_tram_53e": "Paterson Street", "stop_tram_51e": "Percival Street", 
        "stop_tram_49e": "Canal Road West", "stop_tram_47e": "Tonnochy Road", "stop_tram_45e": "Fleming Road", "stop_tram_43e": "O'Brien Road", 
        "stop_tram_41e": "Luard Road", "stop_tram_39e": "Fenwick Street", "stop_tram_37e": "Arsenal Street", "stop_tram_35e": "Admiralty MTR Station", 
        "stop_tram_33e": "Murray Road", "stop_tram_31e": "Bank Street", "stop_tram_29e": "Ice House Street", "stop_tram_27e": "Pedder Street", 
        "stop_tram_25e": "Jubilee Street", "stop_tram_23e": "Gilman Street", "stop_tram_21e": "Hillier Street", "stop_tram_t_sw_e": "Western Market Terminus", 
        "stop_tram_19e": "Macau Ferry Terminal", "stop_tram_17e": "Queen Street", "stop_tram_15e": "Eastern Street", "stop_tram_13e": "Western Street", 
        "stop_tram_11e": "Water Street", "stop_tram_09e": "Whitty Street", "stop_tram_t_stt": "Shek Tong Tsui Terminus", "stop_tram_07e": "Hill Road", 
        "stop_tram_05e": "Queen's Road West", "stop_tram_03e": "Holland Street", "stop_tram_01e": "North Street", "stop_tram_t_kt": "Kennedy Town Terminus",

        pier_central_2: "Central Pier 2", pier_central_3: "Central Pier 3", pier_central_4: "Central Pier 4", 
        pier_central_5: "Central Pier 5", pier_central_6: "Central Pier 6", pier_central_8: "Central Pier 8",
        pier_cheung_chau: "Cheung Chau Pier", pier_mui_wo: "Mui Wo Pier", pier_star_tst: "TST Star Ferry Pier", 
        pier_star_cen: "Central Pier 7", pier_star_wan: "Wan Chai Ferry Pier", pier_yung_shue_wan: "Yung Shue Wan Pier", 
        pier_sok_kwu_wan: "Sok Kwu Wan Pier", pier_peng_chau: "Peng Chau Pier", pier_db: "Discovery Bay Pier", 
        pier_kt: "Kwun Tong Pier", pier_hh: "Hung Hom Pier", pier_np: "North Point Pier", pier_kc: "Kowloon City Pier",
        pier_mwn: "Ma Wan Pier", pier_tw: "Tsuen Wan Pier", pier_tm: "Tuen Mun Pier", pier_to: "Tai O Pier",
        pier_swh: "Sai Wan Ho Pier", pier_skt: "Sam Ka Tsuen Pier"
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
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('transit_app_lang', lang);
    if (typeof loadExistingGroups === 'function') loadExistingGroups(); 
    if (typeof renderDirectionTabs === 'function' && window.currentRouteData) {
        renderDirectionTabs();
        renderStopDropdown();
    }
    if (typeof initDashboard === 'function') initDashboard(); 
    translatePage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-white', 'font-bold');
        btn.classList.add('text-red-300');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if(activeBtn) {
        activeBtn.classList.remove('text-red-300');
        activeBtn.classList.add('text-white', 'font-bold');
    }
}

function getTranslation(key, defaultText) {
    return (langDict[currentLang] && langDict[currentLang][key]) ? langDict[currentLang][key] : (defaultText || key);
}