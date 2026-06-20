(function() {
    const STATION_METADATA = {
        "HOK": "stop_mtr_hok", "KOW": "stop_mtr_kow", "OLY": "stop_mtr_oly", "NAC": "stop_mtr_nac", "LAK": "stop_mtr_lak", "TSY": "stop_mtr_tsy", "SUN": "stop_mtr_sun", "TUC": "stop_mtr_tuc",
        "WKS": "stop_mtr_wks", "MOS": "stop_mtr_mos", "HEO": "stop_mtr_heo", "TSH": "stop_mtr_tsh", "SHM": "stop_mtr_shm", "CIO": "stop_mtr_cio", "STW": "stop_mtr_stw", "CKT": "stop_mtr_ckt", "TAW": "stop_mtr_taw", "HIK": "stop_mtr_hik", "DIH": "stop_mtr_dih", "KAT": "stop_mtr_kat", "SUW": "stop_mtr_suw", "TKW": "stop_mtr_tkw", "HOM": "stop_mtr_hom", "HUH": "stop_mtr_huh", "ETS": "stop_mtr_ets", "AUS": "stop_mtr_aus", "MEF": "stop_mtr_mef", "TWW": "stop_mtr_tww", "KSR": "stop_mtr_ksr", "YUL": "stop_mtr_yul", "LOP": "stop_mtr_lop", "TIS": "stop_mtr_tis", "SIH": "stop_mtr_sih", "TUM": "stop_mtr_tum",
        "WHA": "stop_mtr_wha", "YMT": "stop_mtr_ymt", "MOK": "stop_mtr_mok", "PRE": "stop_mtr_pre", "SKM": "stop_mtr_skm", "KOT": "stop_mtr_kot", "LOF": "stop_mtr_lof", "WTS": "stop_mtr_wts", "CHH": "stop_mtr_chh", "KOB": "stop_mtr_kob", "NTK": "stop_mtr_ntk", "KWT": "stop_mtr_kwt", "LAT": "stop_mtr_lat", "YAT": "stop_mtr_yat", "TIK": "stop_mtr_tik",
        "CEN": "stop_mtr_cen", "ADM": "stop_mtr_adm", "TST": "stop_mtr_tst", "JOR": "stop_mtr_jor", "SSP": "stop_mtr_ssp", "CSW": "stop_mtr_csw", "LCK": "stop_mtr_lck", "KWH": "stop_mtr_kwh", "KWF": "stop_mtr_kwf", "TWH": "stop_mtr_twh", "TSW": "stop_mtr_tsw",
        "KET": "stop_mtr_ket", "HKU": "stop_mtr_hku", "SYP": "stop_mtr_syp", "SHW": "stop_mtr_shw", "WAC": "stop_mtr_wac", "CAB": "stop_mtr_cab", "TIH": "stop_mtr_tih", "FOH": "stop_mtr_foh", "NOP": "stop_mtr_nop", "QUB": "stop_mtr_qub", "TAK": "stop_mtr_tak", "SWH": "stop_mtr_swh", "SKW": "stop_mtr_skw", "HFC": "stop_mtr_hfc", "CHW": "stop_mtr_chw",
        "EXC": "stop_mtr_exc", "MKK": "stop_mtr_mkk", "SHT": "stop_mtr_sht", "FOT": "stop_mtr_fot", "RAC": "stop_mtr_rac", "UNI": "stop_mtr_uni", "TAP": "stop_mtr_tap", "TWO": "stop_mtr_two", "FAN": "stop_mtr_fan", "SHS": "stop_mtr_shs", "LOW": "stop_mtr_low", "LMC": "stop_mtr_lmc",
        "OCP": "stop_mtr_ocp", "WCH": "stop_mtr_wch", "LET": "stop_mtr_let", "SOH": "stop_mtr_soh", "TKO": "stop_mtr_tko", "LHP": "stop_mtr_lhp", "HAH": "stop_mtr_hah", "POA": "stop_mtr_poa", "AIR": "stop_mtr_air", "AWE": "stop_mtr_awe", "DIS": "stop_mtr_dis",
        "LRT-430": "stop_lrt_tin_shui_wai", "LRT-460": "stop_lrt_tin_shui", "LRT-435": "stop_lrt_tin_wing", "LRT-001": "stop_lrt_tuen_mun_ferry", "LRT-600": "stop_lrt_yuen_long", "LRT-100": "stop_lrt_siu_hong", "LRT-260": "stop_lrt_sam_shing", "LRT-120": "stop_lrt_tin_king", "LRT-550": "stop_lrt_tin_yat", "LRT-275": "stop_lrt_yau_oi", "LRT-295": "stop_lrt_pui_to", "LRT-300": "stop_lrt_town_centre", "LRT-060": "stop_lrt_kin_on", "LRT-190": "stop_lrt_shan_king", "LRT-212": "stop_lrt_tai_hing", "LRT-350": "stop_lrt_lam_tei", "LRT-380": "stop_lrt_hung_shui_kiu", "LRT-445": "stop_lrt_tin_yiu",
        "CE-2": "pier_central_2", "CE-3": "pier_central_3", "CE-4": "pier_central_4", "CE-5": "pier_central_5", "CE-6": "pier_central_6", "CE-8": "pier_central_8", "CC-PIER": "pier_cheung_chau", "MW-PIER": "pier_mui_wo", "STAR-TST": "pier_star_tst", "STAR-CEN": "pier_star_cen", "STAR-WAN": "pier_star_wan", "YSW-PIER": "pier_yung_shue_wan", "SKW-PIER": "pier_sok_kwu_wan", "PC-PIER": "pier_peng_chau", "DB-PIER": "pier_db", "KT-PIER": "pier_kt", "HH-PIER": "pier_hh", "NP-PIER": "pier_np", "KC-PIER": "pier_kc", "MWN-PIER": "pier_mwn", "TW-PIER": "pier_tw", "TM-PIER": "pier_tm", "TO-PIER": "pier_to", "SWH-PIER": "pier_swh", "SKT-PIER": "pier_skt",
        "20002120": "stop_tuen_mun_station", "20002117": "stop_sheung_shui_station", "20015509": "stop_hang_hau_station", "2001150": "stop_sham_shui_po_station"
    };

    const COMPACT_ROUTES = {
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

    const expandedDictionary = {};
    Object.keys(COMPACT_ROUTES).forEach(routeId => {
        const compact = COMPACT_ROUTES[routeId];
        if (compact.transitType === 'MIXED' || compact.transitType === 'GMB') { expandedDictionary[routeId] = compact; return; }

        const routeConfig = { route_key: compact.route_key, transitType: compact.transitType, directions: {} };

        const buildApiUrl = (transitType, routeId, stopCode) => {
            if (transitType === 'MTR') {
                const dir = stopCode.includes('-OUTBOUND') ? 'UP' : 'DOWN';
                const sta = stopCode.replace('-OUTBOUND', '').replace('-INBOUND', '');
                return `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${routeId}&sta=${sta}&dir=${dir}`;
            }
            if (transitType === 'LRT') { const id = stopCode.replace('LRT-', ''); return `https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=${id}&with_special=1`; }
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
                    "FERRY-YSW_CE-4": "https://www.hkkfeta.com/opendata/eta/2/outbound", "FERRY-YSW_YSW-PIER": "https://www.hkkfeta.com/opendata/eta/2/inbound",
                    "FERRY-SKW_CE-4": "https://www.hkkfeta.com/opendata/eta/3/outbound", "FERRY-SKW_SKW-PIER": "https://www.hkkfeta.com/opendata/eta/3/inbound",
                    "FERRY-PC_CE-6": "https://www.hkkfeta.com/opendata/eta/1/outbound", "FERRY-PC_PC-PIER": "https://www.hkkfeta.com/opendata/eta/1/inbound",
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
                return { stop_id: fullStopId, name_key: STATION_METADATA[stopCode] || `stop_${stopCode.toLowerCase()}`, api_url: buildApiUrl(compact.transitType, routeId, fullStopId) };
            });
            routeConfig.directions[directionKey] = { dest_key: dirConfig.dest_key, stops: stopsList };
        };

        processDirection('outbound', compact.outbound);
        processDirection('inbound', compact.inbound);
        expandedDictionary[routeId] = routeConfig;
    });

    window.STATIC_DICTIONARY = expandedDictionary;
})();
