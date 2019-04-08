// Variables for the ball
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;


function Ball(){
  // Draw ball
  fill(31, 173, 215);
  noStroke();
  ellipse(xBall, yBall, diameter, diameter);
}
