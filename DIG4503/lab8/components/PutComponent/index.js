import Axios from 'axios';
import names from '../../server/index';

Axios.put("/people/:person", (req, res) => {

    let person = req.params.person;
    names.push(names)

    res.json({person: names});
});

export default result;
