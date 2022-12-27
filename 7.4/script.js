let n = prompt("Введите n");

let numbers = [];

for(let i = 0; i<n; i++){
  numbers.push(prompt("Введите number"));
}


let result = 1; 

for(let i = 0; i<numbers.length; i++){
  if(numbers[i]!=0){
    result = result * numbers[i];
  }
}

alert(result);