function start() {
    fetch();
    back();
}

//Go get the ball
function fetch(){
    turnLeft();
    moves();
    turnRight();
    move();
    move();
    takeBall();
}

//Return the ball
function back(){
    turnAround();
    move();
    move();
    turnLeft();
    moves();
    putBall();
    turnLeft();
}

function moves(){
    for(var i = 0; i < 4; i++){
        move();
    }
}
