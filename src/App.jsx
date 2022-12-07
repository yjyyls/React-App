import "./App.css";
import AddTodo from './components/addForm/addTodo';
import Header from './components/header/Header';
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <div className='container'>
            <Header />
            <AddTodo />
            <TodoList />
        </div>
    );
}

export default App;
