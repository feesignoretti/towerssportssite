let videoSource = new Array();
videoSource[0] = 'assets/vids/0.mp4';
videoSource[1] = 'assets/vids/1.mp4';
videoSource[2] = 'assets/vids/2.mp4';
videoSource[3] = 'assets/vids/3.mp4';
videoSource[4] = 'assets/vids/4.mp4';
videoSource[5] = 'assets/vids/5.mp4';
videoSource[6] = 'assets/vids/6.mp4';
let i = 0; 
const videoCount = videoSource.length;
const element = document.getElementById("bgvid");

function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
}
document.getElementById('bgvid').addEventListener('ended', myHandler, false);

videoPlay(Math.floor(Math.random() * videoCount));
ensureVideoPlays();	

function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}

function ensureVideoPlays() {
    const video = document.getElementById('bgvid');

    if(!video) return;
    
    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}