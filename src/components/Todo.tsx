import { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

interface Todo_interface {
    id: number;
    text: string;
    isComplete: boolean;
}

interface Deeper_interface {
    todos: Todo_interface[];
    completeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    updateTodo: (todoId: number, newValue: Todo_interface) => void;
}



function Todo({ todos, completeTodo, removeTodo, updateTodo }: Deeper_interface) {

    // const [edit, setEdit] = useState<{ id: number, value: string }>({ id: -1, value: "" });
    const [edit, setEdit] = useState<Todo_interface>({ id: -1, text: "", isComplete: false });

    const submitUpdate = (new_todo: { id: number; text: string; isComplete: boolean }) => {
        updateTodo(edit.id, new_todo);
        setEdit({
            id: -1,
            text: '',
            isComplete: false
        });
    }

    if (edit.id !== -1) {
        return <TodoForm onSubmit={submitUpdate} />
    }

    return (
        <>
            {todos.map((todo, index) => {
                return (

                    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                        <div key={todo.id} onClick={() => { completeTodo(todo.id) }}>
                            {todo.text}
                        </div>

                        <div className='icons' key={index + "100"}>
                            <RiCloseCircleLine
                                onClick={() => { removeTodo(todo.id) }}
                                className='delete-icon'
                            />
                            <TiEdit
                                onClick={() => { setEdit({ id: todo.id, text: todo.text, isComplete: todo.isComplete }) }}
                                className='edit-icon'
                            />
                        </div>
                    </div >

                )

            })
            }
        </>
    )
}

export default Todo