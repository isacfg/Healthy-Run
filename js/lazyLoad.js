function lazyLoad() {
    // load background music
    tracks[0] = loadSound('assets/soundtrack/6 A.M. Riverside Town (Copyright Free).mp3', backgroundMusic);
    tracks[1] = loadSound('assets/soundtrack/Since 2 A.M. (Copyright Free).mp3', backgroundMusic);
    tracks[2] = loadSound('assets/soundtrack/The Past (Copyright Free).mp3', backgroundMusic);
    tracks[3] = loadSound('assets/soundtrack/Unwavering Emotion.mp3', backgroundMusic);
    console.log('finished music');

    // load screens
    instScreen = loadImage('assets/screens/instructions.png');
    credScreen = loadImage('assets/screens/credits.png');
    playgroundImg = loadImage('assets/screens/playground.png');
    console.log('finished screens');

    // load sfx
    jumpSFX = loadSound('assets/sfx/jump.mp3');
    hitSFX = loadSound('assets/sfx/hit.mp3');
    // coinSFX = loadSound('assets/sfx/coins.mp3');
    console.log('finished sfx');

    // load obstacles
    obstacleTypes[0] = loadImage('assets/obstacles/DoubleOneDarkDoubleOneBox.png');
    obstacleTypes[1] = loadImage('assets/obstacles/DoubleOneRedDoubleOneBox.png');
    obstacleTypes[2] = loadImage('assets/obstacles/OneBox.png');
    obstacleTypes[3] = loadImage('assets/obstacles/OneDarkOneBox.png');
    obstacleTypes[4] = loadImage('assets/obstacles/OneRedOneBox.png');
    obstacleTypes[5] = loadImage('assets/obstacles/TwoDarkOneBox.png');
    obstacleTypes[6] = loadImage('assets/obstacles/TwoRedOneBox.png');
    console.log('finished obstacles');

    // load sprites using p5.play library
    dinoGRun = loadAnimation(
        'assets/sprites/green/green_running01.png',
        'assets/sprites/green/green_running02.png',
        'assets/sprites/green/green_running03.png',
        'assets/sprites/green/green_running04.png',
        'assets/sprites/green/green_running05.png',
        'assets/sprites/green/green_running06.png',
    )
    dinoGJump = loadAnimation(
        'assets/sprites/green/green_jump01.png',
        'assets/sprites/green/green_jump02.png',
    )
    dinoGIdle = loadAnimation(
        'assets/sprites/green/green_standing01.png',
        'assets/sprites/green/green_standing02.png',
        'assets/sprites/green/green_standing03.png',
    )
    dinoGDown = loadAnimation(
        'assets/sprites/green/green_down01.png',
        'assets/sprites/green/green_down02.png',
        'assets/sprites/green/green_down03.png',
        'assets/sprites/green/green_down04.png',
        'assets/sprites/green/green_down05.png',
        'assets/sprites/green/green_down06.png',
        'assets/sprites/green/green_down07.png',
    )
    dinoGHit = loadAnimation(
        'assets/sprites/green/green_hit01.png',
        'assets/sprites/green/green_hit02.png',
        'assets/sprites/green/green_hit03.png',
    )
    console.log('finished sprites');
}