
import React from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;


























  // import React from "react";
  // import "./App.css";  
  // function App() {
  //  // used to add todos
  //   const [todos, setTodos] = React.useState([]);
   // keeps track of current todo gives string
    // const [todo, setTodo] = React.useState("");
   // function runs when function is ran
  //  function handleSubmit(e) {
     // stops the refresh from happening then form submitted
      // e.preventDefault();
      // const newTodo = {
       // gives unique time
    //    id: new Date().getTime(),
    //    text: todo,
    //    completed: false,
    // };
     // take in new todo and add it to the TODOs array
     // this will take the todos array and make a new one and add the todo to it without
     // mutating the data.
    //  setTodo([...todos].concat(newTodo));
     // after submitted this will set the array back to its original value inside the
     // the input
    //  setTodo("");
    // }

  //  return (
  //  <div className="App">
      {/* handleSubmit runs whenever a button that is a submit type is pressed the function runs */}
      {/* <form onSubmit={handleSubmit}>  */}
        {/* targeting the event in the input and the value is the todo "hook" */}
         {/* <input
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

 export default App;  */}

// two way data binding
