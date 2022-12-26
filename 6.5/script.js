let login = prompt("Введите login");
let password = prompt("Введите password");

let users = [

    {"login":"ilyas", "password": "qwerty"},
    
    {"login":"eldar", "password": "qqqqq"},
    
    {"login":"assylkhan", "password": "qweqwe"},
    
    {"login":"anel", "password": "asdasd"},
    
    {"login":"alibek", "password": "aaaaaa"}
    
    ];

    let result = false; 

for(let u of users){
    if(u.login == login && u.password == password){
        result = true;
        alert("Welcome, you are authenticated");
        break;
    }
}

if(!result){
    alert("User not found");
}