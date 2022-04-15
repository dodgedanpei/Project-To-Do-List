import './styles.css';
import component from './submit.js'
import clear from './clear.js';
import getToDos from './getToDos';
import filter from './filter';


const title = document.getElementById("title");
const description = document.getElementById("description");
const due = document.getElementById("due");
const priority = document.getElementById("priority");
const btnSubmit = document.getElementById("submit");
const filterBox = document.getElementById("filter");
const newtodos = document.getElementById("newtodos");

filterBox.addEventListener("change",function(){
    filter();
})

btnSubmit.addEventListener('click', function(e){
    if(title.value != ""){
    e.preventDefault();
    component();
    clear();
    }
else{
        alert('You did not put in a title!')
    }})

window.addEventListener('load', function(){
    console.log('loaded')
    let toDosList;
    if(this.localStorage.getItem('todos') === null){
        toDosList = [
            {
                title: 'Christmas',
                description: 'Celebrate Christmas',
                due: '25/12',
                priority: 'High'
            }
        ]
        localStorage.setItem('todos', JSON.stringify(toDosList));
    }
    getToDos();
})