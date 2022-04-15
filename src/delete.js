export default function deleteThis(e){
    const toDoText= (e.target.previousElementSibling.firstElementChild.firstElementChild.innerText);
    e.target.classList.add('completedTask');
    e.target.nextElementSibling.classList.add('hide');
    e.target.previousElementSibling.classList.add('completedTask');
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = toDoText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos", JSON.stringify(todos));        
}