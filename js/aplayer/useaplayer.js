// lrc:https://music.163.com/api/song/media?id=

const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    lrcType: 3,
    theme: "#181c27",
    audio: [
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