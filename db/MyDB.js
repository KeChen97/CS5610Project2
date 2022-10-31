const { query } = require('express');

const MongoClient = require('mongodb').MongoClient;


function MyMongoDB () {
    const myDB = {};
    const mongourl = process.env.MONGO_URL || 'mongodb://localhost:27017';
    
    const DB_NAME = "workoutDB";
    const COL_NAME = "exercises";
    const PAGE_SIZE = 20;

    myDB.getExercises = async function(query = {}) {
        console.log("workoutDB connected");
        const client = new MongoClient(mongourl);
        const exercisesColl = client.db(DB_NAME).collection(COL_NAME);
        return await exercisesColl.find(query).toArray();
        
    };
    return myDB;
}

// export default MyMongoDB();
module.exports = MyMongoDB();