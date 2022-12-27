let numbers = [];

let flag = true;

while(flag){
  let number = prompt("Введите число");
  if(number!=0){
    numbers.push(number);
  }else flag = false;
}

let sredneeG = 1; 
let counter = 0; 

for(let i = 0; i<numbers.length; i++){
sredneeG = sredneeG * numbers[i];
counter++;
}

finalNum = Math.pow(sredneeG, 1/counter);
alert(finalNum.toFixed(3));