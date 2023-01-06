let users = [
    {card1: '4413', card2:'4341', card3:'3554', card4:'2424', cvv:'354'},
    {card1: '4485', card2:'4041', card3:'2754', card4:'2448', cvv:'899'}
];



function transaction(){
    let card1 = document.getElementById('card1').value;
    let card2 = document.getElementById('card2').value;
    let card3 = document.getElementById('card3').value;
    let card4 = document.getElementById('card4').value;
    let cvv = document.getElementById('cvv').value;


    let result = document.querySelector('.result');

    for(let u of users){
        if(u.card1 == card1 && u.card2 == card2 && u.card3 == card3 && u.card4 == card4 && u.cvv == cvv){
            result.innerHTML = "Transaction completed";
            result.className = "alert"; //почему если добавить стиль, отрабатывает код по-другому? не так, как без стиля? 
            break;
        }else 
         result.innerHTML = "Invalid Data"
         result.className = "invalid";;
    }


}