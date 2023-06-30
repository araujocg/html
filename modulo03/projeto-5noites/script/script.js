var muteIcon = document.getElementById('icon-som');
var audio = document.getElementById('music')
var playIcon = document.getElementById('icon-play');
var num = 0;
playIcon.addEventListener('click', function() {
  if (num%2==0) {
      audio.play();
      playIcon.src = "imagens/pause-pq.png";
      num++;
  } else {
    audio.pause();
    playIcon.src = "imagens/play-pq.png";
    num++;
  }
}
)
muteIcon.addEventListener('click', function() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.src = "imagens/music-player-pq.png";
  } else {
    audio.muted = true;
    muteIcon.src = "imagens/mute-pq.png";
  }
});
