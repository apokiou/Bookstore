
import React from 'react';

const BookDetails: React.FC = () => {
    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            <div style={{ marginRight: '20px' }}>
                <img src="/path/to/your/image.jpg" alt="Book cover" style={{ width: '200px', height: '300px' }} />
            </div>
            <div>
                <h2>Book Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <button>Favorite</button>
                <button>Share</button>
                <ul>
                    <li>Category: #tag1, #tag2</li>
                    <li>Year: 1970</li>
                    <li>Number of Pages: 874</li>
                    <li>Publisher: Self Published</li>
                    <li>ISBN-10: 1611433124</li>
                    <li>ISBN-13: 1789101423711</li>
                </ul>
                <button>BUY</button>
            </div>
        </div>
    );
};

export default BookDetails;
