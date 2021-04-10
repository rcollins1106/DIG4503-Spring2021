import Database from './Database.js';

import Express from 'express';

const App = Express();
const port = 45030;
//Allow to use request bodies and ranslate it out of JSON
App.use (Express.json());

//Database.connect()
const db = new Database();

db.connect()
// PUT (app.put() ) -> Database.createOne() -> collectioninsertOne()
App.put("/books/:ISBN", (req, res) => {
    
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = db.createOne(id);

    res.json({
        id: id,
        author: author,
        description: description
    });

});
// GET (app.get() ) -> Database.readOne() -> collectionfindOne()
App.get("/books/:ISBN", (req, res) => {
    const id = req.params.id;

    const result = db.readOne(id);
});
// PATCH (app.patch() ) -> Database.updateOne() -> collectionupdateOne()
App.post("/books/search", (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.readMany(id,title);

    res.json(result);
});
// PATCH (app.patch() ) -> Database.updateOne() -> collectionupdateOne()
App.patch("/books/:ISBN", (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.updateOne(id,title);

    res.json(result);
});
// DELETE (app.delete() ) -> Database.deleteOne() -> collectiondeleteOne()
App.delete("/books/:ISBN", (req, res) => {
    const id = req.params.id;

    const result = db.deleteOne(id);

        res.json({"deleted": 0});
});


App.listen(port);
