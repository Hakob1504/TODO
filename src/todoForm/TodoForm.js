import { useCallback } from "react";
import { useState } from "react";
import './TodoForm.css';

const TodoForm = ({ todos, setTodos }) => {

    // window.addEventListener('load', () => {
    //     localStorage.setItem('todos', JSON.stringify(todos))
    // })

    let [text, setText] = useState('');

    let addText = useCallback((evt) => {
        evt.preventDefault();
        setText(evt.target.value)
    }, [text])

    let onAdd = (text) => {

        localStorage.setItem('todos', JSON.stringify(todos))

        setTodos([
            ...todos,
            {
                id: Math.random(),
                text: text,
                isCompleted: false
            }
        ])
    }

    let onSubmit = () => {
        if (text.trim().length !== 0) {
            onAdd(text.trim())
            setText('')
        }
    }

    return (
        <div className="d-flex">
            <input placeholder="Write your todo..." onChange={addText} type="text" value={text} id="search" className="form-control" />
            <button onClick={onSubmit} className="add btn btn-outline-dark">Add</button>
        </div>
    )
}

export default TodoForm;
