function setup(){

    createCanvas(600,600)
    background(255) 
    strokeWeight(3)   
}

function draw(){

    let y = 0;
    while(y < height){

        stroke(255,0,0)
        line(width, height, 0, y)
        stroke(0)
        line(width, 0, 0, y)
        stroke(0,0,255)
        line(width/2, height/2, width, y)
        y += 10
    }
}