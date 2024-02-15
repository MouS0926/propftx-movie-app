const express=require("express")
const { userModel } = require("../models/userModel");
const movieModel = require("../models/movieModel");
const { auth } = require("../middleware/auth.middleware");


const movieRoute=express.Router()

movieRoute.post("/add",auth,async(req,res)=>{
    try {
        // Extract movie details from request body
        //const { title, director, genre, year } = req.body;

        // Create a new movie object
        const newMovie = new movieModel(req.body);

        // Save the movie to the database
        const savedMovie = await newMovie.save();

        // Respond with the saved movie
        res.status(201).json(savedMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports={movieRoute}
