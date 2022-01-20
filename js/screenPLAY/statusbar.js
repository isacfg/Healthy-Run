var scoreX = 60;
var scoreY = 70;
var scoreNumberX = scoreX + 50;
var scoreNumberY = scoreY - 20;
var finalScore;
var maxScore = 0;
var maxScoreX = scoreX + 33;
var maxScoreY = scoreY + 40;

function scoreText() {
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(16);
    textAlign(CENTER);
    text('SCORE:', scoreX, scoreY)

    // max score
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(16);
    textAlign(CENTER);
    text('MAX SCORE:', maxScoreX, maxScoreY)

}

function scoreNumber() {
    var multiplierScore = 115;
    finalScore = score * multiplierScore;

    textFont(retroFont);
    fill('#F1FAEE');
    textSize(16);
    textAlign(LEFT);
    text(finalScore, scoreNumberX, scoreNumberY + 20)

    // max score
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(16);
    textAlign(LEFT);
    text(maxScore, maxScoreX + 80, maxScoreY)


    if (player.freezes === true) {
        finalScore = finalScore
        maxScore = max(finalScore, maxScore);
        // console.log('score is frozen')
    }
}

// function clock() {
//     if (player.freezes === false && reseted === true) {
//         clockValue = frameCount / 60;
//     }
//     else if (player.freezes == true) {
//         clockValue = clockValue
//     }
//     else if (player.freezes == false && reseted == false) {
//         clockValue = 0
//     }

//     textFont(retroFont);
//     fill('#F1FAEE');
//     textSize(16);
//     textAlign(RIGHT);
//     text('TIMER:', width - 100, scoreY)

//     textFont(retroFont);
//     fill('#F1FAEE');
//     textSize(16);
//     textAlign(LEFT);
//     if (clockValue != 0) {
//         var normalized = clockValue.toFixed(2);
//     }
//     else {
//         var normalized = clockValue
//     }
//     text(normalized, width - 80, scoreY + 20)
// }

function resetScore() {
    score = 0;
    mBackground.speed = 0.2;
}
