//IMPORT DOTENV FROM NODE MODULES
const dotenv = require ('dotenv')
dotenv.config();//.config() is a method that dotenv provides to actually read the .env file and load the environment variables into the Node.js application.

const PORT = process.env.PORT || 1000;// Define the port the server will listen on, using the value from .env or defaulting to 1000

//IMPORT EXPRESS FROM NODE MODULES
const express = require('express');
const app = express();//express() is a function that creates/sets up an Express application. This gives you access to all the methods and functionality Express provides, such as handling HTTP requests, defining routes, managing middleware.

// IMPORT MONGODB CONNECTION FUNCTION
// Imports the function that establishes a connection to the MongoDB database.
const mongodbConnection = require('./config/database'); // Import the MongoDB connection function from database.js
// Establish a connection to the MongoDB database
mongodbConnection(); // Invoke the function to connect to MongoDB before using any models or making DB queries

// ========================
// MIDDLEWARE SETUP
// ========================

//SETUP MIDDLEWARE FOR FORM SUBMISSIONS
// Middleware to parse incoming form data (from HTML form submissions)
// Parses incoming form data submitted via <form> tags using the x-www-form-urlencoded format.
// Example: <input name="fighterName" value="Jon Jones">
// This will make the data available on req.body (e.g., req.body.fighterName)
// The "extended: true" option allows parsing of nested objects.
app.use(express.urlencoded({ extended: true }));

//SETUP MIDDLEWARE FOR JSON
// Middleware to parse incoming JSON data (e.g. from fetch or API requests)
// Parses incoming JSON data sent via fetch(), Axios, or API clients (like Postman).
// This middleware looks for requests with Content-Type: application/json
// and makes the data available on req.body (e.g., req.body.name)
// Use this for APIs or frontend frameworks that send JSON payloads.
app.use(express.json());

//MOUNT COMBAT ROUTES BY IMPORTING ROUTER
const combatRoutes = require('./routes/combatRoutes');//imports the combatRoutes.js file that contains all of route definitions (GET, POST, PUT, DELETE) for events, fighters, and fights.
app.use('/api/combat', combatRoutes);// Any routes defined in combatRoutes will now respond to paths that start with /api/combat

// MOUNT SEED ROUTES BY IMPORTING ROUTER
const seedRoutes = require('./routes/seedRoutes');// imports the seedRoutes.js file that contains all of route definitions (GET) for seeding the database with default data.
app.use('/api/seed', seedRoutes);// Makes all routes inside seedRoutes available under /api/seed

//HOME ROUTE (Full Route localhost:1000/)
app.get('/', (req, res) => {
    res.send('Welcome to the COMBAT API');
})

// START THE SERVER
// Starts the server and listens for incoming requests/ network requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})