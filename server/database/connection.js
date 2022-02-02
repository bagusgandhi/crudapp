const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        //connect to mongoDB
        const con = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });

        //show log when connected
        console.log('mongoDB connected!');

    }catch(err){
        //show log err
        console.log(err);

        //exit process
        process.exit(1);
    }
}

module.exports = connectDB