import PropTypes from 'prop-types';
import { useState } from 'react';

const Todo = ({ todo, removeTodo }) => {
    const [done, setDone] = useState(false);
    
    return (
        <li onClick={() => setDone(!done)} className={done ? "checked" : ""}>
            {todo}
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
    todo: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default Todo;
