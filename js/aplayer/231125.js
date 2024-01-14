// lrc:https://music.163.com/api/song/media?id=

const ap = new APlayer({
    container: document.getElementById("aplayer"),
    showlrc: true,
    fixed: false,
    mini: false,
    lrcType: 3,
    theme: "#556f6e",
    audio: [
        {
            name: "夜に浮かぶ",
            artist: "Haruna",
            url: "https://music.163.com/song/media/outer/url?id=1488866474.mp3",
            cover: "https://p1.music.126.net/iymLkiYsoTgCVkAUVXX3bA==/109951165405472445.jpg?param=130y130",
            lrc: "/file/lyrics/fyys.lrc"
        },
        {
            name: "Anything You Need",
            artist: "Roar",
            url: "https://music.163.com/song/media/outer/url?id=28764325.mp3",
            cover: "https://p2.music.126.net/dgwDu1oOCALlNl5DgDZGSA==/109951163321875373.jpg?param=130y130",
            lrc: "/file/lyrics/anyt.lrc"
        },
        {
            name: "Poznań",
            artist: "Roar",
            url: "https://music.163.com/song/media/outer/url?id=472045275.mp3",
            cover: "https://p1.music.126.net/FgbzYlUsSUkCduUGusveZg==/109951163563588207.jpg?param=130y130",
            lrc: "/file/lyrics/pozn.lrc"
        },
        {
            name: "Bones",
            artist: "Akadottir",
            url: "https://music.163.com/song/media/outer/url?id=472045267.mp3",
            cover: "https://p1.music.126.net/FgbzYlUsSUkCduUGusveZg==/109951163563588207.jpg?param=130y130",
            lrc: "/file/lyrics/bone.lrc"
        },
        {
            name: "Don't Be So Serious",
            artist: "Roar",
            url: "https://music.163.com/song/media/outer/url?id=472045266.mp3",
            cover: "https://p1.music.126.net/FgbzYlUsSUkCduUGusveZg==/109951163563588207.jpg?param=130y130",
            lrc: "/file/lyrics/dont.lrc"
        },
    ]
});