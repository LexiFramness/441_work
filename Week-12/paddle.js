// Variables for the paddle
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;


function Paddle(){
  // Draw paddle
  fill('blue');
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
}
