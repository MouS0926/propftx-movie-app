const express=require("express")
const { userModel } = require("../models/userModel");
const movieModel = require("../models/movieModel");
const { auth } = require("../middleware/auth.middleware");


const movieRoute=express.Router()

movieRoute.post("/add",auth,async(req,res)=>{
    try {
        
    const newMovie = new movieModel(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

movieRoute.patch("/update/:id", auth, async (req, res) => {
    try {
        const movieId = req.params.id;
        const updates = req.body;
    const movie=await movieModel.findOne({_id:movieId})
    if(movie.createdBy!==req.body.createdBy)
    {
        return res.status(500).send({"meassage":"You are not authorised"});
    }

        const updatedMovie = await movieModel.findByIdAndUpdate(movieId, updates, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(updatedMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

movieRoute.delete("/delete/:id", auth, async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie=await movieModel.findOne({_id:movieId})
        if(movie.createdBy!==req.body.createdBy)
        {
            return res.status(500).send({"meassage":"You are not authorised"});
        }
        const deletedMovie = await movieModel.findByIdAndDelete(movieId);
        if (!deletedMovie) {
            return res.status(404).send({ message: "Movie not found" });
        }
        res.json({ message: "Movie deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

movieRoute.get("/",async(req,res)=>{
    try {
       
        const movies=await movieModel.find()
        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})

movieRoute.get("/usermovie",auth,async(req,res)=>{
    try {
        
        const {createdBy}=req.body
        const movies=await movieModel.find({createdBy:createdBy})
        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})


movieRoute.post("/review/add/:movieId", auth, async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const {  comment } = req.body;
        
        // Create a review object
        const review = {
            reviewby: req.body.createdBy, 
            reviewername:req.body.username,
            comment,
            createdAt:new Date()
        };

        // Find the movie by ID
        const movie = await movieModel.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        // Add the review to the movie's reviews array
        movie.reviews.push(review);
        
        // Save the updated movie document
        await movie.save();

        res.status(201).json({ message: "Review added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


//get single movie details
movieRoute.get("/:movieid",async(req,res)=>{
    try {
        const movieid=req.params.movieid
        const movieDetails=await movieModel.findOne({_id:movieid})
        res.status(200).send(movieDetails)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})

module.exports={movieRoute}
