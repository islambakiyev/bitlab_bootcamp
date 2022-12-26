let money = +prompt("Введите число a");
let result = money/380;

if(Number.isInteger(result)){
    alert(`Only ${result} USD`)
} else {
    ostatok = result%1;
    let finalOstatok = ostatok.toFixed(2) * 100;
    alert(`${Math.round(result)} USD and ${finalOstatok} cents`)
}
