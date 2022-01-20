

function gameName() {
    textFont(retroFont2);
    fill('#F1FAEE');
    textSize(40);
    textAlign(CENTER);
    text('HEALTHY RUN', width / 2, 80)
}

function menu() {
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(20);
    textAlign(CENTER);

    text('JOGAR', width / 2, 188);
    text('INSTRUÇÕES', width / 2, 260);
    text('CRÉDITOS', width / 2, 332);

}

function alltexts() {
    gameName();
    menu();
}