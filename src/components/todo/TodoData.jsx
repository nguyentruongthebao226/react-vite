
const TodoData = (props) => {
    const { name, age, data, addNewTodo, todoList } = props
    console.log("check props todoList: ", todoList)
    return (
        <div className='todo-data'>
            {
                todoList.map((cur, acc) => {
                    return (
                        <div className={`todo-item ${acc}`} key={acc}>
                            <div>{cur.name}</div>
                            <button>Delete</button>
                        </div>

                    )
                }, [])
            }
        </div>
    )
}

export default TodoData 