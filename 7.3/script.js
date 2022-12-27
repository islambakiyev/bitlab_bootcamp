let numbers = [];

let flag = true;

while(flag){
  let number = prompt("Введите число");
  if(number!=0){
    numbers.push(number);
  }else flag = false;
}

let result = " "; 

for(let i = 0; i<numbers.length; i++){
if(numbers[i]>0){
  result += numbers[i] + " ";
}
}

alert(result);