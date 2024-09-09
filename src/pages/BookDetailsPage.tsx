
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetailPage: React.FC = () => {
    const { id } = useParams(); 

    
    const book = {
        title: "Sample Book Title",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Author Name",
        year: 1970,
        pages: 874,
        publisher: "Self Published",
        isbn10: "1611433124",
        isbn13: "1789101423711",
        imageUrl: "path/to/image",
        categories: ["Category 1", "Category 2"],
        rating: 4,
    };

    return (
        <div style={containerStyle}>
            <div style={breadcrumbStyle}>
                Home / Category
            </div>
            <div style={contentStyle}>
                <div style={imageContainerStyle}>
                    <img
                        src={book.imageUrl}
                        alt={book.title}
                        style={imageStyle}
                    />
                </div>
                <div style={detailsStyle}>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                    <button style={buttonStyle}>Favorite</button>
                    <button style={buttonStyle}>Share</button>
                    <div>
                        <strong>Category:</strong>{" "}
                        {book.categories.map((category) => (
                            <span key={category}>#{category} </span>
                        ))}
                    </div>
                    <div>
                        <strong>Year:</strong> {book.year}
                    </div>
                    <div>
                        <strong>Number of Pages:</strong> {book.pages}
                    </div>
                    <div>
                        <strong>Publisher:</strong> {book.publisher}
                    </div>
                    <div>
                        <strong>ISBN-10:</strong> {book.isbn10}
                    </div>
                    <div>
                        <strong>ISBN-13:</strong> {book.isbn13}
                    </div>
                    <button style={buyButtonStyle}>Buy</button>
                </div>
            </div>

            <div style={relatedBooksStyle}>
                <h3>Other Books You May Like</h3>
                <div style={relatedBooksGridStyle}>
                   
                    <div style={relatedBookStyle}>Title</div>
                    <div style={relatedBookStyle}>Title</div>
                    <div style={relatedBookStyle}>Title</div>
                    <div style={relatedBookStyle}>Title</div>
                </div>
            </div>
        </div>
    );
};

// Basic styles (using React.CSSProperties)
const containerStyle: React.CSSProperties = { padding: "20px" };
const breadcrumbStyle: React.CSSProperties = { fontSize: "14px", color: "#888" };
const contentStyle: React.CSSProperties = { display: "flex", marginTop: "20px" };
const imageContainerStyle: React.CSSProperties = { flex: 1 };
const imageStyle: React.CSSProperties = { width: "100%", maxHeight: "400px", objectFit: "cover" };
const detailsStyle: React.CSSProperties = { flex: 2, paddingLeft: "20px" };
const buttonStyle: React.CSSProperties = {
    margin: "5px",
    padding: "10px 15px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    cursor: "pointer",
    borderRadius: "5px",
};
const buyButtonStyle: React.CSSProperties = {
    margin: "10px 0",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};
const relatedBooksStyle: React.CSSProperties = { marginTop: "40px" };
const relatedBooksGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
};
const relatedBookStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center", 
};

export default BookDetailPage;
