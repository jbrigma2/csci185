function defaultTheme() {
    // your code here.
    document.querySelector("h1").innerText ="Default Theme";
    document.querySelector("body").className ="default";
}

function oceanTheme() {
   // your code here.
   document.querySelector("h1").innerText ="Desert Theme";
   document.querySelector("body").className ="desert";
   
}

function desertTheme() {
   // your code here.
   document.querySelector("h1").innerText =" Ocean Theme";
   document.querySelector("body").className ="ocean";
}

function highContrastTheme() {
    // your code here.
    document.querySelector("h1").innerText ="High Contrast Theme";
    document.querySelector("body").className ="high-contrast ";
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/