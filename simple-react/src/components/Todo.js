import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(elem => 
            elem.id !== todo.id
        ))
    }
    const completeHandler = () =>{
        setTodos(todos.map(elem => {
            if(elem.id === todo.id) {
                return {
                    ...elem, completed: !elem.completed
                }
            }
            return elem;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{ todo.text }</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;