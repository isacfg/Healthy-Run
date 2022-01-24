
function playOnKeys() {
    // play main track
    if (!track1.isPlaying()) {
        track1.play();
        track1.setVolume(0.5);
        console.log('playing from keys');
    }
}

function playOnSetup() {
    if (!track1.isPlaying()) {
        track1.play();
        track1.setVolume(0.5);
        console.log('playing from setup');
    }
}



