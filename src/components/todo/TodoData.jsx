
const TodoData = (props) => {
    const { name, age, data, addNewTodo, todoList } = props
    console.log("check props todoList: ", todoList)
    return (
        <div className='todo-data'>
            {
                todoList.map((cur, acc) => {
                    return (
                        <div className="todo-item">
                            <div>{cur.name}</div>
                            <button>Delete</button>
                        </div>

                    )
                }, [])
            }
            {/* <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(todoList)}
            </div> */}
        </div>
    )
}

export default TodoData 