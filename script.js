// Methods for carrying out the data functions 
const todoList = {
  todos: [],
  
  addTodo: function(todoText){
    this.todos.push({
     todoText: todoText, 
     completed: false
    }); 
  }, 
  
  changeTodo: function(position, todoText) { 
    this.todos[position].todoText = todoText; 
  }, 
  
  deleteTodo: function(position) { 
   this.todos.splice(position, 1); 
  }, 
  
  toggleCompleted: function(position){ 
    const todo = this.todos[position]; 
    todo.completed = !todo.completed;
  }, 
  
  toggleAll: function(){ 
  
    const totalTodos= this.todos.length; 
    let completedTodos = 0; 
// Get number of completed todos 
    
    for (let i=0; i< totalTodos; i++){ 
      if(this.todos[i].completed === true) { 
      completedTodos++; 
      } 
    } 
  // If everything's true, make everything false 
  
    if(completedTodos === totalTodos){ 
       for (let i=0; i< totalTodos; i++){
        this.todos[i].completed = false; 
       }
       
  // If everything's false, make everything true 
      } else { 
       for (let i=0; i < totalTodos; i++){
        this.todos[i].completed = true; 
         }
      }

  }
};
// handles user interactions with the app 
const handlers = { 

    
  toggleAll: function(){ 
    todoList.toggleAll(); 
    view.displayTodos(); 
    }, 
    
  addTodo: function() { 
    const addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value); 
    addTodoTextInput.value = ''; 
    view.displayTodos(); 

  },
  
  changeTodo: function(num, input){ 
    const changeTodoInput = document.getElementById('changeTodoInput'); 
    const changeTodoPosition = document.getElementById('changeTodoPosition'); 
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoInput.value); 
    changeTodoInput.value = ''; 
    changeTodoPosition.valueAsNumber = ''; 
    view.displayTodos();
  },
  
  deleteTodo: function() { 
    const deleteTodoPosition = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    changeTodoPosition.valueAsNumber = '';
    view.displayTodos();
    }, 
    
  toggleTodo: function(){ 
    const toggleTodoPosition = document.getElementById('toggleTodoPosition'); 
    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber); 
    toggleTodoPosition.value= ''; 
    view.displayTodos();
  }   
 
}; 

// View and display functionality of the app 

const view =  { 
  displayTodos: function() { 
    const todosUl = document.querySelector('ul'); 
    todosUl.innerHTML= '';
    for (let i = 0 ; i < todoList.todos.length; i++){ 
       const createLi = document.createElement('li'); 
       const todo = todoList.todos[i];
       let todoTextWithCheckBox = ''; 
        if (todo.completed === true) { 
         todoTextWithCheckBox ='(x)'+ todo.todoText; 
       } else { 
         todoTextWithCheckBox ='()'+ todo.todoText; 
       } 
        createLi.textContent = todoTextWithCheckBox; 
        todosUl.appendChild(createLi);
     
    } 
  } 
}; 

//*********************************CHANGED DUE TO REFACTORING************************
// var displayTodosButton = document.getElementById('displayTodosButton'); 
// console.log(displayTodosButton); 
// // Make display button accessible to user 

// var displayToggle = document.getElementById('displayToggle'); 
// console.log(displayToggle);
// // and the toggle button too! 


// displayTodosButton.addEventListener('click', function(){
//   todoList.displayTodos(); 
// })

// displayToggle.addEventListener('click', function(){
//   todoList.toggleAll(); 
// })


// Remember to comment out, abstract, and proofread!!!!