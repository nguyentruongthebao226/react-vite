
const TodoData = (props) => {
    const { name, age, data, addNewTodo, todoList, deleteTodo } = props

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className='todo-data'>
            {
                todoList.map((cur, acc) => {
                    return (
                        <div className={`todo-item ${acc}`} key={acc}>
                            <div>{cur.name}</div>
                            <button style={{ cursor: "pointer" }}
                                onClick={() => handleClick(cur.id)}>Delete</button>
                        </div>

                    )
                }, [])
            }
        </div>
    )
}

export default TodoData 