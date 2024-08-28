let counter = 1;

function addTodoWithRemoveBtn() {
  const inputElt = document.querySelector(".input-element");
  const todoListElt = document.querySelector(".todo-list");

  const pElt = document.createElement("p");
  const btnElt = document.createElement("button");
  const divElt = document.createElement("div");

  pElt.innerHTML = counter + "  " + inputElt.value;
  pElt.style.display = "inline-block";

  btnElt.innerHTML = "Remove Todo";
  btnElt.setAttribute("onclick", `removeTodo(${counter})`);

  divElt.appendChild(pElt);
  divElt.appendChild(btnElt);
  divElt.setAttribute("id", counter);
  divElt.setAttribute("class", "todo-item");

  todoListElt.appendChild(divElt);

  counter++;
  inputElt.value = "";
  inputElt.focus();
}

function removeTodo(index) {
  const eltToRemove = document.getElementById(index);

  if (eltToRemove) {
    eltToRemove.parentNode.removeChild(eltToRemove);
  }
}
