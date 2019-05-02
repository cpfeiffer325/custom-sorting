var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function customComparator(array) {
  array.sort((studentA, studentB) => (studentA.age < studentB.age));
  array.sort((studentA, studentB) => (studentA.name > studentB.name));

  return array;
}

console.log(customComparator(students));

// students.sort(function(A, B) {
// ... return A.age - B.age;
// ... })[0];

// students.sort(function(A, B) {
// ... return nameA.name - nameB.name;
// ... });
