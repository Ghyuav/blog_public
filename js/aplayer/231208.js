// lrc:https://music.163.com/api/song/media?id=

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    showlrc: true,
    fixed: false,
    mini: false,
    lrcType: 3,
    theme: '#556f6e',
    audio: [
        {
            name: 'Осколки',
            artist: 'брусника!',
            url: 'https://music.163.com/song/media/outer/url?id=2037072752.mp3',
            cover: 'https://p1.music.126.net/MfIlzp_zJyDVNtOXY0_DFA==/109951168528782812.jpg?param=90y90',
            lrc: '/file/lyrics/ocko.lrc'
        },
        {
            name: 'Dream On',
            artist: 'Aerosmith',
            url: 'https://music.163.com/song/media/outer/url?id=20506035.mp3',
            cover: 'https://p1.music.126.net/zHfJ-QVu7PpdKWxH8pta5g==/109951168316886883.jpg?param=90y90',
            lrc: '/file/lyrics/drea.lrc'
        },
        {
            name: 'Нимфоманка',
            artist: 'монеточка',
            url: 'https://music.163.com/song/media/outer/url?id=570051417.mp3',
            cover: 'https://p2.music.126.net/UIzFMAPtYbeUCl2OifnkbA==/109951163494850833.jpg?param=90y90',
            lrc: '/file/lyrics/huac.lrc'
        },
        {
            name: '东海老人',
            artist: '裁缝铺',
            url: 'https://music.163.com/song/media/outer/url?id=1991332315.mp3',
            cover: 'https://p2.music.126.net/OWbeXUGhGWJ-vwOXwHFNGg==/109951167987112081.jpg?param=90y90',
            lrc: '/file/lyrics/dhlr.lrc'
        },
        {
            name: 'Riptide',
            artist: 'Magdalena',
            url: 'https://music.163.com/song/media/outer/url?id=2013823506.mp3',
            cover: 'https://p1.music.126.net/yUN2AzA6aEKy2iEaMoIr3A==/109951168228081055.jpg?param=90y90',
            lrc: '/file/lyrics/ript.lrc'
        },
    ]
});