import { database } from "./main.js";

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  addOnDatabase() {
    const person = {
      nome: this.name,
      idade: this.age,
    };

    database.push(person);

    console.log(database);
  }
}
