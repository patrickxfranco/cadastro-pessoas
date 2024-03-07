export const form = document.querySelector("form");
export const inputName = document.querySelector("#name");
export const inputAge = document.querySelector("#age");
export const list = document.querySelector("ul");

export function resetInputs() {
  inputName.value = "";
  inputAge.value = "";
}
