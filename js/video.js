'use strict'
let video = document.querySelector('.video-file');
const videoButton = document.querySelector('.video-desc-btn');
const videoDescrip = document.querySelector('.video-desc')
videoButton.addEventListener('click', function() {
    videoDescrip.style.display = "none";
    video.setAttribute('controls', '');
    video.play();
});

