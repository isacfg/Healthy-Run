
function resetObstacles() {
    obstacles.height = random(100, 180);
    obstacles.width = random(25, 75);
    obstacles.x = 1366;
    obstacles.y = 400;
    obstacles.speed = random(6, 8);
    obstacles.length = 0;
}


class Obstacles {
    constructor() {
        this.height = random(100, 180);
        this.width = random(25, 75);
        this.x = 1366;
        this.y = 400;
        this.speed = random(6, 8);
        this.collision = false;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);

    }

    update() {
        this.x -= this.speed;
    }

    offscreen() {
        if (this.x < -this.width) {
            return true;
        } else {
            return false;
        }
    }

    debug() {
        console.log(this.y, player.y);
        if (this.collision == true) {
            console.log('HIT');
        }
    }

    hits(player) {
        if (this.x + this.width / 2 > player.x - player.width / 2 && this.x - this.width / 2 < player.x + player.width / 2 && this.y + this.height / 2 > player.y - player.height / 2 && this.y - this.height / 2 < player.y + player.height / 2) {
            this.collision = true;
            return true;
        }
        this.collision = false;
        return false;

        // OLD COLISION SYSTEM
        // if (this.x + 50 > player.x && this.x < player.x && this.y + 50 > player.y && this.y < player.y + 50) {
        //     this.collision = true;
        //     return true;
        // }
        // this.collision = false;
        // return false;
    }

    freezes() {
        if (this.collision == true) {
            // player freezes
            player.x = player.x
            player.y = player.y
            player.gravity = 0;
            player.lift = 0;
            player.downForce = 0;
            player.velocity = 0;
            player.freezes = true;

            // obstacles stop
            for (var i = obstacles.length - 1; i >= 0; i--) {
                obstacles[i].speed = 0;
            }
        }
    }

}
