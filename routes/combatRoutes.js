//IMPORT EXPRESS
const express = require('express');
const router = express.Router();

//IMPORT MODELS
const Event = require('../models/events');
const Fighter = require('../models/fighters');
const Fight = require('../models/fights');



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

//ALL POST ROUTES

//POST EVENT ROUTE (Full Route localhost:1000/api/combat/events)
router.post('/events', async (req, res) => {
    try {
        const createEvent = await Event.create(req.body);
        res.json(createEvent);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//POST FIGHTER ROUTE (Full Route localhost:1000/api/combat/fighters)
router.post('/fighters', async (req, res) => {
    try {
        const createFighter = await Fighter.create(req.body);
        res.json(createFighter);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//POST FIGHT ROUTE (Full Route localhost:1000/api/combat/fights)
router.post('/fights', async (req, res) => {
    try {
        const createFight = await Fight.create(req.body);
        res.json(createFight);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET EVENT BY ID ROUTE (Full Route localhost:1000/api/combat/events/:id)
router.get('/events/:id', async (req, res) => {
    try {
        const findEvent = await Event.findById(req.params.id);
        res.json(findEvent);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET FIGHTER BY ID ROUTE (Full Route localhost:1000/api/combat/fighters/:id)
router.get('/fighters/:id', async (req, res) => {
    try {
        const findFighter = await Fighter.findById(req.params.id);
        res.json(findFighter);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//GET FIGHT BY ID ROUTE (Full Route localhost:1000/api/combat/fights/:id)
router.get('/fights/:id', async (req, res) => {
    try {
        const findFight = await Fight.findById(req.params.id);
        res.json(findFight);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//PUT EVENT BY ID ROUTE (Full Route localhost:1000/api/combat/events/:id)
router.put('/events/:id', async (req, res) => {
    try {
        const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateEvent);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }   
})

//PUT FIGHTER BY ID ROUTE (Full Route localhost:1000/api/combat/fighters/:id)
router.put('/fighters/:id', async (req, res) => {
    try {
        const updateFighter = await Fighter.findByIdAndUpdate(req.params.id , req.body , { new: true });    
        res.json(updateFighter);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//PUT FIGHT BY ID ROUTE (Full Route localhost:1000/api/combat/fights/:id)
router.put('/fights/:id', async (req, res) => {
    try {
        const updateFight = await Fight.findByIdAndUpdate(req.params.id , req.body , { new: true });
        res.json(updateFight);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//DELETE EVENT BY ID ROUTE (Full Route localhost:1000/api/combat/events/:id)
router.delete('/events/:id', async (req, res) => {
    try {
        const deleteEvent = await Event.findByIdAndDelete(req.params.id);
        res.json(deleteEvent);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//DELETE FIGHTER BY ID ROUTE (Full Route localhost:1000/api/combat/fighters/:id)
router.delete('/fighters/:id', async (req, res) => {
    try {
        const deleteFighter = await Fighter.findByIdAndDelete(req.params.id);
        res.json(deleteFighter);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//DELETE FIGHT BY ID ROUTE (Full Route localhost:1000/api/combat/fights/:id)
router.delete('/fights/:id', async (req, res) => {
    try {
        const deleteFight = await Fight.findByIdAndDelete(req.params.id);
        res.json(deleteFight);
    }
    catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//EXPORT ROUTER
module.exports = router;
