let n = +prompt("Введите число");
let arr = [];


for(let i = 0; i<n; i++ ){
arr.push(parseInt(prompt("Введите число")));
}

let max = arr[0];

for(let i = 0; i<arr.length; i++){

    if(arr[i]>max){
        max = arr[i];
    }
}

alert(max);