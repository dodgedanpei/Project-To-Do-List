export default function editThisOne(e){
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
    }
    }