function setup(){

    createCanvas(400,400)
    background(255)
}

function draw(){

    for(let x = 0; x < width; x += 50){

        square(x,0,50)
    }
}