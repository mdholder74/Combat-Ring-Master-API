//IMPORT DOTENV FROM NODE MODULES
const dotenv = require ('dotenv')
dotenv.config();//.config() is a method that dotenv provides to actually read the .env file and load the environment variables into the Node.js application.
const PORT = process.env.PORT || 1000;//process.env.PORT is an environment variable that is set by the hosting service that tells the server which port to listen on. If it's not set, we default to 1000.

//IMPORT EXPRESS FROM NODE MODULES
const express = require('express');
const app = express();//express() is a function that creates/sets up an Express application. This gives you access to all the methods and functionality Express provides, such as handling HTTP requests, defining routes, managing middleware.

//IMPORT MONGODB CONNECTION FUNCTION
const mongodbConnection = require('./config/database');//We import the function that connects to MongoDB from the database.js file.
mongodbConnection();//We call the function to connect to MongoDB.

//SETUP MIDDLEWARE FOR FORM SUBMISSIONS
app.use(express.urlencoded({ extended: true }));

//SETUP MIDDLEWARE FOR JSON
app.use(express.json());

app.listen(PORT, () => {//listen() is a method to start the server and wait for incoming network requests on a given port.The callback function is executed once the server is running.
    console.log(`Server is running on port ${PORT}`)
})