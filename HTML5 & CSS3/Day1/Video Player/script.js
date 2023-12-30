///////////////
// Selectors //
///////////////

const video = document.querySelector("video");
const timeRange = document.getElementById("timeRange");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const soundButton = document.getElementById("soundBtn");
const soundRange = document.getElementById("soundRange");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const speedBtn = document.getElementById("speedBtn");
const fullScreenBtn = document.getElementById("fullscreenBtn");

///////////////
// Functions //
///////////////
function handlePlay() {
  video.play();
}

function handlePause() {
  video.pause();
}

function handleTimeUpdate() {
  const current = Math.floor(video.currentTime);
  const total = Math.floor(video.duration);
  const progress = (current / total) * 100;

  timeRange.value = progress;
}

function updateTime() {
  const progress = timeRange.value / 100;
  video.currentTime = progress * video.duration;
}

function handleUpdateVolume() {
  const volume = soundRange.value / 100;
  video.volume = volume;

  if (volume >= 0.7) {
    soundButton.innerText = "🔊";
  } else if (volume >= 0.4) {
    soundButton.innerText = "🔉";
  } else if (volume === 0) {
    soundButton.innerText = "🔇";
  } else {
    soundButton.innerText = "🔈";
  }
}

function handleSound() {
  if (video.muted) {
    video.muted = false;
    soundButton.innerText = "🔊";
    soundRange.value = video.volume * 100;
  } else {
    video.muted = true;
    soundButton.innerText = "🔇";
    soundRange.value = 0;
  }
}

function handleBackBtn() {
  video.currentTime -= 2;
}

function handleForwardBtn() {
  video.currentTime += 2;
}

function handleSpeedBtn() {
  if (video.playbackRate === 1) {
    video.playbackRate = 1.5;
    speedBtn.innerText = "1.5x";
  } else if (video.playbackRate === 1.5) {
    video.playbackRate = 2;
    speedBtn.innerText = "2x";
  } else if (video.playbackRate === 2) {
    video.playbackRate = 0.5;
    speedBtn.innerText = "0.5x";
  } else {
    video.playbackRate = 1;
    speedBtn.innerText = "1x";
  }
}

function handleFullScreenBtn() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

function handleEnded() {
  video.currentTime = 0;
  video.play();
}

/////////////////////
// Event Listeners //
/////////////////////
playButton.addEventListener("click", handlePlay);
pauseButton.addEventListener("click", handlePause);
soundButton.addEventListener("click", handleSound);
backBtn.addEventListener("click", handleBackBtn);
forwardBtn.addEventListener("click", handleForwardBtn);
speedBtn.addEventListener("click", handleSpeedBtn);
fullScreenBtn.addEventListener("click", handleFullScreenBtn);

timeRange.addEventListener("input", updateTime);
soundRange.addEventListener("input", handleUpdateVolume);

video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("ended", handleEnded);
