const myStudents = [
  {
    name: "Malik Saad Naeem",
    marks: 99,
  },
  {
    name: "Tauseeq Ul Hassan",
    marks: 98,
  },
  {
    name: "Muhammad Umair",
    marks: 97,
  },
  {
    name: "Fiza Naureen",
    marks: 99.5,
  },
];
let name;
let highMarks = myStudents[0].marks;
for (let i = 0; i < myStudents.length; i++) {
  if (highMarks < myStudents[i].marks) {
    highMarks = myStudents[i].marks;
    name = myStudents[i].name;
  }
}
console.log(`${name} score highest marks in the class\nMarks ==> ${highMarks}`);
