let arrowOverX = 523;
let arrowOverY = 178;


function afterDeath() {
    let playAgainX = width / 2;
    let playAgainy = 200;
    let menuX = width / 2;
    let menuY = 260;


    if (player.freezes === true) {
        arrowOver();

        textFont(retroFont2);
        fill('#F1FAEE');
        textSize(40);
        textAlign(CENTER);

        text('GAME OVER', width / 2, 80)


        textFont(retroFont);
        fill('#F1FAEE');
        textSize(16);
        textAlign(CENTER);

        text('JOGAR NOVAMENTE', playAgainX, playAgainy);
        text('IR PARA MENU', menuX, menuY);

        // console.log('game freezes');
    }
}

function arrowOver() {
    image(arrowimg, arrowOverX, arrowOverY, 24, 28);
}