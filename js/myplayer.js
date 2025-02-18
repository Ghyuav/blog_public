

// random music
function random_music() {
let music_data
fetch('https://api.g-haoyu.top/randommusic')
.then(response => {
     // 检查响应状态
     if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
     }
     // 将响应数据解析为 JSON 格式
     return response.json();
 })
.then(data => {
     // 处理解析后的数据
     music_data = data;
     console.log(data);
     let musicObject =music_data;
     document.getElementById('music_player_img_bg').src=musicObject.pic
     document.getElementById('music_player_img').src=musicObject.pic
     document.getElementById('myaudio').src=musicObject.url
     document.getElementById('music_player_title').innerHTML=musicObject.name
     document.getElementById('music_player_artist').innerHTML=musicObject.artist
 })
.catch(error => {
     // 处理请求过程中出现的错误
     console.error('Fetch error:', error);
 });
}
 
var x = document.getElementById("myaudio");

function playPause() {
  if (x.paused) {
    x.play();
    if (document.startViewTransition) { 
      document.startViewTransition(() => { document.getElementById("control").src = "img/player/pause.png"});
    } else {
      document.getElementById("control").src = "img/player/pause.png"
    }
  } else {
    x.pause()
    if (document.startViewTransition) { 
      document.startViewTransition(() => { document.getElementById("control").src = "img/player/play.png"});
    } else {
      document.getElementById("control").src = "img/player/play.png"
    }
  }
}

random_music()