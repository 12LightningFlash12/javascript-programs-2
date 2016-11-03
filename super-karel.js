//I hate you
//(not you viwer, the people at codehs)
function start() {
    turnLeft();
    if(ballsPresent()){
        takeBall();
    }
    for(var i = 0; i < 13; i++){
        while(frontIsClear()){
            move();
            if(ballsPresent()){
                takeBall();
            }
        }
        if(facingNorth()){
            turnRight();
            if(frontIsBlocked()){
                turnAround();
            }
            if(facingSouth()){
                turnRight();
            }
            if(facingWest()){
                turnLeft();
            }
            if(facingEast())
                move();
            turnRight();
            if(ballsPresent()){
                takeBall(); 
            }
        }
        while(frontIsClear()){
            move();
            if(ballsPresent()){
                takeBall();
            }
        }
        if(facingSouth()){
            turnLeft();
            if(frontIsBlocked()){
                turnAround();
            }
            if(facingEast()){
                move();
            }
            turnLeft();
            if(ballsPresent()){
                takeBall();
            }
        }
    }
    flip();
}

function flip(){
    turnRight();
    turnRight();
    turnRight();
}
