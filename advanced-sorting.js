var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort((studentA, studentB) => (studentA.age < studentB.age));
students.sort((studentA, studentB) => (studentA.name > studentB.name));

console.log(students);
