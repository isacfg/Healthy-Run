

function dinoSetup() {
    // set up sprites
    dinosSprite = createSprite(200, 365, 50, 50);
    dinosSprite.addAnimation('run', dinos);
    dinos.frameDelay = 2

}

function screenPlayground() {
    image(playgroundImg, 0, 0);
    gameName();

    // sprites
    drawSprites();

}