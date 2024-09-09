
import React from 'react';

const AuthorInfo: React.FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
            <div style={{ marginRight: '10px' }}>
                <img src="/path/to/author-image.jpg" alt="Author" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div>
                <p>Author Name</p>
                <div>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;
