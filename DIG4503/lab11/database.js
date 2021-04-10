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

    createOne(person) {
        // Add
        this.collection.push(person);
        
        //insert
        collection.insertOne({
            "ISBN": "", 
            "title": "",
            "author": "",
            "description": "description"

        });

        // Return
        return {person: person};
        
    }

    readOne(person) {
        // Default response.
        let result = {person: "not found"};

        //Find
        collection.findOne({"firstName": {$eq:"Randall"}}, {"lastName": {$eq:"Collins"}}, {"favoriteColor": {$eq:"Green"}}
        .then((results) => {
            console.log(result);
            connection.close();
        })
        );

        // Return the default or searched-for result.
        return result;
    }
    
}
});

export default Database;


//delete
async.deleteOne
if(this.collection != null) {
    const result = await this.collection.deleteOne({"id": id});
    return{"delete": result.deltedCount};
} else{
    return {"deleted": 0};
}
