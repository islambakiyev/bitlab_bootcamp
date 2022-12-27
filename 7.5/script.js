let cars = [

  {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
  
  {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
  
  {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
  
  {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
  
  {"name":"Lexus", "price": 60000000, "year": 2017,"volume": 5.7}
  
  ];


let flag = true;

while(flag){
  let n = prompt("INSERT [1] TO SEARCH BY NAME \n INSERT [2] TO SEARCH BY YEAR \n INSERT [3] TO SEARCH BY ENGINE VOLUME \n INSERT [4] TO SEARCH BY PRICE \n INSERT [5] TO EXIT");
  
  if(n==1){
    let name = prompt("INSERT NAME OF CAR:");
    let result = " ";
    for(let car of cars){
      if(car.name == name){
        result = result + " " + car.name + " - " + car.year + " - " + car.volume + " - " + car.price + "\n";
      }
    }
    alert(result);
  
  }else if (n==2){
    let dataFirst = prompt("INSERT YEAR START FROM:");
    let dataFinish = prompt("INSERT YEAR ENDS FROM:");
    let result = " ";
    for(let car of cars){
      if(car.year>=dataFirst && car.year<=dataFinish){
        result = result + " " + car.name + " - " + car.year + " - " + car.volume + " - " + car.price + "\n";
      }
    }
    alert(result);
  }else if (n==3){
    let volumeFirst = prompt("INSERT ENGINE VOLUME START FROM:");
    let volumeFinish = prompt("INSERT ENGINE VOLUME ENDS FROM:");
    let result = " ";
    for(let car of cars){
      if(car.volume>=volumeFirst && car.volume<=volumeFinish){
        result = result + " " + car.name + " - " + car.year + " - " + car.volume + " - " + car.price + "\n";
      }
    }
    alert(result);
  }else if (n==4){
    let priceFirst = prompt("INSERT PRICE START FROM:");
    let priceFinish = prompt("INSERT PRICE ENDS FROM:");
    let result = " ";
    for(let car of cars){
      if(car.price>=priceFirst && car.price<=priceFinish){
        result = result + " " + car.name + " - " + car.year + " - " + car.volume + " - " + car.price + "\n";
      }
    }
    alert(result);
  }else if(n==0 || n==5){
    flag = false;
  }
}