let author = prompt("Введите author");

let books = [

    {"author":"Joanne Rowling", "name": "Harry Potter and the Philosopher's Stone", "ISBN": "123456", "price": "7699"},
    
    {"author":"Joanne Rowling", "name": "Harry Potter and the Chamber of Secrets", "ISBN": "123456", "price": "4599"},
    
    {"author":"Joanne Rowling", "name": "Harry Potter and the Prisoner of Azkaban", "ISBN": "123456", "price": "8999"},
    
    {"author":"Вениамин Каверин", "name": "Два капитана", "ISBN": "123456", "price": "7500"},
    
    {"author":"Айн Рид", "name": "Атлант расправил плечи", "ISBN": "123456", "price": "11200"}
    
    ];



for(let u of books){
    if(u.author == author){
      console.log(u.author + " " + u.name + " " + u.ISBN + " "+ u.price);
    }
}

