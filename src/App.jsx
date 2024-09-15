
import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([])

  const text = "TheBao";
  const age = 25;

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={text}
        age={age}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
