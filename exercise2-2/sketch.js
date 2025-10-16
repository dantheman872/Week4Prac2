function setup(){

    createCanvas(400,400)
}

function draw(){

    background(255)

    let numRects = 8;
    let rectWidth = width / numRects;

    for( let i = 0; i < numRects; i++){

        let x = i * rectWidth;

        if (isMouseOverRect(x,0, rectWidth, height) && mouseIsPressed){

            fill(0,0, 255)
        } else {
            noFill();
        }

        rect(x, 0, rectWidth, height)
    }
}

function isMouseOverRect(x,y,w,h){

    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h
}