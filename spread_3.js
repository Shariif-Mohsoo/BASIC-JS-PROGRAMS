/*
        SPREAD IN OBJECT LITERALS
    --->IT HELP US TO COPY FROM ONE
            OBJECT INTO ANOTHER OBJECT.
*/
const student = {};
student["Name"] = "Mohsin";
student["Roll Number"] = 22;
student["Semester Enrolled"] = "3rd";
for (let key in student) {
  console.log(key, ": ", student[key]);
}
console.log("\n");
const upDateStudent = { ...student, program: "BSCS" };
upDateStudent.Name = "Imran";
upDateStudent["Roll Number"] = 11;
upDateStudent["Semester Enrolled"] = "5th";
for (let key in upDateStudent) {
  console.log(key, ": ", upDateStudent[key]);
}
console.log("\n");
const newStudent = { ...upDateStudent, ...student };
for (let key in newStudent) {
  console.log(key, ": ", newStudent[key]);
}
/*
    ====> NOTE :
    ---------IT WILL NOT OVERWRITE THE VALUES OF ARRAY'S BUT IN CASE OF 
    OBJECT IT OVERWRITE THE KEY'S WITH SAME NAME. BE ALERT.
    ---------IN CONTEXT OF ARRAY IT DOESN'T WORK,MY MEAN TO SAY
    WE CAN'T SPREAD OBJECT IN AN ARRAY, BUT ARRAY CAN BE SPREAD IN AN ARRAY.
    const obj = [...array];//it works.
    const array = [...student]; //error.
    const array1 = [{...student},{...upDateStudent}];//it works
    --------IT WORKS ONLY WHEN WE SPREAD IT WITH IN AN OBJECT.
*/
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 1, 3, 5, 4];
array2.sort((a, b) => a - b);
// array2.sort((a, b) => b - a);
const newArray = [...array1, ...array2];
console.log(newArray);
const comboObjectsArrays = [...array1, { ...student }];
console.log(comboObjectsArrays);
//alter, an object can be overwritten if has same key's name.
const objArray = { ...array1, ...array2 };
console.log(objArray);
