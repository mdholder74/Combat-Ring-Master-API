const express = require('express');
const router = express.Router();

//IMPORT MODELS (for use in seed routes below)
const Event = require('./models/events');
const Fighter = require('./models/fighters');
const Fight = require('./models/fights');

//IMPORT SEED DATA 
const { defaultEvents, defaultFighters, defaultFights } = require('./config/seed');

//HOME ROUTE (Full Route localhost:1000/)
router.get('/', (req, res) => {
    res.send('Welcome to the COMBAT API');
})

// DEVELOPMENT-ONLY ROUTE: Reseeds the events collection
// --------------------------------------------------------
// This GET route is used to reset the "events" collection by:
//   1. Deleting all existing Event documents from the database
//   2. Inserting a predefined set of default events (from seed data)
// 
// ⚠️ Note: Although this is a GET route, it performs destructive operations
// (DELETE + CREATE). This is acceptable for local development or testing,
// but it is NOT recommended for production environments.
//
// Full Route: GET http://localhost:1000/events/seed


// DEVELOPMENT ONLY: Reset and seed the events collection
//GET ALL EVENTS ROUTE (Full Route localhost:1000/events/seed)
// Deletes all Event documents and loads default seed data
router.get('/events/seed', async (req, res) => {
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

// DEVELOPMENT ONLY: Reset and seed the events collection
//GET ALL FIGHTERS ROUTE
// Deletes all Fighter documents and loads default seed data
router.get('/fighters/seed', async (req, res) => {
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

// DEVELOPMENT ONLY: Reset and seed the events collection
//GET ALL FIGHTS ROUTE
// Deletes all Fight documents and loads default seed data
router.get('/fights/seed', async (req, res) => {
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

module.exports = router;