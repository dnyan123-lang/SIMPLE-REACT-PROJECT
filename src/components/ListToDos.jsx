import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListToDos = () => {
    const [todo, setToDo] = useState([])

    async function fetchDate() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setToDo(res.data)
    }

    useEffect(() => {
        fetchDate()
    }, [])

    return (
        <div className="todo-container">
            <h2 className="todo-header">My Daily Tasks</h2>
            <ul className="todo-list">
                {todo.map((td, i) => (
                    <li key={i} className={`todo-item ${td.completed ? 'completed' : 'pending'}`}>
                        
                        <span className="todo-icon">{td.completed ? '✅' : '⏳'}</span>
                        <span className="todo-text">{td.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListToDos