var arrowimg;

// arrow default position
var arrowX = 590;
var arrowY = 162;

let option = 1;
let tela = 0;

var optionOver = 1;


function arrow() {
    image(arrowimg, arrowX, arrowY, 28, 32);
}

// moving arrow
function keyPressed() {

    if (keyCode === 80) { // p
        stopMusic();
        tela = 9; // playground
    }

    if (keyCode === DOWN_ARROW && tela === 0 && arrowX == 590 && arrowY === 162) {
        arrowY = 234; // x and y position INSTRUÇÕES
        arrowX = 540; // x and y position INSTRUÇÕES
        option = option + 1;
    }
    else if (keyCode === DOWN_ARROW && tela === 0 && arrowX == 540 && arrowY === 234) {
        arrowY = 306; // x and y position CRÉDITOS
        arrowX = 565; // x and y position CRÉDITOS
        option = option + 1;
    }
    else if (keyCode === UP_ARROW && tela === 0 && arrowX == 565 && arrowY === 306) {
        arrowY = 234; // x and y position INSTRUÇÕES
        arrowX = 540; // x and y position INSTRUÇÕES
        option = option - 1;
    }
    else if (keyCode === UP_ARROW && tela === 0 && arrowX == 540 && arrowY === 234) {
        arrowY = 162; // x and y position JOGAR
        arrowX = 590; // x and y position JOGAR
        option = option - 1;
    }


    // screen selection
    if (keyCode === ENTER && option == 1 && tela === 0) {
        tela = 1;
        player = new Player();
        mBackground = new BackgroundM();

        if (frameCount % 80 != 0) {
            obstacles.push(new Obstacles());
            // console.log('new obstacle ENTER')
        }
    }
    else if (keyCode === ENTER && option == 2 && tela === 0) {
        tela = 2;
    }
    else if (keyCode === ENTER && option == 3 && tela === 0) {
        tela = 3;
    }
    else if (keyCode === 27) { // esc
        tela = 0;

        //player reset
        resetPlayer();

        //obstacles reset
        resetObstacles();

        //score reset
        resetScore();

    }

    if ((keyCode === UP_ARROW || keyCode === 32) && tela === 1) { // spacebar
        player.up();
        // console.log("spacebar");
    }

    if (keyCode === DOWN_ARROW && tela === 1) {
        player.down();
    }

    // game over arrow selection
    if (player.freezes === true && tela === 1) {

        if (keyCode === DOWN_ARROW && arrowOverX == 523 && arrowOverY === 178) {
            arrowOverX = 543; // X MENU
            arrowOverY = 238; // Y MENU
            optionOver = 2;
            // console.log(optionOver);
        }
        else if (keyCode === UP_ARROW && arrowOverX == 543 && arrowOverY === 238) {
            arrowOverX = 523; // X JOGAR NOVAMENTE
            arrowOverY = 178; // Y JOGAR NOVAMENTE
            optionOver = 1;
            // console.log(optionOver);
        }

        if (keyCode === ENTER && optionOver == 1 && player.freezes == true) {
            //player reset
            resetPlayer();

            //obstacles reset
            resetObstacles();

            //score reset
            resetScore();

            // pushes new enemies
            obstacles.push(new Obstacles());

            // selection reset
            optionOver = 1;
            arrowOverX = 523; // X JOGAR NOVAMENTE
            arrowOverY = 178; // Y JOGAR NOVAMENTE
        }
        else if (keyCode === ENTER && optionOver == 2 && player.freezes == true) {
            tela = 0;
            //player reset
            resetPlayer();

            //obstacles reset
            resetObstacles();

            //score reset
            resetScore();

            // selection reset
            optionOver = 1;
            arrowOverX = 523; // X JOGAR NOVAMENTE
            arrowOverY = 178; // Y JOGAR NOVAMENTE
        }
    }

}