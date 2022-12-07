import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            content: "리액트 기초 공부",
            isDone: false,
        },
        {
            id: 2,
            title: "리액트 공부하기",
            content: "리액트 기초 공부하기",
            isDone: true,
        },
    ]);
    return (
        <div className='list-container'>
            <div className='todo-box'>
                <h2>Active</h2>
                {todos.map((todo) => (
                    <div className='box' key={todos.id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.content}</p>
                        <div className='button-set'>
                            <button>삭제</button>
                            <button>완료</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='done-box'>
                <h2>Done</h2>
                {todos.map((todo) => (
                    <div className='box' key={todos.id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.content}</p>
                        <div className='button-set'>
                            <button>삭제</button>
                            <button>취소</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
