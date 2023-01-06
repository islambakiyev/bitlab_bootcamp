let image = document.getElementById('image');


document.getElementById('pics').addEventListener('click', function(event){
    let img = event.target.getAttribute('src');
    image.setAttribute('src', img);
    console.log(img);
})