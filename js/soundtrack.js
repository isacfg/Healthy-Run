
function backgroundMusic() {
 
    if (!track1.isPlaying()) { // if the track is not playing
        // track1.play();
        track1.setVolume(0.4);
        userStartAudio(); // start the track
        // console.log('playing');
    }
}

function stopMusic() {

    if (track1.isPlaying()) {
        track1.stop();
        // console.log('stopped');
    }
}

// function playOnSetup() {
//     if (!track1.isPlaying()) {
//         track1.play();
//         track1.setVolume(0.5);
//         console.log('playing from setup');
//     }
// }



