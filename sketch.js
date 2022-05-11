// Ball Information
let ballMovement = 3;
let xBall = 25;
let yBall = 20;
let diamater = 25;
let speedxBall = 5;
let speedyBall = 5;
let ball = 0;
let radius = diamater / 2;

// RacketInformation
// Racket1
let r1x = 05;
let r1y = 150;
let racket1Height = 90;
let racket1Width = 10;

//Racket2
let r2x = 632;
let r2y = 150;
let racket2Height = 95;
let racket2Width = 10;

//Music SuperTennis Nintendo
let music;

//Sound Effects
let ding;
let hitTheRacket;

//Scoreboard
let scoreA = 0;
let scoreB = 0;

function setup() {
  createCanvas(650, 400);
  music = createAudio("Super Tennis SNES Music - Title.mp3");
  ding = createAudio("Ding.mp3");
  hitTheRacket = loadSound("Coin Sound-1.mp3");
}

function draw() {
  RacketMovement();
  background(20);
  circle(xBall, yBall, diamater);
  rect(r1x, r1y, racket1Width, racket1Height);
  rect(r2x, r2y, racket2Width, racket2Height);
  BallMovement();
  TouchInTheBorder();
  TouchInRacket();
  PlayMusic();
  MusicTouchBall();
  Scoreboard();
  ScoreA();
  ScoreB();
}

function BallMovement() {
  xBall += speedxBall;
  yBall += speedyBall;
}

function TouchInTheBorder() {
  if (xBall + radius > width || xBall - radius < 0) {
    speedxBall *= -1;
  }

  if (yBall + radius > height || yBall - radius < 0) {
    speedyBall *= -1;
  }
}

function RacketMovement() {
  if (keyIsDown(UP_ARROW)) {
    r1y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    r1y += 5;
  }

  clear();
  rect(r1x, r1y, racket1Width, racket1Height);

  if (keyIsDown(104)) {
    r2y -= 5;
  }

  if (keyIsDown(101)) {
    r2y += 5;
  }

  clear();
  rect(r2x, r2y, racket2Width, racket2Height);
}

function TouchInRacket() {
  if (
    xBall - radius < r1x + racket1Width &&
    yBall - radius < r1y + racket1Height &&
    yBall + radius > r1y
  ) {
    speedxBall *= -1;
    hitTheRacket.play();
  }
  if (
    xBall + radius > r2x + racket2Width &&
    yBall - radius < r2y + racket2Height &&
    yBall + radius > r2y
  ) {
    speedxBall *= -1;
    hitTheRacket.play()
  }
}

function PlayMusic() {
  //here we test if the mouse is over the
  //canvas element when it's clicked
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    //Here we call the play() function on
    //the p5.MediaElement we created above.
    //This will start the audio sample.
    music.play();
  }
}

function MusicTouchBall() {
  //here we test if the mouse is over the
  //canvas element when it's clicked
  if (xBall + radius > width || xBall - radius < 0) {
    ding.play();
  }
}

function Scoreboard() {
  textAlign(CENTER)
  textSize(20);
  fill(color(255, 140, 0));
  rect(155, 0, 30,25);
  fill(255);
  text(scoreA, 170, 20);
  fill(color(255, 140, 0));
  rect(465, 0, 30,25);
  fill(255);
  text(scoreB,480, 20);
}

function ScoreA() {
  if (xBall > 637) {
    scoreA += 1;
  }
}

function ScoreB() {
  if (xBall < 13) {
    scoreB += 1;
  }
}
