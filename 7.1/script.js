let n = prompt("Введите n");

let numbers = [];

for(let i = 0; i<n; i++){
  numbers.push(prompt("Введите number"));
}


let m = prompt("Введите m");

let index = numbers.indexOf(m);

if(index!=-1){
  alert("Yes " + index);
}else alert ("No");

