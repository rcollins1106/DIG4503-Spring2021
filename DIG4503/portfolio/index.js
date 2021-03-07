import Express from 'express';
import person from 'Randall'
import generator from './generator';

const App = Express();
const port = 45030;

App.get("./generator", function(req, res){
    res.send(generator);

});


App.listen(port, function(){
    console.log("Server running!");
});
