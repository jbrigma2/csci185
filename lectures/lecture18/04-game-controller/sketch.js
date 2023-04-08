let x = 100;
let y = 200;
let width = 50;
let fillColor = 'teal';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    //noFill();
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        y = y + 10;
    } else if (ev.code == 'ArrowDown') {
        y = y+10;
    } else if (ev.code == 'ArrowLeft') {
        x = x +10;
    } else if (ev.code == 'ArrowRight') {
        x = x + 10;
    } else if (ev.code == 'Space') {
        width += 10;
    } else if (ev.code == 'Minus') {
        width -= 10
    }else if (ev.cod=== 'KeyR')
    

    // redraw circle:
    clear();
    fillColor(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);