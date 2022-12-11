import React from "react";

export default function Header({ children }) {
    // 열고 닫는 태그 사이의 내용이 기본적으로 children값이 됨, 그래서 프롭스로 넣을 수 있음
    return (
        <header className='head'>
            <h1>{children}</h1>
        </header>
    );
}