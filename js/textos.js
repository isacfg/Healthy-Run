let jogarY = 195;
let instrucoesY = 245;
let creditsY = 295;
let skinsY = 345;

function gameName() {
    textFont(retroFont2);
    fill('#F1FAEE');
    textSize(40);
    textAlign(CENTER);0
    text('HEALTHY RUN', width / 2, 80)
}

function menu() {
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(16);
    textAlign(CENTER);

    text('JOGAR', width / 2, jogarY);
    text('INSTRUÇÕES', width / 2, instrucoesY);
    text('CRÉDITOS', width / 2, creditsY);
    text('SKINS', width / 2, skinsY);
}

function alltexts() {
    gameName();
    menu();
    version();
}