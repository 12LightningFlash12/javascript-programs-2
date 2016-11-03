function start(){
    move();
    while(ballsPresent()){
        ballCheck();
    }
    move();
    while(ballsPresent()){
        returnBalls();
    }
    home();
}

//duplication machine
function ballCheck(){
    if(ballsPresent()){
        takeBall();
        move();
        for(var i = 0; i < 2; i ++){
            putBall();
        }
        turnAround();
        move();
        turnAround();
    }
}

//transportation machine
function returnBalls(){
    if(ballsPresent()){
        takeBall();
        turnAround();
        move();
        putBall();
        move();
        turnAround();
        for(var i = 0; i < 2; i ++){
            move();
        }
    }
}

function home(){
    turnAround();
    while(frontIsClear()){
        move();
    }
    turnAround();
}
