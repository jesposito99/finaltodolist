const form = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoName');

function createTodos() {

    if(!listvalues) {
      todoList.innerHTML = ''
    }
    else {
      todoList.innerHTML = listvalues;
    }
  }

todoList.addEventListener('click', function(event){
    
    if(event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
})    

todoList.addEventListener('click', function(event){
    
    if(event.target.tagName === 'INPUT'){
        const completetodo = event.target.parentElement;
        completetodo.classList.toggle ('finished');
    }

})

form.addEventListener('submit', function(event){
  event.preventDefault();
  const newTodo = document.createElement('li');
  const doneBtn = document.createElement('input');
  const deleteBtn = document.createElement('button')
  doneBtn.setAttribute('type', 'checkbox')
  deleteBtn.innerText = "X";
  newTodo.innerText = todoName.value;
  newTodo.prepend(doneBtn);
  newTodo.appendChild(deleteBtn);
  todoList.appendChild(newTodo);
  todoName.value = '';
  
})






