//Declarando
class User {}
//Instancia de una clase
// const newUser = new User();
class user {
  //metodos
  greetings() {
    return "hello";
  }
}

const gndx = new user();
console.log(gndx.greetings());
const bebeloper = new user();
console.log(bebeloper.greetings());

//constructor

class user {
  // constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello";
  }
}

const David = new user();

//this

class user {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return "Hola";
  }

  greeting() {
    return `${this.speak()}, mi nombre es ${this.name}`;
  }
}

const Rafa = new user("Rafa");
console.log(Rafa.greeting());

ih;
