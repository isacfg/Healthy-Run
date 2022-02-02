
function dinoGSetup() {
    // set up sprites
    dinoGreenSprites = createSprite(player.x, player.y, player.width, player.height);
    dinoGRun.frameDelay = 3;

    dinoGreenSprites.addAnimation('run', dinoGRun);
    dinoGreenSprites.addAnimation('jump', dinoGJump);
    dinoGreenSprites.addAnimation('idle', dinoGIdle);
    dinoGreenSprites.addAnimation('down', dinoGDown);
    dinoGreenSprites.addAnimation('hit', dinoGHit);

}
