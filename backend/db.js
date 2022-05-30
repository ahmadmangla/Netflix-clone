import mongoose from "mongoose";

const connectToMongo = () => {

    const mongoURI = 'mongodb://localhost:27017';

    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("connected to mongo successfully");
        }
    })
  
}

export default connectToMongo;