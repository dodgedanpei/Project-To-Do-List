export default function component(){
    class toDo {
        constructor(title, description, due, priority){
            this.title = title;
            this.description = description;
            this.due = due;
            this.priority = priority
        }
    }
    if(!(title.value === "")){
    const element = document.createElement('div');
    const tickThis = document.createElement('button');
    const editThis = document.createElement('button');
    editThis.innerHTML = `&#9998;`;
    tickThis.innerHTML = `&#10005;`;
    tickThis.classList.add("tickToDo");
    element.classList.add('todo-container');
    element.innerHTML = `<table><tr><td>${title.value}</td></tr><tr><td>${description.value} </td></tr><tr><td>Due: ${due.value} <tr><td> Priority: ${priority.value} </td></tr></table>`;
    const newToDo = new toDo(title.value, description.value, due.value, priority.value);
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newToDo);
    localStorage.setItem('todos',JSON.stringify(todos));
    const newtodos = document.getElementById("newtodos");
    newtodos.appendChild(element);
    element.append(tickThis);
    element.append(editThis);
    editThis.addEventListener('click', function(e){
        const toDoText= (e.target.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.innerText);
        const container = document.getElementById('container-edit');
        const toDoContainer = document.getElementById('newtodos');
        toDoContainer.classList.add('hide');
        container.classList.remove('hide');
        const title = document.getElementById("title-edit");
        const description = document.getElementById("description-edit");
        const due = document.getElementById("due-edit");
        const priority = document.getElementById("priority-edit");
        const btnSubmit = document.getElementById("submit-edit");
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        } else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        for(let i = 0; i < todos.length; i++){
            if(todos[i].title === toDoText){
                console.log(todos[i].title);
                title.value = todos[i].title;
                description.value = todos[i].description;
                due.value = todos[i].due;
                priority.value = todos[i].priority; 
                btnSubmit.addEventListener('click',function(){
                    const toDoContainer = document.getElementById('newtodos');
                    toDoContainer.classList.remove('hide');
                    todos[i].title = title.value;
                    todos[i].description = description.value;
                    todos[i].due = due.value;
                    todos[i].priority = priority.value;
                    localStorage.setItem("todos", JSON.stringify(todos));
                })
            }
        }    })
    tickThis.addEventListener('click', function(e){
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
    })}

}
