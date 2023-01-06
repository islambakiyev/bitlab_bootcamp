let emails = ["zhizn91@mail.ru", "sobaka@sobaka.kz"];


function checking(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPassword');
    let flag = false;

    for(let i = 0; i<emails.length; i++){
        if(emails[i]==email.value){
            flag = true;
        }
    }

    if(flag){
        let emailAlert = document.getElementById('emailAlert');
        let alert = document.createElement('p');
        alert.textContent = 'Current email is already in use';
        alert.style.color = 'red';
        emailAlert.appendChild(alert);
    }

    if(password.value.length<6){
        let passwordAlert = document.getElementById('passwordAlert');
        let alertTwo = document.createElement('p');
        alertTwo.textContent = 'Password length at least must be 6 symbols';
        alertTwo.style.color = 'red';
        passwordAlert.appendChild(alertTwo);
    }

    if(password.value!=repeatPassword.value){
        let passwordRepeatAlert = document.getElementById('passwordRepeatAlert');
        let alertThree = document.createElement('p');
        alertThree.textContent = 'Passwords are not same';
        alertThree.style.color = 'red';
        passwordRepeatAlert.appendChild(alertThree);
    }

    if(!flag && password.value.length>6 && password.value==repeatPassword.value ){
        let sucess = document.getElementById('sucess');
        let alertSucess = document.createElement('p');
        alertSucess.textContent = 'Registration was successful';
        alertSucess.style.color = 'green';
        alertSucess.style.fontWeight = 'bold';
        sucess.appendChild(alertSucess);
    }


}