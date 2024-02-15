const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { authRoute } = require("./routes/authRouter")
const { movieRoute } = require("./routes/movieRoute")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",authRoute)
app.use("/movie",movieRoute)


app.listen(8080,async()=>{

    try {
         await connection
        console.log("db is connected");
        console.log("server is running");
    } catch (error) {
        console.log(error);
    }
    
})