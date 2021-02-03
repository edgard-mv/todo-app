import PropTypes from "prop-types";
import { useState } from "react";
import AddBtn from './AddBtn';

const Input = ({ placeHolder, addTodo }) => {
    const [title, setTitle] = useState("");

    return (
        <>
            <input
            onChange={event => setTitle(event.target.value)}
            id="todoInput"
            type="text"
            value={title}
            placeholder={placeHolder}
            />
            <AddBtn clickHandler={() => {addTodo(title); setTitle("")}} />
        </>
    );
};

Input.propTypes = {
    placeHolder: PropTypes.string,
    addTodo: PropTypes.func.isRequired
};

export default Input;