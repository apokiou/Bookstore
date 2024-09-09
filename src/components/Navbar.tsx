
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav style={navStyle}>
            <ul style={navListStyle}>
                <li style={navItemStyle}>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                <li style={navItemStyle}>
                    <Link to="/add" style={linkStyle}>Add New Book</Link>
                </li>
                <li style={navItemStyle}>
                    <Link to="/search" style={linkStyle}>Search</Link>
                </li>
                <li style={navItemStyle}>
                   
                    <Link to="/book/1" style={linkStyle}>Book Details</Link>
                </li>
            </ul>
        </nav>
    );
};

// Styles for the NavBar
const navStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',
};

const navListStyle: React.CSSProperties = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
};

const navItemStyle: React.CSSProperties = {
    marginRight: '20px',
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '18px',
    fontWeight: 'bold',
};

export default NavBar;
