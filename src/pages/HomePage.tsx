
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Bookstore</h1>
            <div style={{ marginTop: '20px' }}>
                <Link to="/search" style={linkStyle}>
                    <button style={buttonStyle}>Search for Books</button>
                </Link>
                <Link to="/add" style={linkStyle}>
                    <button style={buttonStyle}>Add New Book</button>
                </Link>
                <Link to="/book/1" style={linkStyle}>
                    <button style={buttonStyle}>Book Details</button>
                </Link>
                
            </div>
        </div>
    );
};

const linkStyle = { textDecoration: 'none', margin: '0 10px' };
const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

export default HomePage;
