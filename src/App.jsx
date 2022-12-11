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
        title: "제목1",
        contents: "내용1",
        isDone: false,
        id: uuidv4(),
    },
    {
        title: "제목2",
        contents: "내용2",
        isDone: true,
        id: uuidv4(),
    },
    {
        title: "제목3",
        contents: "내용3",
        isDone: false,
        id: uuidv4(),
    },
];

export default App;
