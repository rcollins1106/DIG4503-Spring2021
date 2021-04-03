import Database from './Database.js';

import Express from 'express';

const App = Express();
const port = 45030;

App.use (Express.json());

// Create a new database object.
const d = new Database();

App.put("/people/create", (req, res) => {
    // Save the request parameter.
    let person = req.body;
    // Create a new person in the array. 
    let result = d.createOne(person);
    // Return the name just created.
    res.json(result);
});

App.get("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;
    // Search the database.
    let result = d.readMany(person);
    // Return the default or searched-for result.
    res.json(result);
});


