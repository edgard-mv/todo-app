import PropTypes from 'prop-types';
import Todo from './Todo';

const List = ({ todos, removeTodo, changeChecked }) => {
    return (
        <ul id="todoUL">
            {
                todos.map((todo, index) => {
                    return <Todo key={index} todo={todo} removeTodo={removeTodo} changeChecked={changeChecked} />
                })
            }
        </ul>
    );
};

List.propTypes = {
    todos: PropTypes.array,
    removeTodo: PropTypes.func.isRequired,
    changeChecked: PropTypes.func.isRequired
}

export default List;
