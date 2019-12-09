import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? 'rgba(76, 175, 80, 0.5)' : '#ffffff',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #cccccc',
            display:'flex',
            transition: '.5s background-color ease-in-out'
        }
    }

    render() {
        const { id,title,completed} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <label style={toDoDetails}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} checked={completed}/>
                    &nbsp;
                    {title}
                </label>
                <div style={todoRmBtnContainer}>
                    <button onClick={this.props.delTodo.bind(this,id)} style={todoRmBtn}>Remove</button>
                </div>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const toDoDetails = {
    flexBasis: '0',
    flexGrow: '1',
    maxWidth: '100%'
}

const todoRmBtnContainer = {

    flex: '0 0 auto',
    width: 'auto',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}
const todoRmBtn = {
    background: '#f44336',
    color: '#ffffff',
    border: 'none',
    padding: '0.2rem 0.3rem',
    borderRadius: '50rem',
    cursor: 'pointer',
}

export default TodoItem
