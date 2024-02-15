
var x = document.getElementById("myaudio");

function playPause() {
  if (x.paused) {
    x.play();
    document.startViewTransition(() => { document.getElementById("control").src = "img/player/pause.png"});
  } else {
    x.pause();
    document.startViewTransition(() => { document.getElementById("control").src = "img/player/play.png"});
  }
}