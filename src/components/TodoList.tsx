import TodoForm from "./TodoForm";
import { useState } from "react";

interface Todo_interface {
    id: Number;
    text: string;
}
function TodoList() {
    const [todos, setTodos] = useState<{ id: Number; text: string }[]>([]);

    const addTodo = (todo: Todo_interface) => {
        if (!todo.text || /^\s+/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(newTodos);
    };

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    );
}

export default TodoList;
