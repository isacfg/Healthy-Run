
function backgroundMusic() {
    musicIndex = int(random(0, tracks.length));

    if (isMusicPlaying == false) { // if the track is not playing
        tracks[musicIndex].play();
        if (musicIndex == 2 || musicIndex == 1) {
            tracks[musicIndex].setVolume(0.2);
        }
        else {
            tracks[musicIndex].setVolume(0.3);
        }
        userStartAudio(); // start the music
        isMusicPlaying = true;
        // console.log('playing ' + musicIndex);
    }
    // else {
    //     console.log('already playing');
    // }
}

function stopMusic() {

    if (isMusicPlaying == false) {
        tracks[musicIndex].stop();
        // console.log('stopped');
    }
}

// function playOnSetup() {
//     if (!tracks[musicIndex].isPlaying()) {
//         tracks[musicIndex].play();
//         tracks[musicIndex].setVolume(0.5);
//         console.log('playing from setup');
//     }
// }



