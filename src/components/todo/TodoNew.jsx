
import { useState } from "react"


const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState('TheBao')
    const { addNewTodo } = props;


    const handleClick = () => {
        addNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input type="text" onChange={(even) => handleOnChange(event.target.value)}></input>
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew