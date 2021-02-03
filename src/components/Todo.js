import PropTypes from 'prop-types';
// import { useState } from 'react';

const Todo = ({ todo, removeTodo, changeChecked }) => {
    // const [done, setDone] = useState(false);

    const onClick = (e) => {
        if (e.target.tagName === "LI") {
            changeChecked(todo);
        }
    };
    
    return (
        <li onClick={onClick} className={todo.checked ? "checked" : ""}>
            {todo.name}
            <span
            className="close"
            onClick={() => removeTodo(todo)}
            >
                &#x00D7;
            </span>
        </li>
    );
};

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    changeChecked: PropTypes.func.isRequired
};

export default Todo;
