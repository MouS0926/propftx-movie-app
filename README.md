# MovieApp

Welcome to MovieApp! This is a web application built to manage and explore movies. Users can register, login, add their movies, edit or delete them, and even provide reviews for any movie listed.

## Tech Stack

- Frontend:
  - React
  - Redux Toolkit
  - Material UI

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT for authentication

## Features

- View a list of movies
- Details Page of a Particular Movie
- User registration and login
- Add, edit, and delete user's own movies
- Add reviews to any movie in Details Page

## API Endpoints

- **GET** `/api/movies`: Retrieve a list of movies
- **POST** `/api/users/register`: Register a new user
- **POST** `/api/users/login`: User login
- **POST** `/api/movies/add`: Add a new movie
- **PUT** `/api/movies/:id/edit`: Edit a movie by ID
- **DELETE** `/api/movies/:id/delete`: Delete a movie by ID
- **POST** `/api/movies/:id/review/add`: Add a review to a movie by ID

## How to Run Locally

To run the project locally, follow these steps:

1. Clone the repository:

