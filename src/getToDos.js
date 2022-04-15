import deleteThis from "./delete";
import editThisOne from "./edit";

export default function getToDos () {
    let todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach(element => {
        const newElement = document.createElement('div');
        const tickThis = document.createElement('button');
        const editThis = document.createElement('button');
        editThis.innerHTML = `&#9998;`;
        tickThis.innerHTML = `&#10005;`;
        tickThis.classList.add("tickToDo");
        newElement.classList.add('todo-container');
        newElement.innerHTML = `<table><tr><td>${element.title}</td></tr><tr><td>${element.description} </td></tr><tr><td>Due: ${element.due} <tr><td> Priority: ${element.priority} </td></tr></table>`;
        const newtodos = document.getElementById("newtodos");
        newtodos.appendChild(newElement);
        newElement.append(tickThis);
        newElement.append(editThis);
        editThis.addEventListener('click', function(e){
            editThisOne(e);
        })
        tickThis.addEventListener('click', function(e){
            deleteThis(e);
        })})

}