let i = 0;
let image = document.getElementById("image");
let array = ['azula.jpeg', 'katara.webp', 'zuko.webp'];

function changeNext(){
    if(i<array.length){
    image.src = array[i];
    i++;
    } else {
        image.src = "aang.webp";
        i = 0;
    }
}

let b = array.length-1;

function changeBack(){
    if(b>=0){
    image.src = array[b];
    b--;
    } else {
        image.src = "aang.webp";
        b = array.length-1;
    }
}