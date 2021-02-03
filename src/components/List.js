import PropTypes from 'prop-types';
import Todo from './Todo';

const List = ({ todos, removeTodo }) => {
    return (
        <ul id="todoUL">
            {
                todos.map((todo, index) => {
                    return <Todo key={index} todo={todo} removeTodo={removeTodo} />
                })
            }
        </ul>
    );
};

List.propTypes = {
    todos: PropTypes.array,
    removeTodo: PropTypes.func.isRequired
}

export default List;
