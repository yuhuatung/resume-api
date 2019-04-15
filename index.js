const express = require('express');
const app = express();

const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://adam:Adam0409@cluster0-hawj2.mongodb.net/test?retryWrites=true";

MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('resume')
    app.get('/data', (req, res) => {
	  db.collection('test').find().toArray((err, result) => {
	    if (err) return console.log(err)
	    res.send({data: result})
	  })
	})
})

app.listen(port, function () {
   console.log(`server start on http://localhost:${port}, port`)
})