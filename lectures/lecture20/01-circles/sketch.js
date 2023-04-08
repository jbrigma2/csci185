function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // what do you wnat to repeat?
    //calling the circle fuction, x vault, size
    noFill();
    let y=0;
    while (y<= 800) {

        circle(100, y, 50);
        y+=50;


       
        drawGrid(canvasWidth, canvasHeight);
    }
}
