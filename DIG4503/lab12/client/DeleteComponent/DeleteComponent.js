// DELETE (app.delete() ) -> Database.deleteOne() -> collectiondeleteOne()
App.delete("/books/:ISBN", (req, res) => {
    const id = req.params.id;

    const result = db.deleteOne(id);

        res.json({"books": 0});
});


App.listen(port);