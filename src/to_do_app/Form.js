import React from "react"
import './Todo.css';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, filteredTodos }) => {
    const inputTextHendler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodosHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText('')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form className="form-todo">
            <input value={inputText} onChange={inputTextHendler} type='text' className='form-input' />
            <button onClick={submitTodosHandler} className='todo-button form-button' type='submit' >
                <i className='fas fa-plus-square' ></i>
            </button>
            <div className='select' >
                <select onChange={statusHandler} name='todos' className='filter-todo' >
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>

            </div>
        </form>
    )
}

export default Form
