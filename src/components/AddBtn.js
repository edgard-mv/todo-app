import PropTypes from 'prop-types';

const AddBtn = ({ clickHandler }) => {
    return (
        <span id="addTodoBtn" onClick={clickHandler}>Add</span>
    );
};

AddBtn.propTypes = {
    clickHandler: PropTypes.func.isRequired
};

export default AddBtn;
