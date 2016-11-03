function start() {
    tower();
    if(frontIsClear()){
        move();
        
        if(frontIsClear()){
            move();
            tower();
        }
        
        if(frontIsClear()){
            move();
        }
        
        if(frontIsClear()){
            move();
            tower();
        }
        
        if(frontIsClear()){
            move();
        }
        
        if(frontIsClear()){
            move();
            tower();
        }
        
        if(frontIsClear()){
            move();
        }
    }
}

//Builds a single tower
function tower(){
    turnLeft();
    for(var i = 0; i < 3; i ++){
        putBall();
        move();
    }
    
    turnAround();
    
    for(var i = 0; i < 3; i ++){
        move();
    }
    
    turnLeft();
}








