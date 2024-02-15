const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username :  String,
      
    email : {
        type: String,
        required: true,
      },
    password : {
        type: String,
        required: true,
      },
      watchlist :[],
     
    
},{
    versionKey:false
})

const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}