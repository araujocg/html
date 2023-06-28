var muteIcon = document.getElementById('icon-som');
var audio = new Howl({
  src: ['audio/FiveNightsAtFreddysSong-Final.mp3']
});
var playIcon = document.getElementById('icon-play');
var num = 0;
playIcon.addEventListener('click', function() {
  if (num%2==0) {
    audio.play();
    playIcon.src
    num++;
  } else {
    audio.pause();
    num++
  }
}
)
muteIcon.addEventListener('click', function() {
  if (audio.play()) {
    audio.muted = true;
  } else {
    audio.muted = true;
  }
});
