import React from 'react'
const Todo = () => {
const [todos, setTodos] = React.useState([]);
// keeps track of current todo gives string
  const [todo, setTodo] = React.useState("");
// function runs when function is ran
  function handleSubmit(e) {
  // stops the refresh from happening then form submitted
    e.preventDefault();
   const newTodo = {
    // gives unique time
   id: new Date().getTime(),
   text: todo,
    completed: false,
  };
  // take in new todo and add it to the TODOs array
  // this will take the todos array and make a new one and add the todo to it without
  // mutating the data.
   setTodos([...todos].concat(newTodo));
  // after submitted this will set the array back to its original value inside the
  // the input
   setTodo("");
  }

  return (
 <div className="App">
   {/* handleSubmit runs whenever a button that is a submit type is pressed the function runs */}
   <form onSubmit={handleSubmit}>  
     {/* targeting the event in the input and the value is the todo "hook" */}
       <input
       type="text"
       onChange={(e) => setTodo(e.target.value)}
       value={todo}
     />
<button type="submit">Add Todo</button>
   </form><div>
   {todos.map((todo) => (
     <div key={todo.id}>{todo.text}</div>
   ))}
 </div>
  </div>
);
}

export default Todo;  

// two way data binding