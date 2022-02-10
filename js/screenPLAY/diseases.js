let diseases = [
    'Menor risco de diabetes tipo 2',
    'Menor risco de hipertensão arterial',
    'Diminuição da ansiedade',
    'Menor risco de ataque cardíaco',
    'Menor risco de asma',
    'Menor risco de câncer',
    'Menor risco de doença pulmonar crônica',
    'Menor risco de depressão',
    'Menor risco de doença cardiovascular',
    'Menor risco de AVC',
];
let instructions = "A prática de educação física previne diversas doenças,\n conforme sua pontuação aumenta as doenças prevenidas\n vão ser exibidas na tela.";
let pickDisease;
let stop = 0;
let interval = 600;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function aleatoriedade() { // função sorteia uma doença e a remove do array

    if (finalScore > (interval * 1) - 10 && finalScore < (interval * 2) - 10 && stop == 0) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 1;
        diseases.splice(pickDisease, 1); // remove the disease from the array
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 3) - 10 && finalScore < (interval * 4) - 10 && stop == 1) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 2;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 5) - 10 && finalScore < (interval * 6) - 10 && stop == 2) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 3;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 7) - 10 && finalScore < (interval * 8) - 10 && stop == 3) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 4;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 9) - 10 && finalScore < (interval * 10) - 10 && stop == 4) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 5;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 11) - 10 && finalScore < (interval * 12) - 10 && stop == 5) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 6;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 13) - 10 && finalScore < (interval * 14) - 10 && stop == 6) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 7;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 15) - 10 && finalScore < (interval * 16) - 10 && stop == 7) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 8;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
    else if (finalScore > (interval * 17) - 10 && finalScore < (interval * 18) - 10 && stop == 8) {
        pickDisease = getRandomInt(0, diseases.length);
        stop = 9;
        diseases.splice(pickDisease, 1); // remove the disease from the array 
        // console.log(diseases.length);
    }
}



function sickeness() { // mostra a doença escolhida pela função anterior

    if (player.freezes == false) {

        if (finalScore >= 0 && finalScore < interval) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(14);
            textAlign(CENTER);
            text(instructions, width / 2, height / 2);

        }

        else if (finalScore > interval * 1 && finalScore < interval * 2) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }

        else if (finalScore > interval * 3 && finalScore < interval * 4) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }
        else if (finalScore > interval * 5 && finalScore < interval * 6) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }

        else if (finalScore > interval * 7 && finalScore < interval * 8) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }
        else if (finalScore > interval * 9 && finalScore < interval * 10) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }

        else if (finalScore > interval * 11 && finalScore < interval * 12) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }

        else if (finalScore > interval * 13 && finalScore < interval * 14) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }

        else if (finalScore > interval * 15 && finalScore < interval * 16) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }
        else if (finalScore > interval * 17 && finalScore < interval * 18) {

            textFont(retroFont);
            fill('#F1FAEE');
            textSize(16);
            textAlign(CENTER);
            text(diseases[pickDisease], width / 2, height / 2);

        }
    }
    // else {
    //     console.log('show menu');
    // }

}