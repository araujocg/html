var muteIcon = document.getElementById('btn');
var audio = document.getElementById('meuAudio'); 
muteIcon.addEventListener('click', function() {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
});