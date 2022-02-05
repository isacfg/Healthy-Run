
function resetObstacles() {
    obstacles.x = 1400;
    obstacles.y = 400;
    obstacles.speed = random(6, 8);
    obstacles.length = 0;
}


class Obstacles {
    constructor() {
        this.x = 1400;
        this.y = 400;
        this.speedBase = random(6, 8);
        this.collision = false;
        this.obstcTypeIndex = int(random(0, obstacleTypes.length));

        // speed multiplier for each obstacle based on player's score
        if (score == 0) {
            this.speed = this.speedBase;
        }
        else if (score != 0) {
            this.speed = this.speedBase + score / 20;
        }

        // width and height of obstacles
        if (this.obstcTypeIndex == 0 || this.obstcTypeIndex == 1) {
            this.width = 80;
            this.height = 160;
        }
        else if (this.obstcTypeIndex == 2) {
            this.width = 40;
            this.height = 80;
        }
        else if (this.obstcTypeIndex == 3 || this.obstcTypeIndex == 4) {
            this.width = 40;
            this.height = 160;
        }
        else if (this.obstcTypeIndex == 5 || this.obstcTypeIndex == 6) {
            this.width = 40;
            this.height = 240;
        }
    }


    show() {

        // rectangular obstacles
        // fill(255);
        // rectMode(CENTER);
        // rect(this.x, this.y, this.width, this.height);

        // obstacles sprites
        imageMode(CENTER);
        image(obstacleTypes[this.obstcTypeIndex], this.x, this.y);
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
        // console.log(this.y, player.y);
        // if (this.collision == true) {
        //     console.log('HIT');
        // }
        // console.log(this.speed);
    }

    hits(player) {

        if (this.x + this.width / 2 > player.x - player.width / 2 && this.x - this.width / 2 < player.x + player.width / 2 && this.y + this.height / 2 > player.y - player.height / 2 && this.y - this.height / 2 < player.y + player.height / 2) {
            this.collision = true;
            return true;
        }
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

            // hit sound effect
            if (!hitSFX.isPlaying() && player.hitStop == false) {
                hitSFX.setVolume(0.2);
                hitSFX.play();
                player.hitStop = true;
            }
        }
    }

}
