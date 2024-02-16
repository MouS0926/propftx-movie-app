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
    
## Deployed Link:
https://propftx-movie-app-puce.vercel.app/

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
- **POST** `/api/movie/add`: Add a new movie
- **PUT** `/api/movie/update/:id`: Edit a movie by ID
- **DELETE** `/api/movie/delete/:id`: Delete a movie by ID
- **GET** `/api/movie/:id`: Single Movie Details
- **POST** `/api/movie/review/add/:id`: Add a review to a movie by ID

## How to Run Locally

To run the project locally, follow these steps:

Clone the project

```bash
  git clone https://github.com/MouS0926/propftx-movie-app.git
```

Go to the project directory

```bash
  cd Frontend
```

Install dependencies

```bash
  npm install 

```

Start the frontend 

```bash
  npm run dev
```

## Screenshots

## LANDING PAGE
<img src="https://github.com/MouS0926/propftx-movie-app/blob/main/screenshots/home.jpeg"  width="900" >



## SIGNUP PAGE
<img src="https://github.com/MouS0926/propftx-movie-app/blob/main/screenshots/registraion.jpeg"  width="900" >


## MOVIE DETAILS
<img src="https://github.com/MouS0926/propftx-movie-app/blob/main/screenshots/details.jpeg"  width="900" >



## ADD MOVIE
<img src="https://github.com/MouS0926/propftx-movie-app/blob/main/screenshots/add.jpeg"  width="900" >


## EDIT MOVIE
<img src="https://github.com/MouS0926/propftx-movie-app/blob/main/screenshots/update.jpeg"  width="900" >



## ADD REVIEW
<img src="https://github.com/MouS0926/propftx-movie-app/blob/main/screenshots/add%20review.jpeg"  width="900" >


Thank You

