
function resetPlayer() {
    player.x = 200;
    player.y = 375;
    player.gravity = 0.8;
    player.lift = -18;
    player.velocity = 0;
    player.downForce = 30;
    player.collision = false;
    player.freezes = false;
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
        this.freezes = false
    }

    update() {
        this.velocity = this.velocity + this.gravity;
        this.y = this.y + this.velocity;

        if (this.y > 375) {
            this.y = 375;
            this.velocity = 0;
        }

    }

    up() {
        if (this.y > 340) {
            this.velocity = this.velocity + this.lift;
        }
    }

    down() {
        this.velocity = this.velocity + this.downForce;
    }

    show() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    debug() {
        console.log(this.x, this.y, this.velocity);
    }
}