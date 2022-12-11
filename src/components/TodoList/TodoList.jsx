import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className='list-container'>
            <section className='todo-box'>
                <h2>Active 🔥</h2>
                {todos
                    .filter((t) => t.isDone === false) // false인 애들만 가져오기
                    .map((t) => {
                        return (
                            <Todo
                                title={t.title}
                                contents={t.contents}
                                isDone={t.isDone}
                                setTodos={setTodos}
                                key={t.id} // map에는 key값을 넣어줘야함
                                id={t.id}
                            />
                        );
                    })}
            </section>
            <section className='done-box'>
                <h2>Done ✔️</h2>
                {todos
                    .filter((t) => t.isDone === true) // true인 애들만 가져오기
                    .map((t) => {
                        return (
                            <Todo
                                title={t.title}
                                contents={t.contents}
                                isDone={t.isDone}
                                setTodos={setTodos}
                                key={t.id}
                                id={t.id}
                            />
                        );
                    })}
            </section>
        </div>
    );
};

export default TodoList;
