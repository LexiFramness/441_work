//Alexis Framness
// Final Project
var pongSound
var aipongSound
var lifes = 3
var started = false;
var score = 0;
//preload sound for game & show user instructions
function preload(){
    pongSound = loadSound("assets/sound/beep.mp3");
    aipongSound = loadSound("assets/sound/AIbeep.mp3");
    window.alert('Use the Right and Left Arrow keys to move your paddle(Blue). To restart click "Start Over"');
}
function resetSketch(){
  button = createButton('Start Over');
  button.position(windowWidth - 90, 30);
  button.mousePressed(resetSketch);
  score = 0;
  lifes = 3;
}
function setup() {
      // createCanvas the fills window
      createCanvas(windowWidth, windowHeight - 70);
      resetSketch();

}
function draw() {
      background('rgb(120, 110, 119)');
      //call ball
      this.Ball()
      this.Paddle()
      this.Paddle2()
      this.drawScore()
      this.drawLives()

        xBall += xBallChange;
        yBall += yBallChange;
        if (xBall < diameter/2 ||
            xBall > windowWidth - 0.5*diameter) {
          xBallChange *= -1;
        }
        if (yBall < diameter/2 ||
            yBall > windowHeight - 80) {
          yBallChange *= -1;
          lifes = lifes -1;
        }
        if (yBall <= 20){
          lifes = lifes +1;
          aipongSound.play();
        }

        if (lifes <= 0){
          window.alert('GAME OVER, Better luck next time');
          resetSketch();

        }
      // Check for collision with paddle
      if ((xBall > xPaddle &&
          xBall < xPaddle + paddleWidth) &&
          (yBall + (diameter/2) >= yPaddle)) {
        xBallChange *= -1;
        yBallChange *= -1;
        score++;
        pongSound.play();
      }
      //collision with AL paddle
      if ((xBall < xPaddle2 &&
          xBall > xPaddle2 + paddleWidth2) &&
          (yBall + (diameter/2) >= yPaddle2)) {
        xBallChange *= -1;
        yBallChange *= -1;
        pongSound.play();
      }
      // Update the paddle location on screen
      if (!started) {
        xPaddle = windowWidth / 2;
        yPaddle = windowHeight - 90;
        xPaddle2 = windowWidth / 2;
        yPaddle2 = windowHeight - 648;
        started = true;
      }
    }
      // controls movement of the paddle across the screen
    function keyPressed() {
      if (keyCode === LEFT_ARROW) {
        xPaddle -= 50;
      } else if (keyCode === RIGHT_ARROW) {
        xPaddle += 50;
      }
    }
