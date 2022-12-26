let choose = prompt("Choose your branch: \n 1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:");

if(choose==1){
    let choose = prompt("1 - Math, 2 - Physics:");
    if(choose == 1){
        alert("You are Financier");
    }else alert ("You are Engineer");
} else if (choose == 2){
    let choose = prompt("1 - History, 2 - Foreign Languages:");
    if(choose == 1){
        alert("You are Historic or Diplomat");
    }else alert ("You are Translator");
} else if (choose == 3){
    let choose = prompt("1 - Drawing, 2 -Singing:");
    if(choose == 1){
        alert("You are Painter or Architect");
    }else alert ("You are Singer or Tamada"); 
} else if(choose == 4){
    let choose = prompt("1 - Team, 2 - Individual:");
    if(choose == 1){
        alert("You are footballer or Basketball player");
    }else alert ("You are boxer or tennis player"); 
}


