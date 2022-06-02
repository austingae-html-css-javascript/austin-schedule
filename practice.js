var students = [];

var student1 = 1;

students.push(student1);

localStorage.setItem("students", JSON.stringify(students));

var stored = JSON.parse(localStorage.getItem("students"));

var student2 = 2;

stored.push(student2);

localStorage.setItem("students", JSON.stringify(stored));

var result = JSON.parse(localStorage.getItem("students"));

console.log(result);