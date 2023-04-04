import { memo, useCallback } from 'react';
import { useRef, useState } from 'react';
import TodoFooter from '../todoFooter/TodoFooter';
import TodoForm from '../todoForm/TodoForm';
import TodoList from '../todoList/TodoList';
import './App.css';

export default function App() {

  let [todos, setTodos] = useState([]);
  let calls = useRef(0)
  calls.current++


  let onChange = (newTodo) => {
    setTodos(todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo
      }
      return todo
    }))
  }

  let onClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  return (
    <main className='container w-50 mt-5 p-3 d-flex flex-column gap-3'>
      <h2 className='logo text-center'>TODO</h2>
      <TodoForm
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        onChange={onChange}
      />
      <TodoFooter
        onClearCompleted={onClearCompleted}
        todos={todos}
        setTodos={setTodos}
      />
    </main>
  );
}
