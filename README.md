# React Book Form
================

A simple React application for adding new books with validation and image upload functionality.

--------

* User-friendly interface for adding new books
* Validation for all form fields
* Image upload functionality with preview
* Support for adding multiple books

## Getting Started
---------------

To get started with the project, follow these steps:

1. Clone the repository using git clone
2. Install the dependencies using `npm install` or `yarn install`
3. Start the development server using `npm start` or `yarn start`
4. Open your web browser and navigate to `http://localhost:3000`

## Project Structure
-----------------

The project is structured as follows:

* `src`: Contains the source code for the application
* `src/components`: Contains the React components used in the application
* `src/utils`: Contains utility functions used throughout the application
* `public`: Contains static assets used in the application
* `README.md`: This file

## Validation Rules
-----------------

The application uses the following validation rules:

* Title: Must be between 10 and 120 characters, and can only contain letters, numbers, and special characters
* Description: Must be less than 512 characters and start with an uppercase letter
* Categories: Required
* Author Name: Required
* Publisher: Required
* Year: Required and must be a number
* Page Numbers: Required and must be a number
* Rating: Must be between 1 and 5
* ISBN-10: Required and must be 10 characters long
* ISBN-13: Required and must be 13 characters long




