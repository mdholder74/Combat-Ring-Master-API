//IMPORT MONGOOSE
const mongoose = require('mongoose');

//CONNECT TO MONGODB
const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once('open', () => {
            console.log('Connected to MongoDB');
        });

    } catch (error) {
        console.log(error);
    }
}

//EXPORT MONGOOSE CONNECTION
module.exports = mongoConnection;