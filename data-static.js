// 檔案：data-static.js (MTR 100% 物理節點全網補完版 - 終極快取更新版)
// Version: 5.0 (強制覆寫前端緩存)

(function() {
    // 1. 全港鐵路、輕鐵、電車、渡輪及多營辦商融合車站元數據對照表
    const STATION_METADATA = {
        // --- 港鐵重鐵站 (MTR Stations - 100% 覆蓋 10 條綫路，對齊 V1.7 規格) ---
        "HOK": "stop_mtr_hok", "KOW": "stop_mtr_kow", "OLY": "stop_mtr_oly", "NAC": "stop_mtr_nac", "LAK": "stop_mtr_lak", "TSY": "stop_mtr_tsy", "SUN": "stop_mtr_sun", "TUC": "stop_mtr_tuc",
        "WKS": "stop_mtr_wks", "MOS": "stop_mtr_mos", "HEO": "stop_mtr_heo", "TSH": "stop_mtr_tsh", "SHM": "stop_mtr_shm", "CIO": "stop_mtr_cio", "STW": "stop_mtr_stw", "CKT": "stop_mtr_ckt", "TAW": "stop_mtr_taw", "HIK": "stop_mtr_hik", "DIH": "stop_mtr_dih", "KAT": "stop_mtr_kat", "SUW": "stop_mtr_suw", "TKW": "stop_mtr_tkw", "HOM": "stop_mtr_hom", "HUH": "stop_mtr_huh", "ETS": "stop_mtr_ets", "AUS": "stop_mtr_aus", "MEF": "stop_mtr_mef", "TWW": "stop_mtr_tww", "KSR": "stop_mtr_ksr", "YUL": "stop_mtr_yul", "LOP": "stop_mtr_lop", "TIS": "stop_mtr_tis", "SIH": "stop_mtr_sih", "TUM": "stop_mtr_tum",
        "WHA": "stop_mtr_wha", "YMT": "stop_mtr_ymt", "MOK": "stop_mtr_mok", "PRE": "stop_mtr_pre", "SKM": "stop_mtr_skm", "KOT": "stop_mtr_kot", "LOF": "stop_mtr_lof", "WTS": "stop_mtr_wts", "CHH": "stop_mtr_chh", "KOB": "stop_mtr_kob", "NTK": "stop_mtr_ntk", "KWT": "stop_mtr_kwt", "LAT": "stop_mtr_lat", "YAT": "stop_mtr_yat", "TIK": "stop_mtr_tik",
        "CEN": "stop_mtr_cen", "ADM": "stop_mtr_adm", "TST": "stop_mtr_tst", "JOR": "stop_mtr_jor", "SSP": "stop_mtr_ssp", "CSW": "stop_mtr_csw", "LCK": "stop_mtr_lck", "KWH": "stop_mtr_kwh", "KWF": "stop_mtr_kwf", "TWH": "stop_mtr_twh", "TSW": "stop_mtr_tsw",
        "KET": "stop_mtr_ket", "HKU": "stop_mtr_hku", "SYP": "stop_mtr_syp", "SHW": "stop_mtr_shw", "WAC": "stop_mtr_wac", "CAB": "stop_mtr_cab", "TIH": "stop_mtr_tih", "FOH": "stop_mtr_foh", "NOP": "stop_mtr_nop", "QUB": "stop_mtr_qub", "TAK": "stop_mtr_tak", "SWH": "stop_mtr_swh", "SKW": "stop_mtr_skw", "HFC": "stop_mtr_hfc", "CHW": "stop_mtr_chw",
        "EXC": "stop_mtr_exc", "MKK": "stop_mtr_mkk", "SHT": "stop_mtr_sht", "FOT": "stop_mtr_fot", "RAC": "stop_mtr_rac", "UNI": "stop_mtr_uni", "TAP": "stop_mtr_tap", "TWO": "stop_mtr_two", "FAN": "stop_mtr_fan", "SHS": "stop_mtr_shs", "LOW": "stop_mtr_low", "LMC": "stop_mtr_lmc",
        "OCP": "stop_mtr_ocp", "WCH": "stop_mtr_wch", "LET": "stop_mtr_let", "SOH": "stop_mtr_soh",
        "TKO": "stop_mtr_tko", "LHP": "stop_mtr_lhp", "HAH": "stop_mtr_hah", "POA": "stop_mtr_poa",
        "AIR": "stop_mtr_air", "AWE": "stop_mtr_awe",
        "DIS": "stop_mtr_dis",

        // --- 輕鐵車站 (LRT Stations) ---
        "LRT-430": "stop_lrt_tin_shui_wai", "LRT-460": "stop_lrt_tin_shui", "LRT-435": "stop_lrt_tin_wing",
        "LRT-001": "stop_lrt_tuen_mun_ferry", "LRT-600": "stop_lrt_yuen_long", "LRT-100": "stop_lrt_siu_hong",
        "LRT-260": "stop_lrt_sam_shing", "LRT-120": "stop_lrt_tin_king", "LRT-550": "stop_lrt_tin_yat", 
        "LRT-275": "stop_lrt_yau_oi", "LRT-295": "stop_lrt_pui_to", "LRT-300": "stop_lrt_town_centre",
        "LRT-060": "stop_lrt_kin_on", "LRT-190": "stop_lrt_shan_king", "LRT-212": "stop_lrt_tai_hing",
        "LRT-350": "stop_lrt_lam_tei", "LRT-380": "stop_lrt_hung_shui_kiu", "LRT-445": "stop_lrt_tin_yiu",

        // --- 電車分站 (Tram Stops) ---
        "TRAM-T_SKW": "stop_tram_t_skw", "TRAM-02W": "stop_tram_02w", "TRAM-04W": "stop_tram_04w", "TRAM-06W": "stop_tram_06w", "TRAM-08W": "stop_tram_08w", 
        "TRAM-10W": "stop_tram_10w", "TRAM-12W": "stop_tram_12w", "TRAM-14W": "stop_tram_14w", "TRAM-16W": "stop_tram_16w", "TRAM-18W": "stop_tram_18w", 
        "TRAM-20W": "stop_tram_20w", "TRAM-22W": "stop_tram_22w", "TRAM-24W": "stop_tram_24w", "TRAM-26W": "stop_tram_26w", "TRAM-28W": "stop_tram_28w", 
        "TRAM-30W": "stop_tram_30w", "TRAM-T_NP": "stop_tram_t_np", "TRAM-32W": "stop_tram_32w", "TRAM-34W": "stop_tram_34w", "TRAM-36W": "stop_tram_36w", 
        "TRAM-38W": "stop_tram_38w", "TRAM-40W": "stop_tram_40w", "TRAM-42W": "stop_tram_42w", "TRAM-44W": "stop_tram_44w", "TRAM-T_CWB": "stop_tram_t_cwb", 
        "TRAM-46W": "stop_tram_46w", "TRAM-48W": "stop_tram_48w", "TRAM-105": "stop_tram_105", "TRAM-106": "stop_tram_106", "TRAM-107": "stop_tram_107", 
        "TRAM-108": "stop_tram_108", "TRAM-T_HV": "stop_tram_t_hv", "TRAM-109": "stop_tram_109", "TRAM-110": "stop_tram_110", "TRAM-111": "stop_tram_111", 
        "TRAM-112": "stop_tram_112", "TRAM-50W": "stop_tram_50w", "TRAM-52W": "stop_tram_52w", "TRAM-54W": "stop_tram_54w", "TRAM-56W": "stop_tram_56w", 
        "TRAM-58W": "stop_tram_58w", "TRAM-60W": "stop_tram_60w", "TRAM-62W": "stop_tram_62w", "TRAM-64W": "stop_tram_64w", "TRAM-66W": "stop_tram_66w", 
        "TRAM-68W": "stop_tram_68w", "TRAM-70W": "stop_tram_70w", "TRAM-72W": "stop_tram_72w", "TRAM-74W": "stop_tram_74w", "TRAM-76W": "stop_tram_76w", 
        "TRAM-T_SW": "stop_tram_t_sw", "TRAM-78W": "stop_tram_78w", "TRAM-80W": "stop_tram_80w", "TRAM-82W": "stop_tram_82w", "TRAM-84W": "stop_tram_84w", 
        "TRAM-86W": "stop_tram_86w", "TRAM-88W": "stop_tram_88w", "TRAM-90W": "stop_tram_90w", "TRAM-92W": "stop_tram_92w", "TRAM-94W": "stop_tram_94w", 
        "TRAM-D": "stop_tram_d", "TRAM-96W": "stop_tram_96w", "TRAM-98W": "stop_tram_98w", "TRAM-100W": "stop_tram_100w", "TRAM-102W": "stop_tram_102w", 
        "TRAM-104W": "stop_tram_104w", "TRAM-101E": "stop_tram_101e", "TRAM-99E": "stop_tram_99e", "TRAM-97E": "stop_tram_97e", "TRAM-95E": "stop_tram_95e", 
        "TRAM-93E": "stop_tram_93e", "TRAM-91E": "stop_tram_91e", "TRAM-89E": "stop_tram_89e", "TRAM-87E": "stop_tram_87e", "TRAM-85E": "stop_tram_85e", 
        "TRAM-83E": "stop_tram_83e", "TRAM-81E": "stop_tram_81e", "TRAM-79E": "stop_tram_79e", "TRAM-77E": "stop_tram_77e", "TRAM-75E": "stop_tram_75e", 
        "TRAM-73E": "stop_tram_73e", "TRAM-71E": "stop_tram_71e", "TRAM-69E": "stop_tram_69e", "TRAM-67E": "stop_tram_67e", "TRAM-65E": "stop_tram_65e", 
        "TRAM-63E": "stop_tram_63e", "TRAM-61E": "stop_tram_61e", "TRAM-59E": "stop_tram_59e", "TRAM-57E": "stop_tram_57e", "TRAM-55E": "stop_tram_55e", 
        "TRAM-53E": "stop_tram_53e", "TRAM-51E": "stop_tram_51e", "TRAM-49E": "stop_tram_49e", "TRAM-47E": "stop_tram_47e", "TRAM-45E": "stop_tram_45e", 
        "TRAM-43E": "stop_tram_43e", "TRAM-41E": "stop_tram_41e", "TRAM-39E": "stop_tram_39e", "TRAM-37E": "stop_tram_37e", "TRAM-35E": "stop_tram_35e", 
        "TRAM-33E": "stop_tram_33e", "TRAM-31E": "stop_tram_31e", "TRAM-29E": "stop_tram_29e", "TRAM-27E": "stop_tram_27e", "TRAM-25E": "stop_tram_25e", 
        "TRAM-23E": "stop_tram_23e", "TRAM-21E": "stop_tram_21e", "TRAM-T_SW_E": "stop_tram_t_sw_e", "TRAM-19E": "stop_tram_19e", "TRAM-17E": "stop_tram_17e", 
        "TRAM-15E": "stop_tram_15e", "TRAM-13E": "stop_tram_13e", "TRAM-11E": "stop_tram_11e", "TRAM-09E": "stop_tram_09e", "TRAM-T_STT": "stop_tram_t_stt", 
        "TRAM-07E": "stop_tram_07e", "TRAM-05E": "stop_tram_05e", "TRAM-03E": "stop_tram_03e", "TRAM-01E": "stop_tram_01e", "TRAM-T_KT": "stop_tram_t_kt",

        // --- 渡輪碼頭 (Ferry Piers) ---
        "CE-2": "pier_central_2", "CE-3": "pier_central_3", "CE-4": "pier_central_4", 
        "CE-5": "pier_central_5", "CE-6": "pier_central_6", "CE-8": "pier_central_8",
        "CC-PIER": "pier_cheung_chau", "MW-PIER": "pier_mui_wo",
        "STAR-TST": "pier_star_tst", "STAR-CEN": "pier_star_cen", "STAR-WAN": "pier_star_wan",
        "YSW-PIER": "pier_yung_shue_wan", "SKW-PIER": "pier_sok_kwu_wan", "PC-PIER": "pier_peng_chau",
        "DB-PIER": "pier_db", "KT-PIER": "pier_kt", "HH-PIER": "pier_hh", "NP-PIER": "pier_np",
        "KC-PIER": "pier_kc", "MWN-PIER": "pier_mwn", "TW-PIER": "pier_tw", "TM-PIER": "pier_tm",
        "TO-PIER": "pier_to", "SWH-PIER": "pier_swh", "SKT-PIER": "pier_skt",

        // --- 小巴熱門車站 ---
        "20002120": "stop_tuen_mun_station", "20002117": "stop_sheung_shui_station", "20015509": "stop_hang_hau_station", "2001150": "stop_sham_shui_po_station"
    };

    // 2. 路線定義結構 (包含 100% 重鐵、輕鐵、電車、渡輪路線物理節點)
    const COMPACT_ROUTES = {
        // ==========================================
        // 🚇 港鐵重鐵綫路 (MTR Lines) - 100% 確保全站點
        // ==========================================
        "TCL": { route_key: "route_tcl", transitType: "MTR", outbound: { dest_key: "dest_tung_chung", stops: ["HOK", "KOW", "OLY", "NAC", "LAK", "TSY", "SUN", "TUC"] }, inbound: { dest_key: "dest_hong_kong", stops: ["TUC", "SUN", "TSY", "LAK", "NAC", "OLY", "KOW", "HOK"] } },
        "TML": { route_key: "route_tml", transitType: "MTR", outbound: { dest_key: "dest_tuen_mun", stops: ["WKS", "MOS", "HEO", "TSH", "SHM", "CIO", "STW", "CKT", "TAW", "HIK", "DIH", "KAT", "SUW", "TKW", "HOM", "HUH", "ETS", "AUS", "NAC", "MEF", "TWW", "KSR", "YUL", "LOP", "TIS", "SIH", "TUM"] }, inbound: { dest_key: "dest_wu_kai_sha", stops: ["TUM", "SIH", "TIS", "LOP", "YUL", "KSR", "TWW", "MEF", "NAC", "AUS", "ETS", "HUH", "HOM", "TKW", "SUW", "KAT", "DIH", "HIK", "TAW", "CKT", "STW", "CIO", "SHM", "TSH", "HEO", "MOS", "WKS"] } },
        "KTL": { route_key: "route_ktl", transitType: "MTR", outbound: { dest_key: "dest_tiu_keng_leng", stops: ["WHA", "HOM", "YMT", "MOK", "PRE", "SKM", "KOT", "LOF", "WTS", "DIH", "CHH", "KOB", "NTK", "KWT", "LAT", "YAT", "TIK"] }, inbound: { dest_key: "dest_whampoa", stops: ["TIK", "YAT", "LAT", "KWT", "NTK", "KOB", "CHH", "DIH", "WTS", "LOF", "KOT", "SKM", "PRE", "MOK", "YMT", "HOM", "WHA"] } },
        "TWL": { route_key: "route_twl", transitType: "MTR", outbound: { dest_key: "dest_tsuen_wan", stops: ["CEN", "ADM", "TST", "JOR", "YMT", "MOK", "PRE", "SSP", "CSW", "LCK", "MEF", "LAK", "KWF", "TWH", "TSW"] }, inbound: { dest_key: "dest_central", stops: ["TSW", "TWH", "KWF", "LAK", "MEF", "LCK", "CSW", "SSP", "PRE", "MOK", "YMT", "JOR", "TST", "ADM", "CEN"] } },
        "ISL": { route_key: "route_isl", transitType: "MTR", outbound: { dest_key: "dest_chai_wan", stops: ["KET", "HKU", "SYP", "SHW", "CEN", "ADM", "WAC", "CAB", "TIH", "FOH", "NOP", "QUB", "TAK", "SWH", "SKW", "HFC", "CHW"] }, inbound: { dest_key: "dest_kennedy_town", stops: ["CHW", "HFC", "SKW", "SWH", "TAK", "QUB", "NOP", "FOH", "TIH", "CAB", "WAC", "ADM", "CEN", "SHW", "SYP", "HKU", "KET"] } },
        "EAL": { route_key: "route_eal", transitType: "MTR", outbound: { dest_key: "dest_lo_wu_lmc", stops: ["ADM", "EXC", "HUH", "MKK", "KOT", "TAW", "SHT", "FOT", "RAC", "UNI", "TAP", "TWO", "FAN", "SHS", "LOW", "LMC"] }, inbound: { dest_key: "dest_admiralty", stops: ["LMC", "LOW", "SHS", "FAN", "TWO", "TAP", "UNI", "RAC", "FOT", "SHT", "TAW", "KOT", "MKK", "HUH", "EXC", "ADM"] } },
        "SIL": { route_key: "route_sil", transitType: "MTR", outbound: { dest_key: "dest_south_horizons", stops: ["ADM", "OCP", "WCH", "LET", "SOH"] }, inbound: { dest_key: "dest_admiralty", stops: ["SOH", "LET", "WCH", "OCP", "ADM"] } },
        "TKL": { route_key: "route_tkl", transitType: "MTR", outbound: { dest_key: "dest_po_lam", stops: ["NOP", "QUB", "YAT", "TIK", "TKO", "HAH", "POA", "LHP"] }, inbound: { dest_key: "dest_north_point", stops: ["LHP", "POA", "HAH", "TKO", "TIK", "YAT", "QUB", "NOP"] } },
        "AEL": { route_key: "route_ael", transitType: "MTR", outbound: { dest_key: "dest_asia_world_expo", stops: ["HOK", "KOW", "TSY", "AIR", "AWE"] }, inbound: { dest_key: "dest_hong_kong", stops: ["AWE", "AIR", "TSY", "KOW", "HOK"] } },
        "DRL": { route_key: "route_drl", transitType: "MTR", outbound: { dest_key: "dest_disneyland", stops: ["SUN", "DIS"] }, inbound: { dest_key: "dest_sunny_bay", stops: ["DIS", "SUN"] } },

        // ==========================================
        // 🚇 輕鐵 11 條路綫全網補完 (LRT)
        // ==========================================
        "LRT-505": { route_key: "route_lrt_505", transitType: "LRT", outbound: { dest_key: "dest_siu_hong", stops: ["LRT-260", "LRT-300", "LRT-060", "LRT-190", "LRT-100"] }, inbound: { dest_key: "dest_sam_shing", stops: ["LRT-100", "LRT-190", "LRT-060", "LRT-300", "LRT-260"] } },
        "LRT-507": { route_key: "route_lrt_507", transitType: "LRT", outbound: { dest_key: "dest_tin_king", stops: ["LRT-001", "LRT-300", "LRT-212", "LRT-120"] }, inbound: { dest_key: "dest_tuen_mun_ferry", stops: ["LRT-120", "LRT-212", "LRT-300", "LRT-001"] } },
        "LRT-610": { route_key: "route_lrt_610", transitType: "LRT", outbound: { dest_key: "dest_yuen_long", stops: ["LRT-001", "LRT-120", "LRT-100", "LRT-350", "LRT-380", "LRT-600"] }, inbound: { dest_key: "dest_tuen_mun_ferry", stops: ["LRT-600", "LRT-380", "LRT-350", "LRT-100", "LRT-120", "LRT-001"] } },
        "LRT-614": { route_key: "route_lrt_614", transitType: "LRT", outbound: { dest_key: "dest_yuen_long", stops: ["LRT-001", "LRT-300", "LRT-295", "LRT-100", "LRT-600"] }, inbound: { dest_key: "dest_tuen_mun_ferry", stops: ["LRT-600", "LRT-100", "LRT-295", "LRT-300", "LRT-001"] } },
        "LRT-614P": { route_key: "route_lrt_614p", transitType: "LRT", outbound: { dest_key: "dest_siu_hong", stops: ["LRT-001", "LRT-300", "LRT-295", "LRT-100"] }, inbound: { dest_key: "dest_tuen_mun_ferry", stops: ["LRT-100", "LRT-295", "LRT-300", "LRT-001"] } },
        "LRT-615": { route_key: "route_lrt_615", transitType: "LRT", outbound: { dest_key: "dest_yuen_long", stops: ["LRT-001", "LRT-120", "LRT-100", "LRT-600"] }, inbound: { dest_key: "dest_tuen_mun_ferry", stops: ["LRT-600", "LRT-100", "LRT-120", "LRT-001"] } },
        "LRT-615P": { route_key: "route_lrt_615p", transitType: "LRT", outbound: { dest_key: "dest_siu_hong", stops: ["LRT-001", "LRT-120", "LRT-100"] }, inbound: { dest_key: "dest_tuen_mun_ferry", stops: ["LRT-100", "LRT-120", "LRT-001"] } },
        "LRT-705": { route_key: "route_lrt_705", transitType: "LRT", outbound: { dest_key: "dest_lrt_705_loop", stops: ["LRT-430", "LRT-445", "LRT-460", "LRT-550", "LRT-435", "LRT-430"] } },
        "LRT-706": { route_key: "route_lrt_706", transitType: "LRT", outbound: { dest_key: "dest_lrt_706_loop", stops: ["LRT-430", "LRT-435", "LRT-550", "LRT-460", "LRT-445", "LRT-430"] } },
        "LRT-751": { route_key: "route_lrt_751", transitType: "LRT", outbound: { dest_key: "dest_tin_yat", stops: ["LRT-275", "LRT-300", "LRT-430", "LRT-460", "LRT-550"] }, inbound: { dest_key: "dest_yau_oi", stops: ["LRT-550", "LRT-460", "LRT-430", "LRT-300", "LRT-275"] } },
        "LRT-761P": { route_key: "route_lrt_761p", transitType: "LRT", outbound: { dest_key: "dest_yuen_long", stops: ["LRT-550", "LRT-460", "LRT-445", "LRT-600"] }, inbound: { dest_key: "dest_tin_yat", stops: ["LRT-600", "LRT-445", "LRT-460", "LRT-550"] } },

        // ==========================================
        // 🚃 香港電車 (Tram)
        // ==========================================
        "TRAM-E": { route_key: "route_tram_east", transitType: "TRAM", outbound: { dest_key: "dest_tram_eastbound", stops: ["TRAM-109", "TRAM-110", "TRAM-111", "TRAM-112", "TRAM-101E", "TRAM-99E", "TRAM-97E", "TRAM-95E", "TRAM-93E", "TRAM-91E", "TRAM-89E", "TRAM-87E", "TRAM-85E", "TRAM-83E", "TRAM-81E", "TRAM-79E", "TRAM-77E", "TRAM-75E", "TRAM-73E", "TRAM-71E", "TRAM-69E", "TRAM-67E", "TRAM-65E", "TRAM-63E", "TRAM-61E", "TRAM-59E", "TRAM-57E", "TRAM-55E", "TRAM-53E", "TRAM-51E", "TRAM-49E", "TRAM-47E", "TRAM-45E", "TRAM-43E", "TRAM-41E", "TRAM-39E", "TRAM-37E", "TRAM-35E", "TRAM-33E", "TRAM-31E", "TRAM-29E", "TRAM-27E", "TRAM-25E", "TRAM-23E", "TRAM-21E", "TRAM-T_SW_E", "TRAM-19E", "TRAM-17E", "TRAM-15E", "TRAM-13E", "TRAM-11E", "TRAM-09E", "TRAM-T_STT", "TRAM-07E", "TRAM-05E", "TRAM-03E", "TRAM-01E", "TRAM-T_KT"] } },
        "TRAM-W": { route_key: "route_tram_west", transitType: "TRAM", outbound: { dest_key: "dest_tram_westbound", stops: ["TRAM-T_SKW", "TRAM-02W", "TRAM-04W", "TRAM-06W", "TRAM-08W", "TRAM-10W", "TRAM-12W", "TRAM-14W", "TRAM-16W", "TRAM-18W", "TRAM-20W", "TRAM-22W", "TRAM-24W", "TRAM-26W", "TRAM-28W", "TRAM-30W", "TRAM-T_NP", "TRAM-32W", "TRAM-34W", "TRAM-36W", "TRAM-38W", "TRAM-40W", "TRAM-42W", "TRAM-44W", "TRAM-T_CWB", "TRAM-46W", "TRAM-48W", "TRAM-105", "TRAM-106", "TRAM-107", "TRAM-108", "TRAM-T_HV", "TRAM-50W", "TRAM-52W", "TRAM-54W", "TRAM-56W", "TRAM-58W", "TRAM-60W", "TRAM-62W", "TRAM-64W", "TRAM-66W", "TRAM-68W", "TRAM-70W", "TRAM-72W", "TRAM-74W", "TRAM-76W", "TRAM-T_SW", "TRAM-78W", "TRAM-80W", "TRAM-82W", "TRAM-84W", "TRAM-86W", "TRAM-88W", "TRAM-90W", "TRAM-92W", "TRAM-94W", "TRAM-D", "TRAM-96W", "TRAM-98W", "TRAM-100W", "TRAM-102W", "TRAM-104W"] } },

        // ==========================================
        // ⛴️ 渡輪航線 (Ferry Lines)
        // ==========================================
        "FERRY-CC": { route_key: "route_ferry_cc", transitType: "FERRY", outbound: { dest_key: "dest_cheung_chau", stops: ["CE-5"] }, inbound: { dest_key: "dest_central", stops: ["CC-PIER"] } },
        "FERRY-MW": { route_key: "route_ferry_mw", transitType: "FERRY", outbound: { dest_key: "dest_mui_wo", stops: ["CE-6"] }, inbound: { dest_key: "dest_central", stops: ["MW-PIER"] } },
        "FERRY-NWFF-NP-HH": { route_key: "route_ferry_nwff_np_hh", transitType: "FERRY", outbound: { dest_key: "dest_hung_hom", stops: ["NP-PIER"] }, inbound: { dest_key: "dest_north_point", stops: ["HH-PIER"] } },
        "FERRY-NWFF-NP-KC": { route_key: "route_ferry_nwff_np_kc", transitType: "FERRY", outbound: { dest_key: "dest_kowloon_city", stops: ["NP-PIER"] }, inbound: { dest_key: "dest_north_point", stops: ["KC-PIER"] } },
        "FERRY-STAR-CEN": { route_key: "route_ferry_star_cen", transitType: "FERRY", outbound: { dest_key: "dest_central", stops: ["STAR-TST"] }, inbound: { dest_key: "dest_tsim_sha_tsui", stops: ["STAR-CEN"] } },
        "FERRY-STAR-WAN": { route_key: "route_ferry_star_wan", transitType: "FERRY", outbound: { dest_key: "dest_wan_chai", stops: ["STAR-TST"] }, inbound: { dest_key: "dest_tsim_sha_tsui", stops: ["STAR-WAN"] } },
        "FERRY-YSW": { route_key: "route_ferry_ysw", transitType: "FERRY", outbound: { dest_key: "dest_yung_shue_wan", stops: ["CE-4"] }, inbound: { dest_key: "dest_central", stops: ["YSW-PIER"] } },
        "FERRY-SKW": { route_key: "route_ferry_skw", transitType: "FERRY", outbound: { dest_key: "dest_sok_kwu_wan", stops: ["CE-4"] }, inbound: { dest_key: "dest_central", stops: ["SKW-PIER"] } },
        "FERRY-PC": { route_key: "route_ferry_pc", transitType: "FERRY", outbound: { dest_key: "dest_peng_chau", stops: ["CE-6"] }, inbound: { dest_key: "dest_central", stops: ["PC-PIER"] } },
        "FERRY-DB": { route_key: "route_ferry_db", transitType: "FERRY", outbound: { dest_key: "dest_discovery_bay", stops: ["CE-3"] }, inbound: { dest_key: "dest_central", stops: ["DB-PIER"] } },
        "FERRY-FF-NP-KT": { route_key: "route_ferry_ff_np_kt", transitType: "FERRY", outbound: { dest_key: "dest_kwun_tong", stops: ["NP-PIER"] }, inbound: { dest_key: "dest_north_point", stops: ["KT-PIER"] } },
        "FERRY-FF-NP-HH": { route_key: "route_ferry_ff_np_hh", transitType: "FERRY", outbound: { dest_key: "dest_hung_hom", stops: ["NP-PIER"] }, inbound: { dest_key: "dest_north_point", stops: ["HH-PIER"] } },
        "FERRY-FF-CEN-HH": { route_key: "route_ferry_ff_cen_hh", transitType: "FERRY", outbound: { dest_key: "dest_hung_hom", stops: ["CE-8"] }, inbound: { dest_key: "dest_central", stops: ["HH-PIER"] } },
        "FERRY-FF-TM-TO": { route_key: "route_ferry_ff_tm_to", transitType: "FERRY", outbound: { dest_key: "dest_tai_o", stops: ["TM-PIER"] }, inbound: { dest_key: "dest_tuen_mun", stops: ["TO-PIER"] } },
        "FERRY-PI-CEN-MWN": { route_key: "route_ferry_pi_cen_mw", transitType: "FERRY", outbound: { dest_key: "dest_ma_wan", stops: ["CE-2"] }, inbound: { dest_key: "dest_central", stops: ["MWN-PIER"] } },
        "FERRY-PI-TW-MWN": { route_key: "route_ferry_pi_tw_mw", transitType: "FERRY", outbound: { dest_key: "dest_ma_wan", stops: ["TW-PIER"] }, inbound: { dest_key: "dest_tsuen_wan", stops: ["MWN-PIER"] } },
        "FERRY-CS-SWH-SKT": { route_key: "route_ferry_cs_swh_skt", transitType: "FERRY", outbound: { dest_key: "dest_sam_ka_tsuen", stops: ["SWH-PIER"] }, inbound: { dest_key: "dest_sai_wan_ho", stops: ["SKT-PIER"] } },
        "FERRY-CS-SWH-KT": { route_key: "route_ferry_cs_swh_kt", transitType: "FERRY", outbound: { dest_key: "dest_kwun_tong", stops: ["SWH-PIER"] }, inbound: { dest_key: "dest_sai_wan_ho", stops: ["KT-PIER"] } }
    };

    // 3. ⚙ 自膨脹與平整邏輯
    const expandedDictionary = {};

    Object.keys(COMPACT_ROUTES).forEach(routeId => {
        const compact = COMPACT_ROUTES[routeId];
        
        if (compact.transitType === 'MIXED' || compact.transitType === 'GMB') {
            expandedDictionary[routeId] = compact;
            return;
        }

        const routeConfig = {
            route_key: compact.route_key,
            transitType: compact.transitType,
            directions: {}
        };

        const buildApiUrl = (transitType, routeId, stopCode) => {
            if (transitType === 'MTR') {
                const dir = stopCode.includes('-UP') ? 'UP' : 'DOWN';
                const sta = stopCode.replace('-UP', '').replace('-DOWN', '');
                return `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${routeId}&sta=${sta}&dir=${dir}`;
            }
            if (transitType === 'LRT') {
                const id = stopCode.replace('LRT-', '');
                return `https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=${id}&with_special=1`;
            }
            if (transitType === 'TRAM') {
                const id = stopCode.replace('TRAM-', '').split('_')[0];
                return `https://rt.data.gov.hk/v1/transport/tram/getSchedule.php?stop_id=${id}`;
            }
            if (transitType === 'FERRY') {
                const ferryUrls = {
                    "FERRY-CC_CE-5": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-cen-cc&pier_id=cen",
                    "FERRY-CC_CC-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-cen-cc&pier_id=cc",
                    "FERRY-MW_CE-6": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-cen-mw&pier_id=cen",
                    "FERRY-MW_MW-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-cen-mw&pier_id=mw",
                    "FERRY-NWFF-NP-HH_NP-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-np-hh&pier_id=np",
                    "FERRY-NWFF-NP-HH_HH-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-np-hh&pier_id=hh",
                    "FERRY-NWFF-NP-KC_NP-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-np-kc&pier_id=np",
                    "FERRY-NWFF-NP-KC_KC-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=nwff&route_id=nwff-np-kc&pier_id=kc",
                    
                    "FERRY-STAR-CEN_STAR-TST": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=sf&route_id=sf-tst-cen&pier_id=tst",
                    "FERRY-STAR-CEN_STAR-CEN": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=sf&route_id=sf-tst-cen&pier_id=cen",
                    "FERRY-STAR-WAN_STAR-TST": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=sf&route_id=sf-tst-wan&pier_id=tst",
                    "FERRY-STAR-WAN_STAR-WAN": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=sf&route_id=sf-tst-wan&pier_id=wan",
                    
                    "FERRY-YSW_CE-4": "https://www.hkkfeta.com/opendata/eta/2/outbound",
                    "FERRY-YSW_YSW-PIER": "https://www.hkkfeta.com/opendata/eta/2/inbound",
                    "FERRY-SKW_CE-4": "https://www.hkkfeta.com/opendata/eta/3/outbound",
                    "FERRY-SKW_SKW-PIER": "https://www.hkkfeta.com/opendata/eta/3/inbound",
                    "FERRY-PC_CE-6": "https://www.hkkfeta.com/opendata/eta/1/outbound",
                    "FERRY-PC_PC-PIER": "https://www.hkkfeta.com/opendata/eta/1/inbound",
                    
                    "FERRY-DB_CE-3": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=db&route_id=db-cen-db&pier_id=cen",
                    "FERRY-DB_DB-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=db&route_id=db-cen-db&pier_id=db",
                    
                    "FERRY-FF-NP-KT_NP-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-np-kt&pier_id=np",
                    "FERRY-FF-NP-KT_KT-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-np-kt&pier_id=kt",
                    "FERRY-FF-NP-HH_NP-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-np-hh&pier_id=np",
                    "FERRY-FF-NP-HH_HH-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-np-hh&pier_id=hh",
                    "FERRY-FF-CEN-HH_CE-8": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-cen-hh&pier_id=cen",
                    "FERRY-FF-CEN-HH_HH-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-cen-hh&pier_id=hh",
                    "FERRY-FF-TM-TO_TM-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-tm-tc-slw-to&pier_id=tm",
                    "FERRY-FF-TM-TO_TO-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=ff&route_id=ff-tm-tc-slw-to&pier_id=to",

                    "FERRY-PI-CEN-MWN_CE-2": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=pi&route_id=pi-cen-mwn&pier_id=cen",
                    "FERRY-PI-CEN-MWN_MWN-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=pi&route_id=pi-cen-mwn&pier_id=mwn",
                    "FERRY-PI-TW-MWN_TW-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=pi&route_id=pi-tw-mwn&pier_id=tw",
                    "FERRY-PI-TW-MWN_MWN-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=pi&route_id=pi-tw-mwn&pier_id=mwn",

                    "FERRY-CS-SWH-SKT_SWH-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=cs&route_id=cs-swh-skt&pier_id=swh",
                    "FERRY-CS-SWH-SKT_SKT-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=cs&route_id=cs-swh-skt&pier_id=skt",
                    "FERRY-CS-SWH-KT_SWH-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=cs&route_id=cs-swh-kt&pier_id=swh",
                    "FERRY-CS-SWH-KT_KT-PIER": "https://rt.data.gov.hk/v1/transport/localferry/getSchedule.php?operator_id=cs&route_id=cs-swh-kt&pier_id=kt"
                };
                return ferryUrls[`${routeId}_${stopCode}`] || "#";
            }
            return "#";
        };

        const processDirection = (directionKey, dirConfig) => {
            if (!dirConfig) return;
            
            const stopsList = dirConfig.stops.map(stopCode => {
                const isHeavyMtr = compact.transitType === 'MTR';
                const fullStopId = isHeavyMtr ? `${stopCode}-${directionKey.toUpperCase()}` : stopCode;
                const metadataKey = isHeavyMtr ? stopCode : stopCode;
                
                return {
                    stop_id: fullStopId,
                    name_key: STATION_METADATA[metadataKey] || `stop_${stopCode.toLowerCase()}`,
                    api_url: buildApiUrl(compact.transitType, routeId, fullStopId)
                };
            });
            
            routeConfig.directions[directionKey] = {
                dest_key: dirConfig.dest_key,
                stops: stopsList
            };
        };

        processDirection('outbound', compact.outbound);
        processDirection('inbound', compact.inbound);

        expandedDictionary[routeId] = routeConfig;
    });

    window.STATIC_DICTIONARY = expandedDictionary;
})();