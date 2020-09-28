var snake;
var scl = 20;

function setup() {
    createCanvas(600,600);
    snake = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(row)));
    food.mult(scl);
}
function draw() {
    background(51);
    snake.update();
    snake.show();
    
    if (snake.eat(food)) {
        pickLocation();
    }
    
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.direction(0, -2);
    } else if (keyCode === DOWN_ARROW) {
        snake.direction(0, 2);
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction(2, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.direction(-2, 0);
    }
}

