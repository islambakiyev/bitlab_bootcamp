let amount = +prompt("Введите количество");
let price = 120;
let finalPrice = 0;

if((price*amount)>4000){
    let discount = (price*amount)/10;
    finalPrice = (price*amount)-discount;
} else finalPrice = price*amount;


alert(finalPrice);

