
const TodoNew = () => {
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(name)
    }

    return (
        <div className='todo-new'>
            <input type="text" onChange={(even) => handleOnChange(event.target.value)}></input>
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew