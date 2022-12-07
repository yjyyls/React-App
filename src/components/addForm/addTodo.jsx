import React from "react";

const AddTodo = (todo) => {
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(todo.title.trim() === '' || todo.content.trim() === '') return;      
        const newTodo = {
            id: Date.now(),
            title: title,
            content: content,
            isDone: false
        }  
        setTodo([...todo, newTodo])
    }
   
    return (
        <form onSubmit={onSubmitHandler} className='add-form'>
            <div className='input-box'>
                <label className='form-label'>제목</label>
                <input
                    type='text'
                    name='title'
                    value={todo.title}
                    className='input-title'
                />
                <label className='form-label'>내용</label>
                <input
                    type='text'
                    name='content'
                    value={todo.content}
                    className='input-content'
                />
            </div>
            <button className='add-button'>
                추가
            </button>
        </form>
    );
};

export default AddTodo;
