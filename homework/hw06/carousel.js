const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


const imgElement= document.querySelector('.current-photo img');
const captionElement= document.querySelector('.caption');

function showImage() {

imgElement.src = photos[idx];

captionElement.textContent = `Image ${idx + 1} of 10`;  
}

function forward() {
    console.log('forward');
    idx++;

    if (idx >= photos.length){
        idx = 0;
    }
   
    showImage();
}

function back() {
    console.log('back');
    idx--;
    
    if(idx<0){
        idx = photos.length - 1;
    }
   
    showImage();
}

showImage();

document.querySelector('.carousel .btn-next').addEventListener('click',forward);
document.querySelector('.carousel .btn-prev').addEventListener('click',back);
