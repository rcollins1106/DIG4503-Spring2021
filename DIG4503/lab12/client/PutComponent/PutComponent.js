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