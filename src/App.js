import React from 'react'
import './App.css';

function App() {
  // used to add todos
  const [todos, setTodos] = React.useState([])
  // keeps track of current todo gives string
  const [todo, setTodo] = React.useState("")

  return (
    <div className="App">
      <form>
        {/* targeting the event in the input and the value is the todo "hook" */}
        <input type='text'onChange={(e)=> setTodo(e.target.value)}/>
        <button type='submit'>Add Journal Item</button>
      </form>
  
    </div>
  );
}

export default App;
