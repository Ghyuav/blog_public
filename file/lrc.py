from requests import get
songid = input('url>').split('=')[1].split('&')[0]
data = get('http://music.163.com/api/song/media?id='+songid).text
lrc = eval(data)['lyric']
with open(input('name>')+'.lrc', 'w', encoding='utf-8') as f:
    f.write(lrc)
input(f'http://music.163.com/song/media/outer/url?id={songid}.mp3')
