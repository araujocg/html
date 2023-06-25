var muteIcon = document.getElementById('toggleButton');
var audio = document.getElementById('meuAudio'); // Adicione o ID do elemento de áudio

muteIcon.addEventListener('click', function() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.classList.remove('muted');
  } else {
    audio.muted = true;
    muteIcon.classList.add('muted');
  }
});