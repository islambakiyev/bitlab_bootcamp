let n = +prompt("Введите число");
let arr = [];

for(let i = 0; i<n; i++ ){
arr.push(prompt("Введите число"));
}


for(let i = arr.length-1; i>=0; i--){
    console.log(arr[i])
}