let usersArray = [

{name: 'Ilyas', login: 'ileke', password: 'ileke123'},
  
{name: 'Aibek', login: 'aieke', password: 'aieke123'},
  
{name: 'Eldar', login: 'eleke', password:'eleke123'}
  
];

let login = document.getElementById('login');
let password = document.getElementById('password');
let loginText = document.getElementById('loginText');
let passwordText = document.getElementById('passwordText');
let button = document.getElementById('button');

let flag = false; 

function check(){
  for(let u of usersArray){
    if(u.login == login.value && u.password == password.value){
      
      login.remove();
      password.remove();
      loginText.remove();
      passwordText.remove();
      button.remove();

      let sucess = document.createElement('div');
      sucess.innerHTML = "You are authenticated";
      document.body.append(sucess);
      flag = true;
      break;
    }
  }

  if(!flag){
    alert("NO USERS")
    login.className = "alert";
    password.className = "alert";
  }
}