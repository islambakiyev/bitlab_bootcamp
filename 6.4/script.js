let n = +prompt("Введите число");
let arr = [];


for(let i = 0; i<n; i++ ){
arr.push(parseInt(prompt("Введите число")));
}

let result = " ";

for(let i = 0; i<arr.length; i++){

result += arr[i]*arr[i] + " ";

}

alert(result);