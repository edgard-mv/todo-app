import PropTypes from 'prop-types';
import Input from './Input'

const Header = ({ title, addTodo }) => {
    return (
        <div className="header">
            <h2>{ title }</h2>
            <Input placeHolder="Tittle..." addTodo={addTodo} />
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    addTodo: PropTypes.func.isRequired
};

export default Header;
