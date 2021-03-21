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
    
    let person = req.params.person;
    
    names.push(names)
    
    res.json({person: names});
});

// Read
App.get("/people/:person", (req, res) => {
    
    let person = req.params.person;
    let result = {person: "not found"};

    names.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });
    res.json(result);
});

// Read
App.get("/search/:name", (req, res) => {

    let person = req.params.person;
    let result = {person: "not found"};

    names.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });

    res.json(result);
});

// Delete
App.delete("/people/:person", (req, res) => {

    let person = req.params.person;
    names = names.filter(value => value != person);

    res.json({person: person});
});

App.listen(port, () => {
    console.log("Server running!");
});
