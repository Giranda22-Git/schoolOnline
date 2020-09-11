const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const cors = require('cors')
const PORT = 3000

const app = express()
let db

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

init()

async function init(){
  try{
    await MongoClient.connect('mongodb://localhost:27017/asGlobalAPI', function(err, client){
      if (err) throw new Error(err)
      db = client.db('asGlobalAPI')
      app.listen(PORT, () => {
        console.log( `server started on URL: http://localhost:${PORT}` )
      })
    })
  }
  catch(err){
    console.log(err.message)
  }
}