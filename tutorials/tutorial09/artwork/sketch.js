const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2);

}


// // anything that you want to animate goes in this function:  
function draw() {
    clear();
    let i = 0
    while ( i < 1000){


    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(20, 50);
    //circle( 0,3,6,9,12,....)
    if(i%3 === 0){
    fill("#08415c");
    circle(x, y, size);
    }
    //(1, 4, 7, 10, 13....)
    if( i%3 === 1){
    fill("e1f0c4");
    square ( x, y, size );
    }

    //triangle 
    if(i % 3===2){
        fill("6bab90");
        triangle(
            x,y -size / 2,
            x-size / 2.25, y +size/4.3,
            x+ size/ 2.25, y+size/4.3
        );
    }


    
    ++i;
}
}


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

