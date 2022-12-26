let amount = +prompt("Введите количество");
let currency = +prompt("1- CONVERT TO USD \n2- CONVERT TO EUR \n 3- CONVERT TO GBP");
let result = 0;

if(currency==1){
    result = amount/380;
}else if(currency==2){
    result =  amount/430;
}else result = amount/480;

alert(result.toFixed(2));
