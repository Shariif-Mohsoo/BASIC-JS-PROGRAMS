//here we will see the nested objects
const student = {
  name: "M.Mohsin",
  rollNumber: 22,
  age: 21,
  class: 12,
  exam: {
    totalMarks: 200,
    physics: 90,
    math: 98,
  },
};
/*
student.exam.math = 100;
student.exam.physics = 100;
//objects are mutable
*/
console.log("Here we are going to the Result of ==>", "\n");
console.log(`Name => ${student.name}\n 
Roll Number: ${student.rollNumber} \n
Age: ${student.age}\n
Marks ==>\n
Physics: ${student.exam.physics}\n
Math: ${student.exam.math}\n
Percentage =>${
  ((student.exam.physics + student.exam.math) / student.exam.totalMarks) * 100
}%`);
