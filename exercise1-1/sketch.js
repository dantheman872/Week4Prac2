function setup(){

    createCanvas(400,400)
}

function draw(){

    background(255)
    fill(0,0,255)
    let x = 10
    let diameter = 20

    while(x <= mouseX){

        circle(x, height/2, 20)
        x += diameter
    }
}