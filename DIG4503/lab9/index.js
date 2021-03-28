import MongoClient from 'mongodb';

const url = "mongodb+srv://RandallCollins:Lopvx0SD8NNuYaZA@cluster0.yuzwq.mongodb.net";

MongoClient.connect(url, { useUnifiedTopology: true })
.then(connection => {
    
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    collection.findOne({beds: {$gte: "5"}}, {price: {$lte: "200" }}, {review_scores: {$gte: "99"}}
    .then((results) => {
        console.log(result);
        connection.close();
    })
    
    .catch(error => {
        console.log("Error: " + error);
    })
    )
})
