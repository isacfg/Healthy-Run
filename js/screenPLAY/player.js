
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
}

class Player {
    constructor() {
        this.x = 200;
        this.y = 375;
        this.height = 50;
        this.width = 50;
        this.gravity = 0.8;
        this.lift = -18;
        this.velocity = 0;
        this.downForce = 30;
        this.freezes = false;
        this.goingDown = false;
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
        if (this.y == 370 && this.goingDown == false && this.freezes == false) {
            dinoGreenSprites.changeAnimation('run');
            dinoGreenSprites.animation.play();
        }
        else if (this.y < 370 && this.goingDown == false && this.freezes == false) {
            dinoGreenSprites.changeAnimation('jump');
            dinoGreenSprites.animation.play();
        }
        else if (this.goingDown == true && this.freezes == false) {
            dinoGreenSprites.changeAnimation('down');
            dinoGreenSprites.animation.play();
        }
        else if (this.freezes == true) {
            dinoGreenSprites.changeAnimation('hit');
            dinoGreenSprites.animation.play();
        }
    }

    up() {
        if (this.y > 340) {
            this.velocity = this.velocity + this.lift;
            this.goingDown = false;
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