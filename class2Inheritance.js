//1st class
//parent class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}
//2nd class
//let's perform the inheritance here
//for the purpose of inheritance we use (extends keyword)
//for the purpose of calling the constructor of base class (super()) will be used
class Cat extends Pet {
  constructor(name, age, lifeLeft = 9) {
    super(name, age);
    this.lifeLeft = lifeLeft;
  }
  meow() {
    console.log("MEOWWW!!!!!");
  }
}
//3rd class
class Dog extends Pet {
  bark() {
    console.log("WOOF");
  }
}

const dog = new Dog("Bull", 9);
console.log(dog);
dog.bark();
const cat = new Cat("Mio", 2);
console.log(cat);
cat.meow();
