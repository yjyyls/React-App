import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className='list-container'>
            <section className='todo-box'>
                <h2>Active</h2>
                {todos
                    .filter((t) => t.isDone === false)
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
            <section className='done-box'>
                <h2>Done</h2>
                {todos
                    .filter((t) => t.isDone === true)
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
