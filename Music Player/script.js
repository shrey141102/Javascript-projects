document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    const playPauseButton = document.getElementById('playPause');
    const volumeSlider = document.getElementById('volume');

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
    });
});
