
function dinosSetup() {
    // set up sprites
    dinoGreenSprites = createSprite(player.x, player.y, player.width, player.height);
    dinoGRun.frameDelay = 3;
    dinoGIdle.frameDelay = 15;

    // green sprite animations
    dinoGreenSprites.addAnimation('run', dinoGRun);
    dinoGreenSprites.addAnimation('jump', dinoGJump);
    dinoGreenSprites.addAnimation('idle', dinoGIdle);
    dinoGreenSprites.addAnimation('down', dinoGDown);
    dinoGreenSprites.addAnimation('hit', dinoGHit);

    // blue sprite animations
    dinoBlueSprites = createSprite(player.x, player.y, player.width, player.height);
    dinoBRun.frameDelay = 3;
    dinoBIdle.frameDelay = 15;

    dinoBlueSprites.addAnimation('run', dinoBRun);
    dinoBlueSprites.addAnimation('jump', dinoBJump);
    dinoBlueSprites.addAnimation('idle', dinoBIdle);
    dinoBlueSprites.addAnimation('down', dinoBDown);
    dinoBlueSprites.addAnimation('hit', dinoBHit);

    // red sprite animations
    dinoRedSprites = createSprite(player.x, player.y, player.width, player.height);
    dinoRRun.frameDelay = 3;
    dinoRIdle.frameDelay = 15;

    dinoRedSprites.addAnimation('run', dinoRRun);
    dinoRedSprites.addAnimation('jump', dinoRJump);
    dinoRedSprites.addAnimation('idle', dinoRIdle);
    dinoRedSprites.addAnimation('down', dinoRDown);
    dinoRedSprites.addAnimation('hit', dinoRHit);

    // yellow sprite animations
    dinoYellowSprites = createSprite(player.x, player.y, player.width, player.height);
    dinoYRun.frameDelay = 3;
    dinoYIdle.frameDelay = 15;

    dinoYellowSprites.addAnimation('run', dinoYRun);
    dinoYellowSprites.addAnimation('jump', dinoYJump);
    dinoYellowSprites.addAnimation('idle', dinoYIdle);
    dinoYellowSprites.addAnimation('down', dinoYDown);
    dinoYellowSprites.addAnimation('hit', dinoYHit);

    // move sprites offscreen by default
    dinoGreenSprites.position.x = -100;
    dinoGreenSprites.position.y = -100;
    dinoBlueSprites.position.x = -100;
    dinoBlueSprites.position.y = -100;
    dinoRedSprites.position.x = -100;
    dinoRedSprites.position.y = -100;
    dinoYellowSprites.position.x = -100;
    dinoYellowSprites.position.y = -100;
}
