import TodoData from './TodoData'
import TodoNew from './TodoNew'
import './todo.css'
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {

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

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo);
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Nothing</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            <TodoData
                name={text}
                age={age}
                todoList={todoList}
                deleteTodo={deleteTodo}
            />
            <div className='todo-image'>
                <img className='logo' src={reactLogo} />
            </div>
        </div>
    )
}

export default TodoApp