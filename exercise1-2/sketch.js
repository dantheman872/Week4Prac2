function setup(){

    createCanvas(400,400)
}

function draw(){

    background(255)
    fill(0)
    let x = 10
    let i = 10
    let diameter = 20

    while(i <= width){

        fill(255)
        circle(i, height/2, 20)
        i += diameter
    }
    
    while(x <= mouseX){

        fill(0,0,255)
        circle(x, height/2, 20)
        x += diameter
    }
}