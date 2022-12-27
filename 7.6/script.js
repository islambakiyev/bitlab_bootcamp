let students = [];


let flag = true;

while(flag){
  let n = prompt("PRESS 1 TO ADD STUDENT \n PRESS 2 TO LIST STUDENT \n PRESS 0 TO EXIT");
  
  if(n==1){
    let name = prompt("INSERT NAME:");
    let surname = prompt("INSERT SURNAME:");
    let gpa = prompt("INSERT GPA:");
    let newStudent = {};
    newStudent.name = name;
    newStudent.surname = surname;
    newStudent.gpa = gpa;
    students.push(newStudent);

  
  }else if (n==2){
    let result = " ";
    for(let s of students){
      result = result + " " +  s.name + " " + s.surname + " " + s.gpa + "\n";
    }
    alert(result);
    
  }else if(n==0){
    flag = false;
  }
}