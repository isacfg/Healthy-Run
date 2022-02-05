
function resetPlayer() {
    player.x = 200;
    player.y = 375;
    player.gravity = 0.8;
    player.lift = -18;
    player.velocity = 0;
    player.downForce = 30;
    player.collision = false;
    player.freezes = false;
    player.goingDown = false;
    player.hitStop = false;

}

class Player {
    constructor() {
        this.x = 200;
        this.y = 375;
        this.height = 50; // precisa ser alterado pra o valor do sprite
        this.width = 50; // precisa ser alterado pra o valor do sprite
        this.gravity = 0.8;
        this.lift = -18;
        this.velocity = 0;
        this.downForce = 30;
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

    up() {
        if (this.y > 340) {
            this.velocity = this.velocity + this.lift;
            this.goingDown = false;

            // jump sound
            jumpSFX.setVolume(0.2); 
            jumpSFX.play();
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