import MongoClient from 'mongodb';

const url = "mongodb+srv://RandallCollins:Lopvx0SD8NNuYaZA@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.arrayExample = [
            'Cortney',
            'Dewayne',
            'Trenton',
            'Pamala',
            'Ettie',
            'Errol',
            'Lorrie',
            'Hang',
            'Lauryn',
            'Caterina',
            'Isa',
            'Marcela'
        ];
    }

    async connect(){
        //Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});
        //Select a database.
        this.database = this.connection.db("<lab10>");
        //Select a collection.
        this.collection = this.database.collection("<people>");
    }

    createOne(person) {
        // Add to the internal array.
        this.arrayExample.push(person);
        
        //RANDALL
        collection.insertOne({
            "firstName": "Randall", 
            "lastName": "Collins",
            "favoriteColor": "Green"

        });

        // Return the name just created.
        return {person: person};
        
    }

    readOne(person) {
        // Setup a default response.
        let result = {person: "not found"};

        //RANDALL
        collection.findOne({


        });
        // Search through the internal array.
        this.arrayExample.forEach(value => {
            if(value == person) {
                result = {person: person};
            }
        });

        // Return the default or searched-for result.
        return result;
    }
    //Complete
    close(){
        if(this.collection != null) {
          this.collection.close();
        }
      }
}

export default Database;