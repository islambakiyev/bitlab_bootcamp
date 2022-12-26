let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");

if(a + b > c && b + c > a && a + c > b){
    alert("YES");
}else alert("NO");