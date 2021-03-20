import Axios from 'axios';
import names from '../../server/index';

Axios.put("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;
    // Add to the internal array.
    names.push(names)
    // Return the name just created.
    res.json({person: names});
});

export default result;