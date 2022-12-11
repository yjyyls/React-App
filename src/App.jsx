import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddForm from "./components/addForm/AddForm";
import Header from "./components/header/Header";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState(initialState);

    return (
        <div className='container'>
            <Header>My Todo List</Header>
            <AddForm setTodos={setTodos} todos={todos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

// todos 초기값
const initialState = [
    {
        title: "리액트 공부하기",
        contents: "리액트 공부",
        isDone: false,
        id: uuidv4(),
    },
    {
        title: "자바스크립트 공부하기",
        contents: "자바스크립트 공부",
        isDone: true,
        id: uuidv4(),
    },
    {
        title: "운동하기",
        contents: "걷기 운동이라도 하기",
        isDone: false,
        id: uuidv4(),
    },
];

export default App;
