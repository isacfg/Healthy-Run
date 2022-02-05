let land;
let retroFont, retroFont2;
let instScreen, credScreen;
let dinoGRun, dinoGJump, dinoGIdle, dinoGDown, dinoGHit;
let tracks = [];
let jumpSFX, hitSFX, coinSFX;
let obstacleTypes = [];
let isMusicPlaying = false;


function preload() {
  // load images
  // land = loadImage('assets/sunsetDarker.png');
  land = loadImage('assets/sunsetCity.png');

  // load selector
  arrowimg = loadImage('assets/arrow.png');

  // load fonts
  retroFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  retroFont2 = loadFont('assets/fonts/Arcade2020.ttf');

}

function setup() {
  createCanvas(1366, 400);
  frameRate(60);

  // load low priority assets
  lazyLoad();

  player = new Player();

  // set up sprites
  dinoGSetup();

}

function draw() {
  // screen manager
  screens();

}

