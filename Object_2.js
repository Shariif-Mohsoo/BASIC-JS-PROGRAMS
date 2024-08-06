/*
    COMPUTED PROPERTIES
    WE CAN USE A VARIABLE AS A KEY NAME IN AN 
    OBJECT LITERAL PROPERTY.
    SYNTAX:
    const user = 'Heils';
    const userRole = 
    {
        [user]:'Admin',
    }
*/
// ============================================================
/*
    Create a function that receives an object,key and value as 
    an argument and return the object with new key value pair 
    added in it.
*/
const name = "Hamid Sarfraz";
const role = "Admin";
const salary = 50000;
const person = {
  name: "Hamid Sarfraz",
  [role]: name,
  salary: 60000,
};
let addProp = (person, key, value) => {
  const upDatePerson = person;
  upDatePerson[key] = value;
  return upDatePerson;
};
addProp = (person, key, value) => {
  const copy = { ...person };
  copy[key] = value;
  return copy;
};
addProp = (person, key, value) => ({ ...person, [key]: value });
console.log(person);
console.log(addProp(person, "Duty_Time", "Day"));
