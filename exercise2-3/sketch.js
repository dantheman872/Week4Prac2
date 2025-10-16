function setup(){

    createCanvas(400,400)
    background(255)
}

function draw(){

    let cols = 8
    let squareSize =  width/cols

    let y = 0;

    while(y < height){

        let x = 0

        while(x < width){

            rect(x,y, squareSize, squareSize)
            x += squareSize;
        }

        y += squareSize;
    }
}
