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
    gameOver();

    // draw sprites and update location based on player.x and player.y
    if (dinoSelector == 1) { // green dino
        dinoGreenSprites.position.x = player.x;
        dinoGreenSprites.position.y = player.y;

        // dinoBlueSprites.remove();
        // dinoRedSprites.remove();
        // dinoYellowSprites.remove();
        dinoBlueSprites.position.x = -100;
        dinoBlueSprites.position.y = -100;
        dinoRedSprites.position.x = -100;
        dinoRedSprites.position.y = -100;
        dinoYellowSprites.position.x = -100;
        dinoYellowSprites.position.y = -100;
        drawSprites();
    }
    else if (dinoSelector == 2) { // blue dino
        dinoBlueSprites.position.x = player.x;
        dinoBlueSprites.position.y = player.y;

        // dinoGreenSprites.remove();
        // dinoRedSprites.remove();
        // dinoYellowSprites.remove();
        dinoGreenSprites.position.x = -100;
        dinoGreenSprites.position.y = -100;
        dinoRedSprites.position.x = -100;
        dinoRedSprites.position.y = -100;
        dinoYellowSprites.position.x = -100;
        dinoYellowSprites.position.y = -100;
        drawSprites();
    }
    else if (dinoSelector == 3) { // red dinos
        dinoRedSprites.position.x = player.x;
        dinoRedSprites.position.y = player.y;

        // dinoGreenSprites.remove();
        // dinoBlueSprites.remove();
        // dinoYellowSprites.remove();
        dinoGreenSprites.position.x = -100;
        dinoGreenSprites.position.y = -100;
        dinoBlueSprites.position.x = -100;
        dinoBlueSprites.position.y = -100;
        dinoYellowSprites.position.x = -100;
        dinoYellowSprites.position.y = -100;
        drawSprites();
    }
    else if (dinoSelector == 4) { // yellow dino
        dinoYellowSprites.position.x = player.x;
        dinoYellowSprites.position.y = player.y;

        // dinoGreenSprites.remove();
        // dinoBlueSprites.remove();
        // dinoRedSprites.remove();
        dinoGreenSprites.position.x = -100;
        dinoGreenSprites.position.y = -100;
        dinoBlueSprites.position.x = -100;
        dinoBlueSprites.position.y = -100;
        dinoRedSprites.position.x = -100;
        dinoRedSprites.position.y = -100;
        drawSprites();
    }

    // obstacles loop and functions
    for (let i = obstacles.length - 1; i >= 0; i--) {

        obstacles[i].show();
        obstacles[i].update();
        // obstacles[i].debug();
        obstacles[i].hits(player);
        obstacles[i].freezes();
        // console.log(`obstacle: ${i} speed: ${obstacles[i].speed}`);

        if (obstacles[i].offscreen() && obstacles.length > 0) {
            obstacles.splice(i, 1);
        }

        // enemies spawn
        if ((frameCount % 80 == 0 && obstacles.length < 3)) {
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