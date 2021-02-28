import Express from 'express';

const App = Express();
const port = 45030;


const person = {
    color: "Green",
    name: "Randall"
};

App.get("/", function(req, res){
    res.send("Hello World!");

});

App.get("/person", (req, res) => {
    res.json(person);
});

App.listen(port, function(){
    console.log("Server running!");
});