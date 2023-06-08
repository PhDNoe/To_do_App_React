import React from "react";
import { useState } from "react";
import { FormEvent, ChangeEvent } from "react";

interface Props {
    onSubmit: (todo: { id: number; text: string }) => void;
}

function TodoForm(props: Props) {
    const [input, setInput] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input,
        // });
        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <button className="todo-button">Add todo</button>
        </form>
    );
}

export default TodoForm;