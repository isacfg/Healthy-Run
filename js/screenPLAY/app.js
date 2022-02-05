let player;
let obstacles = [];
let score = 0;
let mBackground = [];
let obstIndex;

function screenPLAY() {
    // background
    mBackground.show();
    mBackground.update();

    // player functions
    player.show();
    player.update();
    // player.debug();
    afterDeath();

    // animations
    dinoGreenSprites.position.x = player.x;
    dinoGreenSprites.position.y = player.y;
    drawSprites();

    // obstacles loop and functions
    for (let i = obstacles.length - 1; i >= 0; i--) {

        obstacles[i].show();
        obstacles[i].update();
        // obstacles[i].debug();
        obstacles[i].hits(player);
        obstacles[i].freezes();
        // console.log('obstaculo ' + i + ' ' +  obstacles[i].speed);

        if (obstacles[i].offscreen()) {
            obstacles.splice(i, 1);
        }

        // enemies spawn
        if (frameCount % 80 == 0 && obstacles.length < 4) {
            obstacles.push(new Obstacles());
            // console.log('new obstacle');
        }

        //score detector
        if (obstacles[i].x < 180 && obstacles[i].x > 170 && player.freezes == false) {
            score++;
        }
    }

    //diseases 
    aleatoriedade();
    sickeness();

    // score text
    scoreText();
    scoreNumber();

    // clock
    // clock();
}