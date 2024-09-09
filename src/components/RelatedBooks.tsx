
import React from 'react';

const RelatedBooks: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h3>Other Books You May Like</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <img src="/path/to/book1.jpg" alt="Related Book 1" style={{ width: '100px', height: '150px' }} />
                    <p>Title</p>
                </div>
                <div>
                    <img src="/path/to/book2.jpg" alt="Related Book 2" style={{ width: '100px', height: '150px' }} />
                    <p>Title</p>
                </div>
                <div>
                    <img src="/path/to/book3.jpg" alt="Related Book 3" style={{ width: '100px', height: '150px' }} />
                    <p>Title</p>
                </div>
                <div>
                    <img src="/path/to/book4.jpg" alt="Related Book 4" style={{ width: '100px', height: '150px' }} />
                    <p>Title</p>
                </div>
            </div>
        </div>
    );
};

export default RelatedBooks;
