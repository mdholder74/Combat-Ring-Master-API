//IMPORT EXPRESS
const express = require('express');
const router = express.Router();

//IMPORT MODELS
const Event = require('../models/events');
const Fighter = require('../models/fighters');
const Fight = require('../models/fights');

//EXPORT ROUTER
module.exports = router;

//ALL GET ROUTES

//GET EVENTS ROUTE (Full Route localhost:1000/api/combat/events)
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find({});
        res.json(events);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET FIGHTERS ROUTE (Full Route localhost:1000/api/combat/fighters)
router.get('/fighters', async (req, res) => {
    try {
        const fighters = await Fighter.find({});
        res.json(fighters);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET FIGHTS ROUTE (Full Route localhost:1000/api/combat/fights)
router.get('/fights', async (req, res) => {
    try {
        const fights = await Fight.find({});
        res.json(fights);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
