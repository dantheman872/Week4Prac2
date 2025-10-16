function setup(){

    createCanvas(400,400)
    background(255)
}

function draw(){

    let cols = 8
    let squareSize =  width/cols
    let row = 0
    let rows = 8

    let y = 0;

    while(row < rows){

        let col = 0;
        let x = 0;

        while(col < cols){

            if ((row + col) % 2 == 0) {
                fill(0);
            } else {
                fill(255);
            }

            rect(x,y,squareSize, squareSize)

            x += squareSize
            col++
        }

        y += squareSize
        row++ 
    }
}
