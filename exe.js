var audio = new Audio('exe.mp3');

function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
  audio.currentTime = 0;
}

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ':' + seconds;
}

function updateDuration() {
  var durationElement = document.getElementById('duration');
  var currentTimeElement = document.getElementById('currentTime');
  var progressBar = document.getElementById('progressBar');
  var totalTimeElement = document.getElementById('totalTime');

  audio.addEventListener('timeupdate', function () {
    var currentTime = formatTime(audio.currentTime);
    var duration = formatTime(audio.duration);
    var progress = (audio.currentTime / audio.duration) * 100;

    currentTimeElement.textContent = currentTime;
    progressBar.value = progress;
    totalTimeElement.textContent = duration;
  });

  audio.addEventListener('ended', function () {
    currentTimeElement.textContent = '0:00';
    progressBar.value = 0;
  });
}
var audio = new Audio('exe.mp3');
updateDuration();

function NextPage() {
  window.location.href = "form.html";
}
function backpage() {
  window.location.href = "exe2.html"; // Ganti "next_page.html" dengan URL halaman tujuan yang diinginkan
}