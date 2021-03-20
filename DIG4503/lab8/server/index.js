import Express from 'express';
import Axios from 'axios';
import CORS from 'cors';

App.use(CORS());
const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

// Create
App.put("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;
    // Add to the internal array.
    names.push(names)
    // Return the name just created.
    res.json({person: names});
});

// Read
App.get("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    // Setup a default response.
    let result = {person: "not found"};

    // Search through the internal array.
    names.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });

    // Return the default or searched-for result.
    res.json(result);
});

// Read
App.get("/search/:name", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    // Setup a default response.
    let result = {person: "not found"};

    // Search through the internal array.
    names.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });

    // Return the default or searched-for result.
    res.json(result);
});

// Update
// Based on this example, there is nothing to update!

// Delete
App.delete("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;
    // Delete an entry by creating an array without it.
    names = names.filter(value => value != person);
    // Return the name just deleted (regardless if it worked or not).
    res.json({person: person});
});

App.listen(port, () => {
    console.log("Server running!");
});
