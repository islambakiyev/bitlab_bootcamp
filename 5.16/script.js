let minutes = +prompt("Введите minutes");
let result = minutes/60;

if(Number.isInteger(result)){
    alert(`Only ${result} HOURS`)
} else {
    ostatok = result%1;
    alert(`${Math.round(result)} HOURS and ${minutes-(Math.round(result)*60)} MINUTES`)
}
