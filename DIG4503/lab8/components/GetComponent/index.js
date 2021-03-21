import Axios from 'axios';
import names from '../../server/index';

Axios.get("/search/:name", (req, res) => {

    let person = req.params.person;
    let result = {person: "not found"};

    names.forEach(value => {
        if(value == person) {
            result = {person: names};
        }
    });

    res.json(result);
});

export default result;
