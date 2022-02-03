
function backgroundMusic() {
    index = int(random(0, tracks.length));

    if (!tracks[index].isPlaying()) { // if the track is not playing
        tracks[index].play();
        console.log(index)
        if (index == 2 || index == 1) {
            tracks[index].setVolume(0.2);
        }
        else {
            tracks[index].setVolume(0.3);
        }
        userStartAudio(); // start the track
        // console.log('playing');
    }
}

function stopMusic() {

    if (tracks[index].isPlaying()) {
        tracks[index].stop();
        // console.log('stopped');
    }
}

// function playOnSetup() {
//     if (!tracks[index].isPlaying()) {
//         tracks[index].play();
//         tracks[index].setVolume(0.5);
//         console.log('playing from setup');
//     }
// }



