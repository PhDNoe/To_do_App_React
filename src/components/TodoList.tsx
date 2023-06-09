import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

interface Todo_interface {
    id: number;
    text: string;
    isComplete: boolean;
}

function TodoList() {

    const [todos, setTodos] = useState<Todo_interface[]>([]);

    const addTodo = (todo: Todo_interface) => {
        if (!todo.text || /^\s+/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(newTodos);
    };

    const updateTodo = (todoId: number, newValue: Todo_interface): void => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    const removeTodo = (id: number) => {

        const removeArr = [...todos].filter(todo => {
            return todo.id !== id
        });


        setTodos(removeArr);
    }

    const completeTodo = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })

        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
