const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/index.js");
const port = 3000;
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const mongourl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const mongourl = 'mongodb+srv://CS5610:CS5610@cs5610.6eyptfc.mongodb.net/?retryWrites=true&w=majority';
const myDB = require('./db/MyDB.js');

app.use(express.static(__dirname));

const homePageFileName = 'index.html';
const dashboardFileName = 'dashboard.html';
const homeurl = path.join(__dirname, 'public', 'index.html');
const dashurl = path.join(__dirname, 'public', 'dashboard.html');
const userurl = path.join(__dirname, 'public', 'user.html');

// MongoClient.connect(mongourl, (err,db)=> {
//     if(err) throw err;
//     console.log('DB connected');
//     db.close();
// });

// const client = new MongoClient(mongourl, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })


//Allow us to interact and allow express to use middleware
//we can get request body content
app.use(bodyparser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    console.log('HomePage');
    res.sendFile(homePageFileName);
})


app.get('/dashboard', (req, res) => {
    res.sendFile(dashurl);
})

app.get('/getExercises', async (req, res) => {
    const exercises = await myDB.getExercises();
    res.json(exercises);
});


// app.get('/users/:id', (req, res) => {
//     res.send(`${req.params.id}`);
// })

 app.listen(port, () => {
    console.log(`Serving on port ${port}`)
 })    