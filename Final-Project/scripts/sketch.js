
var snake;
var scl = 20;

var food;

function setup() {
  createCanvas(900, 600);
  snake = new Snake();
  frameRate(5);
  pickLocation();
  alert("Use the arrow keys to contorl the snake. If you run into yourself, or the edge of the map, the game automatically tail length.")

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}
//arrow press controlling snake location
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
