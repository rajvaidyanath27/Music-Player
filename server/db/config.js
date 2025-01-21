const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const uri = process.env.URI;

const connectDb = async(uri) => {
try{
    const connect = await mongoose.connect(uri);



    if(connect){
        console.log("Connected to db");
    }
    else{
        console.log('not to Database');
    }
} catch(error) {
    console.log(error);
    process.exit(1);
}

}

module.exports = connectDb;