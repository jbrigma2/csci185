const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];
let i=0;
const outputElement = document.querySelector('#output');

while (i<names.length){
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    ++i;
}
// use a while loop to output a message for each
// item in the array:
//outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[0]}!</p>`);
//outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
//outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
//outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
