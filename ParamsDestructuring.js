//Here we learn how to destructure the params
const getFullName = ({ firstName, lastName }) => {
  return `${firstName + " " + lastName}`;
};
const student = {
  firstName: "Muhammad",
  lastName: "Ali",
  rollNumber: 1,
};
console.log(getFullName(student));
//----------------------SAME FOR ARRAY----------------------------
const praseResponse = ([protocal, statusCode, contentType]) => {
  console.log(statusCode);
};
const response = ["HTTP://1.1", "200 OK", "application/json"];
praseResponse(response);
