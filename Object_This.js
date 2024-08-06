//THIS (this) is the reference to the object.
const person = {
  first: "Muhammad",
  last: "Mohsin",
  nickName: "Mosooo",
  fullName() {
    const { first, last, nickName } = this;
    console.log(`${first} ${last} AKA ${nickName}`);
  },
  greet() {
    console.log(`Hi, ${this.nickName}`);
  },
};
person.fullName();
person.greet();
