var arrowOverX = 523;
var arrowOverY = 178;


function afterDeath() {
    var playAgainX = width / 2;
    var playAgainy = 200;
    var menuX = width / 2;
    var menuY = 260;


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