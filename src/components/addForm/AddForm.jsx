import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddForm({setTodos}) {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const addTodoHandler = (event) => {
        event.preventDefault();
        const newTodo = {
            title: title,
            contents: contents,
            isDone: false,
            id: uuidv4(),
        };
        if (title.trim() === "" || contents.trim() === "") {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        setTodos((prev) => {
            return [...prev, newTodo];
        });
        setTitle("");
        setContents("");
    };

    return (
        <form className='add-form' onSubmit={addTodoHandler}>
            <div className='input-box'>
                <label className='form-label'>제목</label>
                <input
                    // autocomplete='off'
                    type='text'
                    name='title'
                    value={title}
                    className='input-title'
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label className='form-label'>내용</label>
                <input
                    // autocomplete='off'
                    type='text'
                    name='content'
                    value={contents}
                    className='input-content'
                    onChange={(e) => {
                        setContents(e.target.value);
                    }}
                />
            </div>
            <button className='add-button'>추가</button>
        </form>
    );
}
