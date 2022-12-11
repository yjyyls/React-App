import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddForm({ setTodos }) {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    // form의 onSubmit을 통해 Todo 추가하는 함수
    const addTodoHandler = (event) => {
        // 원래 onSubmit이 가지고 있는 고유기능 삭제 --> 새로고침 방지
        event.preventDefault();

        // title, contents를 가져와서 todos에 넣어주기(setTodos)
        // 그래서 새로운 Todo 객체 만들기
        const newTodo = {
            title: title,
            contents: contents,
            isDone: false,
            id: uuidv4(),
        };
        // title, contents 앞뒤 공백을 제거해주고,
        // 둘 중 하나라도 칸이 비어있으면 alert 띄우고 끝.
        if (title.trim() === "" || contents.trim() === "") {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        // newTodo를 todos에 넣어주기
        setTodos((prev) => {
            return [...prev, newTodo];
        });

        // input의 value에 적힌 값 초기화
        setTitle("");
        setContents("");
    };

    return (
        <form className='add-form' onSubmit={addTodoHandler}>
            <div className='input-box'>
                <label className='form-label'>제목</label>
                <input
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
