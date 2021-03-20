import Axios from 'axios';
import names from '../../server/index';

Axios.get("/search/:name", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    // Setup a default response.
    let result = {person: "not found"};

    // Search through the internal array.
    names.forEach(value => {
        if(value == person) {
            result = {person: names};
        }
    });

    // Return the default or searched-for result.
    res.json(result);
});

export default result;