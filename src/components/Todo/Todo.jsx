import React from "react";
import Button from "../Button/Button";

export default function Todo(props) {
    const { title, contents, isDone, id, setTodos } = props;

    // todo 삭제 
    const deleteTodo = () => {
        // 해당 todo의 id가 기존 id랑 같지 않은 친구를
        // 필터링해서 걸러내고 나머지 todos를 새로운 배열로 업데이트 
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    // 완료된 todo 취소
    const cancelTodo = () => {
        setTodos((prev) =>
            prev.map((t) => {
                if (t.id === id) {
                    // 해당 todo의 id가 기존 id와 같으면
                    // isDone을 false로 변경
                    return { ...t, isDone: false };
                }
                // 다른 todo는 그대로 반환
                return t;
            })
        );
    };

    // todo 완료
    const doneTodo = () => {
        setTodos((prev) =>
            prev.map((t) => {
                if (t.id === id) {
                    // 해당 todo의 id가 기존 id와 같으면
                    // isDone을 true 변경
                    return { ...t, isDone: true };
                }
                // 다른 todo는 그대로 반환
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
                        // isDone이 true인 todo는 취소 버튼 표시
                        <Button handleClick={cancelTodo} value='취소' />
                    ) : (
                        // isDone이 false인 todo는 취소 버튼 표시
                        <Button handleClick={doneTodo} value='완료' />
                    )}
                </div>
            </div>
        </div>
    );
}
