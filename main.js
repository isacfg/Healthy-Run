let land;
let city;
let retroFont;
let retroFont2;


function preload() {
  land = loadImage('assets/sunsetDarker.png');
  city = loadImage('assets/MENU.png');
  arrowimg = loadImage('assets/arrow.png');
  retroFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  retroFont2 = loadFont('assets/fonts/Arcade2020.ttf');
  // retroFont3 = loadFont('assets/Sabo-Filled.otf');


}

function setup() {
  createCanvas(1366, 400);
  frameRate(60);

}



function draw() {
  // screen manager
  screens();
}

