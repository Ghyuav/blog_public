
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
    x.pause();
    if (document.startViewTransition) { 
      document.startViewTransition(() => { document.getElementById("control").src = "img/player/play.png"});
    } else {
      document.getElementById("control").src = "img/player/play.png"
    }
  }
}