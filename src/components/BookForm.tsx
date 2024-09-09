import React, { useState } from 'react';
import '../BookForm.css';

interface Errors {
  title?: string;
  description?: string;
  categories?: string;
  authorName?: string;
  publisher?: string;
  year?: string;
  pageNumbers?: string;
  rating?: string;
  isbn10?: string;
  isbn13?: string;
}

const validateTitle = (title: string) => {
  const maxLength = 120;
  const minLength = 10;
  const specialCharRegex = /^[a-zA-Z0-9@”#&*!]*$/;
  if (title.length < minLength || title.length > maxLength) return 'Title must be between 10 and 120 characters.';
  if (!specialCharRegex.test(title)) return 'Title contains invalid characters.';
  return '';
};

const validateDescription = (description: string) => {
  if (description.length > 512) return 'Description must be less than 512 characters.';
  if (description.charAt(0) !== description.charAt(0).toUpperCase()) return 'Description must start with an uppercase letter.';
  return '';
};

const validateCategories = (categories: string) => {
  if (categories.length === 0) return 'Categories is required.';
  return '';
};

const validateAuthorName = (authorName: string) => {
  if (authorName.length === 0) return 'Author Name is required.';
  return '';
};

const validatePublisher = (publisher: string) => {
  if (publisher.length === 0) return 'Publisher is required.';
  return '';
};

const validateYear = (year: string) => {
  if (year.length === 0) return 'Year is required.';
  if (isNaN(Number(year))) return 'Year must be a number.';
  return '';
};

const validatePageNumbers = (pageNumbers: string) => {
  if (pageNumbers.length === 0) return 'Page Numbers is required.';
  if (isNaN(Number(pageNumbers))) return 'Page Numbers must be a number.';
  return '';
};

const validateRating = (rating: number) => {
  if (rating < 1 || rating > 5) return 'Rating must be between 1 and 5.';
  return '';
};

const validateIsbn10 = (isbn10: string) => {
  if (isbn10.length === 0) return 'ISBN-10 is required.';
  if (isbn10.length !== 10) return 'ISBN-10 must be 10 characters long.';
  return '';
};

const validateIsbn13 = (isbn13: string) => {
  if (isbn13.length === 0) return 'ISBN-13 is required.';
  if (isbn13.length !== 13) return 'ISBN-13 must be 13 characters long.';
  return '';
};

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categories: '',
    authorName: '',
    publisher: '',
    year: '',
    pageNumbers: '',
    rating: 0,
    isbn10: '',
    isbn13: '',
  });

  const [image, setImage] = useState<File | null>(null);

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleValidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Errors = {};
    newErrors.title = validateTitle(formData.title);
    newErrors.description = validateDescription(formData.description);
    newErrors.categories = validateCategories(formData.categories);
    newErrors.authorName = validateAuthorName(formData.authorName);
    newErrors.publisher = validatePublisher(formData.publisher);
    newErrors.year = validateYear(formData.year);
    newErrors.pageNumbers = validatePageNumbers(formData.pageNumbers);
    newErrors.rating = validateRating(formData.rating);
    newErrors.isbn10 = validateIsbn10(formData.isbn10);
    newErrors.isbn13 = validateIsbn13(formData.isbn13);

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Handle successful form submission
    console.log('Form submitted successfully:', formData);
  };
  return (
    <div className="book-form-container">
      <h2>Add new Book</h2>
      <form onSubmit={handleValidate} className="book-form">
        <div className="left-side">
          <label>
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>
          <label>
            Categories:
            <input type="text" name="categories" value={formData.categories} onChange={handleChange} />
          </label>
          <label>
            Author Name:
            <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} />
          </label>
          <label>
            Publisher:
            <input type="text" name="publisher" value={formData.publisher} onChange={handleChange} />
          </label>
          <label>
            Year:
            <input type="text" name="year" value={formData.year} onChange={handleChange} />
          </label>
          <label>
            Page Numbers:
            <input type="text" name="pageNumbers" value={formData.pageNumbers} onChange={handleChange} />
          </label>
        </div>

        <div className="right-side">
          <label>
            Rating:
            <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
          </label>
          <label>
            ISBN-10:
            <input type="text" name="isbn10" value={formData.isbn10} onChange={handleChange} />
          </label>
          <label>
            ISBN-13:
            <input type="text" name="isbn13" value={formData.isbn13} onChange={handleChange} />
          </label>
          <div className="image-upload">
            <label>Import Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />}
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="add-btn" onClick={() => console.log('Add another book')}>
            Add Another Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;