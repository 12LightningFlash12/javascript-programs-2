/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    race();
}

function side(){
    while(frontIsClear()){
        move();
    }
    putBall();
    turnLeft();
}

function lap(){
    for(var i = 0; i < 4; i ++){
        side();
    }
}

function race(){
    for(var i = 0; i < 8; i ++){
        lap();
    }    
}
