import { inputName, inputAge, form, resetInputs, list } from "./elements.js";
import { Person } from "./Person.js";

export let database = [];

function removeAll() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.remove();
  });
}

function createAll() {
  database.forEach((person) => {
    const listItemHTML = document.createElement("li");
    listItemHTML.innerHTML = `
      <span>${person.nome}, ${person.idade}</span>
      <button>X</button>
    `;

    list.append(listItemHTML);

    listItemHTML.querySelector("button").addEventListener("click", () => {
      let filteredList = database.filter((filteredPerson) => {
        return filteredPerson.nome != person.nome;
      });
      database = filteredList;
      updateDisplay();
    });
  });
}

function updateDisplay() {
  removeAll();
  createAll();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const person = new Person(inputName.value, Number(inputAge.value));
  person.addOnDatabase();
  resetInputs();
  updateDisplay();
});

updateDisplay();
