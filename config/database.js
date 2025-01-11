//IMPORT MONGOOSE
const mongoose = require('mongoose');

//CONNECT TO MONGODB
const mongodbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once('open', () => {
            console.log('Connected to MongoDB');
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

//EXPORT MONGOOSE CONNECTION
module.exports = mongodbConnection;