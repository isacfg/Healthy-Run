// v2.1
// fixed bug causing the game to crash after 5000 points
// added skin selection screen
// added yellow and red skins
// added skins in main menu


function version() {
    textFont(retroFont);
    fill('#F1FAEE');
    textSize(12);
    textAlign(LEFT);

    text('v2.1', 10, height - 5);
}

// Uncaught TypeError: Cannot read properties of undefined (reading 'x')
//     at screenPLAY (app.js:44:26)
//     at screens (screens.js:15:9)
//     at draw (main.js:41:3)
//     at _.o.default.redraw (p5.min.js:3:487659)
//     at _draw (p5.min.js:3:424542)