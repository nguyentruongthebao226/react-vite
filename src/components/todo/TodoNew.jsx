
import { useState } from "react"


const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState('TheBao')
    const { addNewTodo } = props;


    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            ></input>
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew