from selenium import webdriver
from bs4 import BeautifulSoup
from time import sleep
from requests import get


def get_data(songid):
    output = ''
    driver = webdriver.Chrome()
    for item in songid:
        data = get('http://music.163.com/api/song/media?id='+item).text
        lrc = eval(data)['lyric']
        save_name = input('name>')
        with open('lyrics/'+save_name+'.lrc', 'w', encoding='utf-8') as f:
            f.write(lrc)
        url = 'https://music.163.com/outchain/player?type=2&id='+item
        driver.get(url)
        sleep(2)
        print('get page_source')
        a = driver.page_source

        bs = BeautifulSoup(a,'html.parser')
        cover = 'https:'+str(bs.find(id='cover')).split('"')[3]
        name = str(bs.find(id='title')).split('>')[1].split('<')[0]
        artist = str(bs.find(id='title')).split(' ')[-1].split('<')[0]
        songurl = f'https://music.163.com/song/media/outer/url?id={item}.mp3'
        lrc_path = '/file/lyrics/'+save_name+'.lrc'

        output += r'''
                {
                    name: '%s',
                    artist: '%s',
                    url: '%s',
                    cover: '%s',
                    lrc: '%s'
                },''' % (name,artist,songurl,cover,lrc_path)
    return output

songid = []
while True:
    text = input('url>')
    if text == 'ok':
        break
    else:
        songid.append(text.split('=')[1].split('&')[0])
print(get_data(songid))
input('ok')