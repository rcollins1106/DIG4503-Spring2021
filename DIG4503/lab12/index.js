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

    const result = db.createOne();

    res.json({
        title: title,
        author: author,
        description: description
    });

});
// GET (app.get() ) -> Database.readOne() -> collectionfindOne()
App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const result = {book: "not found"};

    books.forEach(value => {
        if(value == ISBN) {
            result = {ISBN: ISBN};
        }
    const result = db.readOne(ISBN);
    });
});
// PATCH (app.patch() ) -> Database.updateOne() -> collectionupdateOne()
App.post("/books/search", (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.readMany(title, author, description);

    res.json({books: result});
});
// PATCH (app.patch() ) -> Database.updateOne() -> collectionupdateOne()
App.patch("/books/:ISBN", (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.updateOne(title, author, description);

    res.json(result);
});
// DELETE (app.delete() ) -> Database.deleteOne() -> collectiondeleteOne()
App.delete("/books/:ISBN", (req, res) => {
    const id = req.params.id;

    const result = db.deleteOne(id);

        res.json({"books": 0});
});


App.listen(port);