import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
            </header>
        )
    }
}

const headerStyle = {
    background: '#333333',
    color: '#ffffff',
    textAlign: 'center',
    padding: '.7rem'
}
const linkStyle = {
    color: '#ffffff',
}

export default Header
