let n = +prompt("Введите число");
let arr = [];


for(let i = 0; i<n; i++ ){
arr.push(parseInt(prompt("Введите число")));
}

let sum = 0;
counter = 0;

for(let i = 0; i<arr.length; i++){

sum += arr[i];
counter++;

}

alert(sum + " " + sum/counter);