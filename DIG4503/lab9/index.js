import MongoClient from 'mongodb';

const url = "mongodb+srv://RandallCollins:Lopvx0SD8NNuYaZA@cluster0.yuzwq.mongodb.net";

MongoClient.connect(url, { useUnifiedTopology: true })
.then(connection => {
    
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    collection.findOne({minimum_nights: { $eq: "2" } })
    .then((results) => {
        console.log(result);
        connection.close();
    })
    .catch(error => {
        console.log("Error: " + error);
})
.catch(error => {
    console.log("Error: " + error);
});
