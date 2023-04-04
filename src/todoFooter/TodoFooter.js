import './TodoFooter.css';

const TodoFooter = ({ todos, onClearCompleted }) => {

  let completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <footer>
      <p className='completed'>Completed {completedTodos}/{todos.length}</p>
      <button onClick={onClearCompleted} className="clearCompleted btn btn-outline-dark">Clear completed</button>
    </footer>
  )
}
export default TodoFooter;
