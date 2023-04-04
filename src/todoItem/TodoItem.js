import './TodoItem.css';

const TodoItem = ({ todo, todos, setTodos, onChange }) => {

  let onDelete = (todo) => {
    setTodos(todos.filter((t) => {
      return t.id !== todo.id
    }))
  }

  return (
    <div className="itemDiv d-flex justify-content-between align-items-center p-2">
      <form action="#">
        <input checked={todo.isCompleted} type="checkbox" className="form-check-input" onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked 
          })
        }}/>
      </form>
      <p className="itemName mt-2" id={todo.id}>{todo.text}</p>
      <button className="clearBtn btn btn-close" onClick={() => {
        onDelete(todo)
      }}></button>
    </div>
  )
}

export default TodoItem
