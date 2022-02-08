let greenIdleX = 443;
let blueIdleX = 607;
let redIdleX = 769;
let yellowIdleX = 937;
let dinoWidthSelection = 55;
let dinoHeightSelection = 55;
let dinoIdleY = 200;
let textY = dinoIdleY + dinoHeightSelection + 10;
let arrowSelectionX = 400;
let arrowSelectionY = 258;

function screenSkinsSelection() {
    console.log('screenSkinsSelection called');
    image(selectionScreen, 0, 0);
    gameName();
    imageMode(CENTER);

    // draw the buttons
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(14);
    textAlign(CENTER);

    if (arrowSelectionX != 400) {
        text('GREEN', greenIdleX + 5, textY);
    }
    if (arrowSelectionX != 570) {
        text('BLUE', blueIdleX + 5, textY);
    }
    if (arrowSelectionX != 740) {
        text('RED', redIdleX + 5, textY);
    }
    if (arrowSelectionX != 885) {
        text('YELLOW', yellowIdleX + 5, textY);
    }

    // selector
    imageMode(CENTER)
    image(arrowimg, arrowSelectionX, arrowSelectionY, 18.57, 20);


    // animations
    if (arrowSelectionX == 400) { // GREEN Position

        // fill('#9fbc4d');
        textSize(16);
        text('GREEN', greenIdleX + 5, textY);

        dinoGreenSprites.changeAnimation('idle');
        dinoGreenSprites.position.x = greenIdleX;
        dinoGreenSprites.position.y = dinoIdleY;
        dinoGreenSprites.animation.play();
        drawSprites();

        // take sprites offscreen
        dinoBlueSprites.position.x = -100;
        dinoRedSprites.position.x = -100;
        dinoYellowSprites.position.x = -100;

        // show static images except for the green one
        image(blueSelect, blueIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(redSelect, redIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(yellowSelect, yellowIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
    }
    else if (arrowSelectionX == 570) { // BLUE

        textSize(16);
        text('BLUE', blueIdleX + 5, textY);

        dinoBlueSprites.changeAnimation('idle');
        dinoBlueSprites.position.x = blueIdleX;
        dinoBlueSprites.position.y = dinoIdleY;
        dinoBlueSprites.animation.play();
        drawSprites();

        dinoGreenSprites.position.x = -100;
        dinoRedSprites.position.x = -100;
        dinoYellowSprites.position.x = -100;

        // show static images
        image(greenSelect, greenIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(redSelect, redIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(yellowSelect, yellowIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
    }
    else if (arrowSelectionX == 740) { // RED

        textSize(16);
        text('RED', redIdleX + 5, textY);

        dinoRedSprites.changeAnimation('idle');
        dinoRedSprites.position.x = redIdleX;
        dinoRedSprites.position.y = dinoIdleY;
        dinoRedSprites.animation.play();
        drawSprites();

        dinoGreenSprites.position.x = -100;
        dinoBlueSprites.position.x = -100;
        dinoYellowSprites.position.x = -100;

        // show static images
        image(blueSelect, blueIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(greenSelect, greenIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(yellowSelect, yellowIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
    }
    else if (arrowSelectionX == 885) { // YELLOW

        textSize(16);
        text('YELLOW', yellowIdleX + 5, textY);

        dinoYellowSprites.changeAnimation('idle');
        dinoYellowSprites.position.x = yellowIdleX;
        dinoYellowSprites.position.y = dinoIdleY;
        dinoYellowSprites.animation.play();
        drawSprites();

        dinoGreenSprites.position.x = -100;
        dinoBlueSprites.position.x = -100;
        dinoRedSprites.position.x = -100;

        // show static images
        image(blueSelect, blueIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(greenSelect, greenIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
        image(redSelect, redIdleX, dinoIdleY, dinoWidthSelection, dinoHeightSelection);
    }
}