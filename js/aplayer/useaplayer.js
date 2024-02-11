// lrc:https://music.163.com/api/song/media?id=

const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    lrcType: 3,
    theme: "#181c27",
    audio: [
        {
            name: 'Tomorrow',
            artist: 'Young Rising Sons',
            url: 'https://music.163.com/song/media/outer/url?id=2074960042.mp3',
            cover: 'http://p2.music.126.net/ctxdm3Eb21ctY6g_GWhUkw==/109951168854633119.jpg',
            lrc: '/file/lyrics/Tomorrow - Young Rising Sons.lrc'
        },
        {
            name: 'Innerbloom',
            artist: 'RÜFÜS DU SOL',
            url: 'https://music.163.com/song/media/outer/url?id=41643734.mp3',
            cover: 'http://p2.music.126.net/S1a5b_bsLPh_KzPRQmJiyw==/109951165973370404.jpg',
            lrc: '/file/lyrics/Innerbloom - RÜFÜS DU SOL.lrc'
        },
        {
            name: 'Fireflies',
            artist: 'Owl City',
            url: 'https://music.163.com/song/media/outer/url?id=1969768769.mp3',
            cover: 'http://p1.music.126.net/dorTkbeN6ioIYOr1SwGRtA==/109951168167193142.jpg',
            lrc: '/file/lyrics/Fireflies - Owl City.lrc'
        },
        {
            name: 'Звёздное лето',
            artist: 'Алла Пугачёва/Ритм',
            url: 'https://music.163.com/song/media/outer/url?id=1953273961.mp3',
            cover: 'http://p1.music.126.net/jNNNPO8Ieq9rgOelAm0edA==/109951167510198759.jpg',
            lrc: '/file/lyrics/Звёздное лето - Алла Пугачёва Ритм.lrc'
        },
        {
            name: '1985',
            artist: 'Bo Burnham',
            url: 'https://music.163.com/song/media/outer/url?id=1954311269.mp3',
            cover: 'http://p1.music.126.net/xk4knBURRmqEwUmnfZ6uMA==/109951167526000787.jpg',
            lrc: '/file/lyrics/1985 - Bo Burnham.lrc'
        },
        {
            name: 'Great Time To Be Human',
            artist: 'Jagwar Twin',
            url: 'https://music.163.com/song/media/outer/url?id=2030645954.mp3',
            cover: 'http://p1.music.126.net/EMZGD4DaF-F-VGgCxCYBLQ==/109951168472848373.jpg',
            lrc: '/file/lyrics/Great Time To Be Human - Jagwar Twin.lrc'
        },
        {
            name: 'Gravity',
            artist: 'Lexurus',
            url: 'https://music.163.com/song/media/outer/url?id=1415295927.mp3',
            cover: 'http://p1.music.126.net/FXgp1FpkNbt3vuwltFED_w==/109951164611629054.jpg',
            lrc: '/file/lyrics/Gravity - Lexurus.lrc'
        },
        {
            name: 'Осколки',
            artist: 'Перемотка/внимание брусника!',
            url: 'https://music.163.com/song/media/outer/url?id=2037072752.mp3',
            cover: 'http://p1.music.126.net/MfIlzp_zJyDVNtOXY0_DFA==/109951168528782812.jpg',
            lrc: '/file/lyrics/Осколки - Перемотка внимание брусника!.lrc'
        },
        {
            name: '夜に浮かぶ',
            artist: 'Haruna',
            url: 'https://music.163.com/song/media/outer/url?id=1488866474.mp3',
            cover: 'http://p1.music.126.net/iymLkiYsoTgCVkAUVXX3bA==/109951165405472445.jpg',
            lrc: '/file/lyrics/夜に浮かぶ - Haruna.lrc'
        },
        {
            name: "Don't Be So Serious",
            artist: 'Low Roar',
            url: 'https://music.163.com/song/media/outer/url?id=472045266.mp3',
            cover: 'http://p1.music.126.net/FgbzYlUsSUkCduUGusveZg==/109951163563588207.jpg',
            lrc: "/file/lyrics/Don't Be So Serious - Low Roar.lrc"
        },
        {
            name: 'Bones',
            artist: 'Low Roar/Jofridur Akadottir',
            url: 'https://music.163.com/song/media/outer/url?id=472045267.mp3',
            cover: 'http://p1.music.126.net/FgbzYlUsSUkCduUGusveZg==/109951163563588207.jpg',
            lrc: '/file/lyrics/Bones - Low Roar Jofridur Akadottir.lrc'
        },
        {
            name: 'Stand Alone',
            artist: 'obylx',
            url: 'https://music.163.com/song/media/outer/url?id=1367329985.mp3',
            cover: 'http://p1.music.126.net/DHLNjrawQT8Sgm3KpuVLcA==/109951164095846823.jpg',
            lrc: '/file/lyrics/Stand Alone - obylx.lrc'
        },
        {
            name: 'Another Holiday',
            artist: 'Dylan Dunlap',
            url: 'https://music.163.com/song/media/outer/url?id=1822723519.mp3',
            cover: 'http://p2.music.126.net/oyi_P_nC_tBssZFOd_U1_g==/109951167087400235.jpg',
            lrc: '/file/lyrics/Another Holiday - Dylan Dunlap.lrc'
        },
        {
            name: "There You Are",
            artist: "Pogo",
            url: "https://music.163.com/song/media/outer/url?id=451372087.mp3",
            cover: "https://p2.music.126.net/sBBjsvay_Ep1UV2r1yPgHw==/18572950418083007.jpg?param=130y130",
            lrc: "/file/lyrics/ther.lrc"
        },
        {
            name: "Lipstick On The Glass",
            artist: "Wolf Alice",
            url: "https://music.163.com/song/media/outer/url?id=1848244626.mp3",
            cover: "https://p2.music.126.net/lEzPSOjusKaRXKXT3987lQ==/109951166035876388.jpg?param=130y130",
            lrc: "/file/lyrics/lips.lrc"
        },
        {
            name: "Data & Picard",
            artist: "Pogo",
            url: "https://music.163.com/song/media/outer/url?id=451376031.mp3",
            cover: "https://p1.music.126.net/sBBjsvay_Ep1UV2r1yPgHw==/18572950418083007.jpg?param=130y130",
            lrc: "/file/lyrics/data.lrc"
        },
        {
            name: "东海老人",
            artist: "裁缝铺",
            url: "https://music.163.com/song/media/outer/url?id=1991332315.mp3",
            cover: "https://p1.music.126.net/OWbeXUGhGWJ-vwOXwHFNGg==/109951167987112081.jpg?param=130y130",
            lrc: "/file/lyrics/dhlr.lrc"
        },
        {
            name: "isahini",
            artist: "LÜCY",
            url: "https://music.163.com/song/media/outer/url?id=1954146692.mp3",
            cover: "https://p1.music.126.net/CMHSaqW98zH0BktIhS7dVA==/109951167523915753.jpg?param=130y130",
            lrc: "/file/lyrics/isah.lrc"
        },
        {
            name: "Everything At Your Feet (feat. The Chamanas)",
            artist: "ODESZA / The Chamanas",
            url: "https://music.163.com/song/media/outer/url?id=1329664859.mp3",
            cover: "https://p2.music.126.net/njCU7D_y3hRqQQSQmIW1lg==/109951163695044017.jpg?param=130y130",
            lrc: "/file/lyrics/ever.lrc"
        },
        {
            name: "十万嬉皮",
            artist: "万能青年旅店",
            url: "https://music.163.com/song/media/outer/url?id=386837.mp3",
            cover: "https://p1.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg?param=130y130",
            lrc: "/file/lyrics/swxp.lrc"
        },
    ]
});