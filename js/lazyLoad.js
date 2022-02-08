let musicIndex;

function lazyLoad() {
    // load background music
    musicIndex = int(random(0, 5));

    if (musicIndex == 0) {
        tracks[0] = loadSound('assets/soundtrack/6 A.M. Riverside Town (Copyright Free).mp3', backgroundMusic);
        console.log('loaded track 0');
    }
    else if (musicIndex == 1) {
        tracks[1] = loadSound('assets/soundtrack/Since 2 A.M. (Copyright Free).mp3', backgroundMusic);
        console.log('loaded track 1');
    }
    else if (musicIndex == 2) {
        tracks[2] = loadSound('assets/soundtrack/The Past (Copyright Free).mp3', backgroundMusic);
        console.log('loaded track 2');
    }
    else if (musicIndex == 3) {
        tracks[3] = loadSound('assets/soundtrack/Unwavering Emotion.mp3', backgroundMusic);
        console.log('loaded track 3');
    }
    console.log('finished music');

    // load screens
    instScreen = loadImage('assets/screens/instructions.png');
    credScreen = loadImage('assets/screens/credits.png');
    playgroundImg = loadImage('assets/screens/playground.png');
    selectionScreen = loadImage('assets/screens/skinSelect.png');
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
    // green 1; blue 2; red 3; yellow 4
    //load green dino
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
        'assets/sprites/green/green_standing04.png',
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
    // laod blue dino
    dinoBRun = loadAnimation(
        'assets/sprites/blue/blue_running01.png',
        'assets/sprites/blue/blue_running02.png',
        'assets/sprites/blue/blue_running03.png',
        'assets/sprites/blue/blue_running04.png',
        'assets/sprites/blue/blue_running05.png',
        'assets/sprites/blue/blue_running06.png',
    )
    dinoBJump = loadAnimation(
        'assets/sprites/blue/blue_jump01.png',
        'assets/sprites/blue/blue_jump02.png',
    )
    dinoBIdle = loadAnimation(
        'assets/sprites/blue/blue_standing01.png',
        'assets/sprites/blue/blue_standing02.png',
        'assets/sprites/blue/blue_standing03.png',
        'assets/sprites/blue/blue_standing04.png',
    )
    dinoBDown = loadAnimation(
        'assets/sprites/blue/blue_down01.png',
        'assets/sprites/blue/blue_down02.png',
        'assets/sprites/blue/blue_down03.png',
        'assets/sprites/blue/blue_down04.png',
        'assets/sprites/blue/blue_down05.png',
        'assets/sprites/blue/blue_down06.png',
        'assets/sprites/blue/blue_down07.png',
    )
    dinoBHit = loadAnimation(
        'assets/sprites/blue/blue_hit01.png',
        'assets/sprites/blue/blue_hit02.png',
        'assets/sprites/blue/blue_hit03.png',
    )
    // load red dino
    dinoRRun = loadAnimation(
        'assets/sprites/red/red_running01.png',
        'assets/sprites/red/red_running02.png',
        'assets/sprites/red/red_running03.png',
        'assets/sprites/red/red_running04.png',
        'assets/sprites/red/red_running05.png',
        'assets/sprites/red/red_running06.png',
    )
    dinoRJump = loadAnimation(
        'assets/sprites/red/red_jump01.png',
        'assets/sprites/red/red_jump02.png',
    )
    dinoRIdle = loadAnimation(
        'assets/sprites/red/red_standing01.png',
        'assets/sprites/red/red_standing02.png',
        'assets/sprites/red/red_standing03.png',
        'assets/sprites/red/red_standing04.png',
    )
    dinoRDown = loadAnimation(
        'assets/sprites/red/red_down01.png',
        'assets/sprites/red/red_down02.png',
        'assets/sprites/red/red_down03.png',
        'assets/sprites/red/red_down04.png',
        'assets/sprites/red/red_down05.png',
        'assets/sprites/red/red_down06.png',
        'assets/sprites/red/red_down07.png',
    )
    dinoRHit = loadAnimation(
        'assets/sprites/red/red_hit01.png',
        'assets/sprites/red/red_hit02.png',
        'assets/sprites/red/red_hit03.png',
    )
    // load yellow dino
    dinoYRun = loadAnimation(
        'assets/sprites/yellow/yellow_running01.png',
        'assets/sprites/yellow/yellow_running02.png',
        'assets/sprites/yellow/yellow_running03.png',
        'assets/sprites/yellow/yellow_running04.png',
        'assets/sprites/yellow/yellow_running05.png',
        'assets/sprites/yellow/yellow_running06.png',
    )
    dinoYJump = loadAnimation(
        'assets/sprites/yellow/yellow_jump01.png',
        'assets/sprites/yellow/yellow_jump02.png',
    )
    dinoYIdle = loadAnimation(
        'assets/sprites/yellow/yellow_standing01.png',
        'assets/sprites/yellow/yellow_standing02.png',
        'assets/sprites/yellow/yellow_standing03.png',
        'assets/sprites/yellow/yellow_standing04.png',
    )
    dinoYDown = loadAnimation(
        'assets/sprites/yellow/yellow_down01.png',
        'assets/sprites/yellow/yellow_down02.png',
        'assets/sprites/yellow/yellow_down03.png',
        'assets/sprites/yellow/yellow_down04.png',
        'assets/sprites/yellow/yellow_down05.png',
        'assets/sprites/yellow/yellow_down06.png',
        'assets/sprites/yellow/yellow_down07.png',
    )
    dinoYHit = loadAnimation(
        'assets/sprites/yellow/yellow_hit01.png',
        'assets/sprites/yellow/yellow_hit02.png',
        'assets/sprites/yellow/yellow_hit03.png',
    )

    greenSelect = loadImage('assets/sprites/skinSelection/green.png');
    blueSelect = loadImage('assets/sprites/skinSelection/blue.png');
    redSelect = loadImage('assets/sprites/skinSelection/red.png');
    yellowSelect = loadImage('assets/sprites/skinSelection/yellow.png');
}
console.log('finished sprites');
