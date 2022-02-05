let land;
let retroFont, retroFont2;
let instScreen, credScreen;
let dinoGRun, dinoGJump, dinoGIdle, dinoGDown, dinoGHit;
let tracks = [];
let jumpSFX, hitSFX, coinSFX;
let obstacleTypes = [];


function preload() {
  // load images
  // land = loadImage('assets/sunsetDarker.png');
  land = loadImage('assets/sunsetCity.png');
  instScreen = loadImage('assets/screens/instructions.png');
  credScreen = loadImage('assets/screens/credits.png');
  playgroundImg = loadImage('assets/screens/playground.png');

  // load selector
  arrowimg = loadImage('assets/arrow.png');

  // load fonts
  retroFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  retroFont2 = loadFont('assets/fonts/Arcade2020.ttf');

  // load background music
  tracks[0] = loadSound('assets/soundtrack/6 A.M. Riverside Town (Copyright Free).mp3');
  tracks[1] = loadSound('assets/soundtrack/Since 2 A.M. (Copyright Free).mp3');
  tracks[2] = loadSound('assets/soundtrack/The Past (Copyright Free).mp3');
  tracks[3] = loadSound('assets/soundtrack/Unwavering Emotion.mp3');

  // load sfx
  jumpSFX = loadSound('assets/sfx/jump.mp3');
  hitSFX = loadSound('assets/sfx/hit.mp3');
  coinSFX = loadSound('assets/sfx/coins.mp3');

  // load obstacles
  obstacleTypes[0] = loadImage('assets/obstacles/DoubleOneDarkDoubleOneBox.png');
  obstacleTypes[1] = loadImage('assets/obstacles/DoubleOneRedDoubleOneBox.png');
  obstacleTypes[2] = loadImage('assets/obstacles/OneBox.png');
  obstacleTypes[3] = loadImage('assets/obstacles/OneDarkOneBox.png');
  obstacleTypes[4] = loadImage('assets/obstacles/OneRedOneBox.png');
  obstacleTypes[5] = loadImage('assets/obstacles/TwoDarkOneBox.png');
  obstacleTypes[6] = loadImage('assets/obstacles/TwoRedOneBox.png');

  // load sprites using p5.play library
  dinoGRun = loadAnimation(
    'assets/sprites/green/green_running02.png',
    'assets/sprites/green/green_running03.png',
    'assets/sprites/green/green_running04.png',
    'assets/sprites/green/green_running05.png',
    'assets/sprites/green/green_running06.png',
    'assets/sprites/green/green_running07.png',
  )
  dinoGJump = loadAnimation(
    'assets/sprites/green/green_jump01.png',
    'assets/sprites/green/green_jump02.png',
  )
  dinoGIdle = loadAnimation(
    'assets/sprites/green/green_standing01.png',
    'assets/sprites/green/green_standing02.png',
    'assets/sprites/green/green_standing03.png',
  )
  dinoGDown = loadAnimation(
    'assets/sprites/green/green_down01.png',
    'assets/sprites/green/green_down02.png',
    'assets/sprites/green/green_down03.png',
    'assets/sprites/green/green_down04.png',
    'assets/sprites/green/green_down05.png',
    'assets/sprites/green/green_down06.png',
    'assets/sprites/green/green_down07.png',
  )
  dinoGHit = loadAnimation(
    'assets/sprites/green/green_hit01.png',
    'assets/sprites/green/green_hit02.png',
    'assets/sprites/green/green_hit03.png',
  )
}

function setup() {
  createCanvas(1366, 400);
  frameRate(60);

  // set up soundtrack
  backgroundMusic();

  player = new Player();

  // set up sprites
  dinoGSetup();

}

function draw() {
  // screen manager
  screens();

}

