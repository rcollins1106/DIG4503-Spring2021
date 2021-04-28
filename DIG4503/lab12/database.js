import MongoClient from 'mongodb';



const url = "mongodb+srv://RandallCollins:Lopvx0SD8NNuYaZA@cluster0.yuzwq.mongodb.net";
MongoClient.connect(url, function(err, connection) {
class Database {

    async connect(){
        //Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});
        //Select a database.
        this.database = this.connection.db("lab11");
        //Select a collection.
        this.collection = this.database.collection("books");
    }
    //Complete
    close(){
        if(this.collection != null) {
        this.collection.close();
        }
    }

    createOne(id) {
        // Add
        this.collection.push(id);
        
        //insert
        collection.insertOne({
            "ISBN": "", 
            "title": "",
            "author": "",
            "description": "description"

        });

        // Return
        return {id: id};
        
    }

    readOne(id) {
        // Default response.
        let result = {id: "not found"};

        //Find
        collection.findOne({"ISBN": {$eq:""}}, {"title": {$eq:""}}, {"author": {$eq:""}}, {"description": {$eq:""}}
        .then((results) => {
            console.log(result);
            connection.close();
        })
        );

        // Return the default or searched-for result.
        return result;
    }

    //delete
deleteOne(id) {
if(this.collection != null) {
    const result = await this.collection.deleteOne({"id": id});
    return{"delete": result.deltedCount};
} else{
    return null;
}   
}

}});




export default Database;