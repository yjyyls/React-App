import React from "react";
import Button from "../Button/Button";

export default function Todo(props) {
    const { title, contents, isDone, id, setTodos } = props;

    const deleteTodo = () => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const cancelTodo = () => {
        setTodos((prev) =>
            prev.map((t) => {
                if (t.id === id) {
                    return { ...t, isDone: false };
                }
                return t;
            })
        );
    };

    const doneTodo = () => {
        setTodos((prev) =>
            prev.map((t) => {
                if (t.id === id) {
                    return { ...t, isDone: true };
                }
                return t;
            })
        );
    };

    return (
        <div>
            <div className='box'>
                <h2>{title}</h2>
                <p>{contents}</p>
                <div className='button-set'>
                    <Button handleClick={deleteTodo} value='삭제' />
                    {isDone ? (
                        <Button handleClick={cancelTodo} value='취소' />
                    ) : (
                        <Button handleClick={doneTodo} value='완료' />
                    )}
                </div>
            </div>
        </div>
    );
}
