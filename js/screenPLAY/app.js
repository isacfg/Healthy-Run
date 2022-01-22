var player;
var obstacles = [];
var score = 0;
var mBackground = [];

function screenPLAY() {
    // background
    mBackground.show();
    mBackground.update();

    // player functions
    player.show();
    player.update();
    // player.debug();
    afterDeath();

    // obstacles loop and functions
    for (var i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].show();
        obstacles[i].update();
        // obstacles[i].debug();
        obstacles[i].hits(player);
        obstacles[i].freezes();

        if (obstacles[i].offscreen()) {
            obstacles.splice(i, 1);
        }

        // enemies spawn
        if (frameCount % 80 == 0 && obstacles.length < 3) {
            obstacles.push(new Obstacles());
            // console.log('new obstacle');
        }

        //score detector
        if (obstacles[i].x < 180 && obstacles[i].x > 170 && player.freezes == false) {
            score++;
        }
    }

    // score text
    scoreText();
    scoreNumber();

    // clock
    // clock();
}