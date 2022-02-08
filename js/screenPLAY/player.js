
function resetPlayer() {
    player.x = 200;
    player.y = 375;
    player.gravity = 0.8;
    player.lift = -18;
    player.velocity = 0;
    player.downForce = 15;
    player.collision = false;
    player.freezes = false;
    player.goingDown = false;
    player.hitStop = false;
    gameOverMenu = false;

}

class Player {
    constructor() {
        this.x = 200;
        this.y = 375;
        this.height = 55;
        this.width = 55;
        this.gravity = 0.8;
        this.lift = -18;
        this.velocity = 0;
        this.downForce = 15;
        this.freezes = false;
        this.goingDown = false;
        this.hitStop = false;
    }

    update() {
        this.velocity = this.velocity + this.gravity;
        this.y = this.y + this.velocity;

        if (this.y > 369) {
            this.y = 370;
            this.velocity = 0;
        }

    }

    show() {
        // rect
        // fill(255);
        // rect(this.x, this.y, this.width, this.height);

        // animations
        if (dinoSelector == 1) { // green dino
            if (this.y == 370 && this.goingDown == false && this.freezes == false) { // running
                dinoGreenSprites.changeAnimation('run');
                dinoGreenSprites.animation.play();
            }
            else if (this.y < 370 && this.goingDown == false && this.freezes == false) { // jumping
                dinoGreenSprites.changeAnimation('jump');
                dinoGreenSprites.animation.play();
            }
            else if (this.goingDown == true && this.freezes == false) { // falling or down
                dinoGreenSprites.changeAnimation('down');
                dinoGreenSprites.animation.play();
            }
            else if (this.freezes == true) {
                dinoGreenSprites.changeAnimation('hit'); // hit
                dinoGreenSprites.animation.play();
            }
        }
        else if (dinoSelector == 2) { // blue dino
            if (this.y == 370 && this.goingDown == false && this.freezes == false) { // running
                dinoBlueSprites.changeAnimation('run');
                dinoBlueSprites.animation.play();
            }
            else if (this.y < 370 && this.goingDown == false && this.freezes == false) { // jumping
                dinoBlueSprites.changeAnimation('jump');
                dinoBlueSprites.animation.play();
            }
            else if (this.goingDown == true && this.freezes == false) { // falling or down
                dinoBlueSprites.changeAnimation('down');
                dinoBlueSprites.animation.play();
            }
            else if (this.freezes == true) {
                dinoBlueSprites.changeAnimation('hit'); // hit
                dinoBlueSprites.animation.play();
            }
        }
        else if (dinoSelector == 3) { // red dino
            if (this.y == 370 && this.goingDown == false && this.freezes == false) { // running
                dinoRedSprites.changeAnimation('run');
                dinoRedSprites.animation.play();
            }
            else if (this.y < 370 && this.goingDown == false && this.freezes == false) { // jumping
                dinoRedSprites.changeAnimation('jump');
                dinoRedSprites.animation.play();
            }
            else if (this.goingDown == true && this.freezes == false) { // falling or down
                dinoRedSprites.changeAnimation('down');
                dinoRedSprites.animation.play();
            }
            else if (this.freezes == true) {
                dinoRedSprites.changeAnimation('hit'); // hit
                dinoRedSprites.animation.play();
            }
        }
        else if (dinoSelector == 4) { // yellow dino
            if (this.y == 370 && this.goingDown == false && this.freezes == false) { // running
                dinoYellowSprites.changeAnimation('run');
                dinoYellowSprites.animation.play();
            }
            else if (this.y < 370 && this.goingDown == false && this.freezes == false) { // jumping
                dinoYellowSprites.changeAnimation('jump');
                dinoYellowSprites.animation.play();
            }
            else if (this.goingDown == true && this.freezes == false) { // falling or down
                dinoYellowSprites.changeAnimation('down');
                dinoYellowSprites.animation.play();
            }
            else if (this.freezes == true) {
                dinoYellowSprites.changeAnimation('hit'); // hit
                dinoYellowSprites.animation.play();
            }
        }
    }

    up() {
        if (this.y > 340) {
            this.velocity = this.velocity + this.lift;
            this.goingDown = false;

            if (gameOverMenu == false) {
                // jump sound
                jumpSFX.setVolume(0.2);
                jumpSFX.play();
            }
        }
    }

    down() {
        this.velocity = this.velocity + this.downForce;
        this.goingDown = true;
    }

    debug() {
        console.log(this.x, this.y, this.velocity);
    }
}