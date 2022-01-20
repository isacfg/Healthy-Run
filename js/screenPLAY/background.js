class BackgroundM {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0.2;
    }

    show() {
        image(land, this.x, this.y);
    }

    update() {
        // Draw the background, e move conforme a velocidade
        this.x -= this.speed;

        // Dectecta se o background saiu da tela e reinicia
        if (this.x <= land.width + 1366) {
            image(land, this.x + land.width, this.y, land.width);
            if (this.x <= -land.width) {
                this.x = 0;
            }
        }

        // se o jogador morrer o background para
        if (player.freezes == true) {
            this.speed = 0;
        }
    }

    offscreen() {
        if (this.x < 0) {
            return true;
        }
        else {
            return false
        }
    }
}
