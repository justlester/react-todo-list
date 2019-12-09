import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    

    render() {
        return (
            <form onSubmit={this.onSubmit} style={addTodoForm}>
                <input 
                    style={addTodoInput}
                    type="text" 
                    name="title" 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <button style={addTodoBtn} type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}


const addTodoForm = {
    display: 'flex',
}
const addTodoInput = {
    flex: '10',
    padding: '.5rem'
}
const addTodoBtn = {
    flex: '1',
    backgroundColor: '#2196f3',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem'
}

export default AddTodo
