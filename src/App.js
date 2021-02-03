import { useState } from 'react';

import Header from './components/Header'
import List from './components/List'


function App() {
  const [todos, setTodos] = useState([
    {
      name: "Hit the gym",
      checked: false
    },
    {
      name: "Pay bills",
      checked: false
    },
    {
      name: "Meet George",
      checked: false
    },
    {
      name: "Buy eggs",
      checked: false
    },
    {
      name: "Read a book",
      checked: false
    },
    {
      name: "Organize office",
      checked: false
    }
  ]);

  const addTodo = (title) => {
    if (title === "") {
        alert("You must type something!");
        return;
    }

    setTodos([...todos, {
      name: title,
      checked: false
    }]);
  };

  const removeTodo = (target) => {
    setTodos(todos.filter(todo => todo !== target))
  };

  const changeChecked = (target) => {
    setTodos(todos.map((todo) => {
      if (todo === target) {
        todo.checked = !todo.checked;
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <Header title="To-do List" addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} changeChecked={changeChecked} />
    </div>
  );
}

export default App;
