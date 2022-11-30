import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    selectTodos
} from './todoSlice'

export function Todo() {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{listStyle: 'none'}}>
                        <button onClick={() => (dispatch(removeTodo(todo.id)))}>
                            delete
                        </button> {todo.text}</li>
                ))}
            </ul>
            <input
                type='text'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(todo));
                    setTodo('')
                }}
            >Add Todo</button>
        </div>
    )
}