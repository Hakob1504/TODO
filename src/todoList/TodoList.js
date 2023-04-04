import TodoItem from '../todoItem/TodoItem';

const TodoList = ({ todos, onChange, setTodos }) => {

    return (
        <div className='d-flex flex-column gap-2'>
            {
                todos.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        onChange={onChange}
                    />
                })
            }
        </div>
    )
}

export default TodoList
