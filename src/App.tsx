
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import SearchPage from './pages/BookSearchPage';
import BookDetailsPage from './pages/BookDetailsPage'; 
import NavBar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <NavBar /> 
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddBookPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/book/:id" element={<BookDetailsPage />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
