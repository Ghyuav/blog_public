from bs4 import BeautifulSoup
from requests import get
from loguru import logger
from fake_useragent import UserAgent


true = True

output = ''

def main(ids):
    global output
    for id in ids:
        try:
            
            logger.info('id:'+id)
            logger.info('获取页面')
            ua = UserAgent()
            url = f"https://music.163.com/song?id={id}" 
            headers = {
                "User-Agent":  ua.random,

            } 
            response = get(url=url,headers=headers) 
            logger.info('解析中')
            a = response.text 
            bs = BeautifulSoup(a,'html.parser')
            contents = []
            for i in bs.find_all('meta'):
                try:
                    i['property']
                    contents.append(i['content'])
                except:
                    pass
            title = contents[1]
            artist = contents[9]
            album = contents[10]
            img_url = contents[3]
            save_name = f'{title} - {artist}'.replace('/',' ')

            logger.info(f'''
    -----歌曲信息-----
    歌曲名:{title}
    作曲家:{artist}
    专辑:{album}''')

            # 歌词
            logger.info('下载歌词')
            data = get('https://music.163.com/api/song/media?id='+id).text
            try:
                lrc = eval(data)['lyric']
                with open('lyrics\\'+save_name+'.lrc', 'w', encoding='utf-8') as f:
                    f.write(lrc)
                logger.success('歌词下载成功')
            except:
                logger.info('无歌词')
            songurl = f'https://music.163.com/song/media/outer/url?id={id}.mp3'
            lrc_path = '/file/lyrics/'+save_name+'.lrc'
        except Exception as e:
            logger.error(str(e))
            logger.error('失败')


        output += r'''
                    {
                        name: '%s',
                        artist: '%s',
                        url: '%s',
                        cover: '%s',
                        lrc: '%s'
                    },''' % (title,artist,songurl,img_url,lrc_path)
    return output

songid = []
while True:
    text = input('url>')
    if text == 'ok':
        break
    else:
        songid.append(text.split('=')[1].split('&')[0])
print(main(songid))
input('ok')