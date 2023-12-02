// lrc:https://music.163.com/api/song/media?id=

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    theme: '#181c27',
    audio: [
        {
            name: '东海老人',
            artist: '裁缝铺',
            url: 'https://music.163.com/song/media/outer/url?id=1991332315.mp3',
            cover: 'https://p1.music.126.net/OWbeXUGhGWJ-vwOXwHFNGg==/109951167987112081.jpg?param=90y90',
            lrc: '/lyrics/1.lrc'
        },
        {
            name: 'Bottai',
            artist: 'Ooyy',
            url: 'https://music.163.com/song/media/outer/url?id=1397140856.mp3',
            cover: 'https://p2.music.126.net/kSz24XocHFSKv3LIcxRm9w==/109951164429251929.jpg?param=90y90',
            lrc: '/lyrics/2.lrc'
        },
        {
            name: 'labour',
            artist: 'Paloma',
            url: 'https://music.163.com/song/media/outer/url?id=2026410789.mp3',
            cover: 'https://p1.music.126.net/NoTI6xIYsQEmG_VfQWRDEA==/109951168433798616.jpg?param=90y90',
            lrc: '/lyrics/3.lrc'
        },
        {
            name: 'Wriggle (Mr Jukes Edit)',
            artist: 'Jukes',
            url: 'https://music.163.com/song/media/outer/url?id=1295114264.mp3',
            cover: 'https://p2.music.126.net/IFWLQseUQwmqu1Abtxqf2Q==/109951163416107328.jpg?param=90y90',
            lrc: '/lyrics/4.lrc'
        },
        {
            name: 'Lion',
            artist: 'Colors',
            url: 'https://music.163.com/song/media/outer/url?id=1491054227.mp3',
            cover: 'https://p2.music.126.net/Q-MqEAs1Ui0U56Kbz_FUnA==/109951165423963165.jpg?param=90y90',
            lrc: '/lyrics/5.lrc'
        },
    ]
});