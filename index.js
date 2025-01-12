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

//IMPORT ROUTER
const combatRoutes = require('./routes/combatRoutes');//We import the router we created in the combatRoutes.js file.
app.use('/api/combat', combatRoutes);//We tell the Express app to use the router we imported and to prefix all routes with /api/combat.

//IMPORT MODELS
const Event = require('./models/events');
const Fighter = require('./models/fighters');
const Fight = require('./models/fights');

//IMPORT SEED DATA
const { defaultEvents, defaultFighters, defaultFights } = require('./config/seed');

//HOME ROUTE (Full Route localhost:1000/)
app.get('/', (req, res) => {
    res.send('Welcome to the COMBAT API');
})

//GET ALL EVENTS ROUTE
app.get('/events/seed', async (req, res) => {
    try {
        await Event.deleteMany({});
        const seededEvents = await Event.create(defaultEvents);
        res.json({
            message: 'Events default data loaded successfully',
            events: seededEvents
        });
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET ALL FIGHTERS ROUTE
app.get('/fighters/seed', async (req, res) => {
    try {
        await Fighter.deleteMany({});
        const seededFighters = await Fighter.create(defaultFighters);
        res.json({
            message: 'Fighters default data loaded successfully',
            fighters: seededFighters
        });
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET ALL FIGHTS ROUTE
app.get('/fights/seed', async (req, res) => {
    try {
        await Fight.deleteMany({});
        const seededFights = await Fight.create(defaultFights);
        res.json({
            message: 'Fights default data loaded successfully',
            fights: seededFights
        });
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.listen(PORT, () => {//listen() is a method to start the server and wait for incoming network requests on a given port.The callback function is executed once the server is running.
    console.log(`Server is running on port ${PORT}`)
})