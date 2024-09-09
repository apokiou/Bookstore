
import React, { useState } from 'react';

interface Book {
    id: number;
    title: string;
    image: string;
    rating: number;
}

const BookSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [books, setBooks] = useState<Book[]>([
        { id: 1, title: 'Book Title 1', image: '', rating: 4 },
        { id: 2, title: 'Book Title 2', image: '', rating: 3 },
        { id: 3, title: 'Book Title 3', image: '', rating: 5 },
        // Add more books here
    ]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (filterValue: number) => {
        setFilter(filterValue);
    };

    const filteredBooks = books.filter((book) => {
        const matchesSearchTerm = book.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === null || book.rating === filter;
        return matchesSearchTerm && matchesFilter;
    });

    return (
        <div style={{ padding: '20px' }}>
            <h2>Search to find your new book</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <input 
                type="text" 
                placeholder="Search . . ." 
                value={searchTerm} 
                onChange={handleSearch} 
                style={{ padding: '10px', width: '100%', marginBottom: '20px' }} 
            />

            <div style={{ marginBottom: '20px' }}>
                <strong>Filters:</strong>
                <input 
                    type="radio" 
                    name="filter" 
                    onChange={() => handleFilterChange(3)} 
                    checked={filter === 3} 
                /> 3 Stars
                <input 
                    type="radio" 
                    name="filter" 
                    onChange={() => handleFilterChange(4)} 
                    checked={filter === 4} 
                /> 4 Stars
                <input 
                    type="radio" 
                    name="filter" 
                    onChange={() => handleFilterChange(5)} 
                    checked={filter === 5} 
                /> 5 Stars
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                {filteredBooks.map((book) => (
                    <div key={book.id} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                        <div style={{ height: '150px', backgroundColor: '#f0f0f0' }}>Image</div>
                        <h4>{book.title}</h4>
                        <div>
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} style={{ color: index < book.rating ? '#ff0' : '#ccc' }}>★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
