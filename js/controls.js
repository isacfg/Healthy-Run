let arrowimg;
let arrowX = 625; // default position X
let arrowY = 187; // default position Y
let option = 1;
let tela = 0;
let optionOver = 1;
let isOnMenu = true;

function arrow() {
    imageMode(CENTER);
    image(arrowimg, arrowX, arrowY, 18.6667, 21.33334);
}

// moving arrow
function keyPressed() {

    // playground
    if (keyCode === 80) { // p
        stopMusic();
        tela = 9; // playground
    }






    // screen selection
    if (keyCode === ENTER && (option == 1 && tela === 0)) {
        tela = 1; // game
        mBackground = new BackgroundM();
        obstacles.push(new Obstacles());
        // console.log('new obstacle ENTER')

    }
    else if (keyCode === ENTER && option == 2 && tela === 0) {
        tela = 2; // instructions
    }
    else if (keyCode === ENTER && option == 3 && tela === 0) {
        tela = 3; // credits
    }
    else if (keyCode === ENTER && option == 4 && tela === 0 && isOnMenu == true) {
        tela = 4; //  skin selectionme
    }
    else if (keyCode === 27) { // esc
        tela = 0;
        isOnMenu = true;

        //player reset
        resetPlayer();

        //obstacles reset
        resetObstacles();

        //score reset
        resetScore();
    }





    // main menu arrow locations
    if (keyCode === DOWN_ARROW && tela === 0 && arrowX == 625 && arrowY === 187) {
        arrowY = 237; // x and y position INSTRUÇÕES
        arrowX = 580; // x and y position INSTRUÇÕES
        option = 2;
        // console.log(option)
    }
    else if (keyCode === DOWN_ARROW && tela === 0 && arrowX == 580 && arrowY === 237) {
        arrowY = 287; // x and y position CRÉDITOS
        arrowX = 592; // x and y position CRÉDITOS
        option = 3;
        // console.log(option)
    }
    else if (keyCode === DOWN_ARROW && tela === 0 && arrowX == 592 && arrowY === 287) {
        arrowY = 337; // x and y position SKINS
        arrowX = 620; // x and y position SKINS
        option = 4;
        // console.log(option)
    }
    else if (keyCode === UP_ARROW && tela === 0 && arrowX == 620 && arrowY === 337) {
        arrowY = 287; // x and y position CRÉDITOS
        arrowX = 592; // x and y position CRÉDITOS
        option = 3;
        // console.log(option)
    }
    else if (keyCode === UP_ARROW && tela === 0 && arrowX == 592 && arrowY === 287) {
        arrowY = 237; // x and y position INSTRUÇÕES
        arrowX = 580; // x and y position INSTRUÇÕES
        option = 2;
        // console.log(option)
    }
    else if (keyCode === UP_ARROW && tela === 0 && arrowX == 580 && arrowY === 237) {
        arrowY = 187; // x and y position JOGAR
        arrowX = 625; // x and y position JOGAR
        option = 1;
        // console.log(option)
    }







    // in game controls
    if ((keyCode === UP_ARROW || keyCode === 32) && tela === 1) { // spacebar
        player.up();
        // console.log("spacebar");
    }

    if (keyCode === DOWN_ARROW && tela === 1) {
        player.down();
    }






    // skin selection arrow locations
    if (keyCode === RIGHT_ARROW && tela === 4 && arrowSelectionX == 400) { // GREEN POSITION
        arrowSelectionX = 570; // BLUE POSITION
        dinoSelector = 2; // BLUE
        isOnMenu = false;
    }
    else if (keyCode === RIGHT_ARROW && tela === 4 && arrowSelectionX == 570) { // BLUE POSITION
        arrowSelectionX = 740; // RED POSITION
        dinoSelector = 3; // RED
        isOnMenu = false;
    }
    else if (keyCode === RIGHT_ARROW && tela === 4 && arrowSelectionX == 740) { // RED POSITION
        arrowSelectionX = 885; // YELLOW POSITION
        dinoSelector = 4; // YELLOW
        isOnMenu = false;

    }
    else if (keyCode === LEFT_ARROW && tela === 4 && arrowSelectionX == 885) { // YELLOW POSITION
        arrowSelectionX = 740; // RED POSITION
        dinoSelector = 3; // RED
        isOnMenu = false;     
    }
    else if (keyCode === LEFT_ARROW && tela === 4 && arrowSelectionX == 740) { // RED POSITION
        arrowSelectionX = 570; // BLUE POSITION
        dinoSelector = 2; // BLUE
        isOnMenu = false;    
    }
    else if (keyCode === LEFT_ARROW && tela === 4 && arrowSelectionX == 570) { // BLUE POSITION
        arrowSelectionX = 400; // GREEN POSITION
        dinoSelector = 1; // GREEN
        isOnMenu = false;
    }
    if (keyCode === ENTER && tela === 4 && isOnMenu == false) { // FIX BUG WITH ENTER
        tela = 0; // back to main menu
        isOnMenu = true;
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