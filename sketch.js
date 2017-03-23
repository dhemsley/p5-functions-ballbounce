var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(252, 118, 174);
    display();
    move();
    bounce();

}
    
function display(){
    stroke(255);
    strokeWeight(4);
    fill(143, 252, 196);
    ellipse(x, y, 50, 50);
}



function move(){
     //make ball move
    y = y + speedy;
    x = x + speedx;
}

  
function bounce(){
//ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }    
}
  