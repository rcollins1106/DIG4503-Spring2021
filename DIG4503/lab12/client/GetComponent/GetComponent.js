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