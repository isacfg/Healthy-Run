let land;
let city;
let retroFont;
let retroFont2;
let instScreen;
let credScreen;


function preload() {
  // load images
  land = loadImage('assets/sunsetDarker.png');
  instScreen = loadImage('assets/screens/instructions.png');
  credScreen = loadImage('assets/screens/credits.png');

  // load selector
  arrowimg = loadImage('assets/arrow.png');

  // load fonts
  retroFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  retroFont2 = loadFont('assets/fonts/Arcade2020.ttf');


}

function setup() {
  createCanvas(1366, 400);
  frameRate(60);

  //load first track using callbacks
  track1 = loadSound('assets/soundtrack/6 A.M. Riverside Town (Copyright Free).mp3', playOnKeys);
}

function draw() {
  // screen manager
  screens();
}

