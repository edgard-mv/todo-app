import { useState } from 'react';

import Header from './components/Header'
import List from './components/List'


function App() {
  const [todos, setTodos] = useState([
    "Hit the gym",
    "Pay bills",
    "Meet George",
    "Buy eggs",
    "Read a book",
    "Organize office"
  ]);

  const addTodo = (title) => {
    if (title === "") {
        alert("You must type something!");
        return;
    }

    setTodos([...todos, title]);
  };

  const removeTodo = (title) => {
    setTodos(todos.filter(todo => todo !== title))
  };

  return (
    <div className="App">
      <Header title="To-do List" addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
