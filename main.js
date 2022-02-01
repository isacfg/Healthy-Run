let land;
let city;
let retroFont;
let retroFont2;
let instScreen;
let credScreen;
let dinos;


function preload() {
  // load images
  land = loadImage('assets/sunsetDarker.png');
  instScreen = loadImage('assets/screens/instructions.png');
  credScreen = loadImage('assets/screens/credits.png');
  playgroundImg = loadImage('assets/screens/playground.png');

  // load selector
  arrowimg = loadImage('assets/arrow.png');

  // load fonts
  retroFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  retroFont2 = loadFont('assets/fonts/Arcade2020.ttf');

  // load sounds
  track1 = loadSound('assets/soundtrack/6 A.M. Riverside Town (Copyright Free).mp3');

  // load sprites using p5.play library
  dinos = loadAnimation(
    'assets/sprites/green/green_running01.png',
    'assets/sprites/green/green_running02.png',
    'assets/sprites/green/green_running03.png',
    'assets/sprites/green/green_running04.png',
    'assets/sprites/green/green_running05.png',
    'assets/sprites/green/green_running06.png',
    'assets/sprites/green/green_running07.png',
    'assets/sprites/green/green_running08.png',
  )
}

function setup() {
  createCanvas(1366, 400);
  frameRate(60);

  // set up soundtrack
  backgroundMusic();

  dinoSetup();
}

function draw() {
  // screen manager
  screens();

}

