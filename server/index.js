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
    await MongoClient.connect('mongodb://localhost:27017/schoolOnline', function(err, client){
      if (err) throw new Error(err)
      db = client.db('schoolOnline')
      app.listen(PORT, () => {
        console.log( `server started on URL: http://localhost:${PORT}` )
      })
    })

    app.post('/users', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        patronymic: req.body.patronymic,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        privilege: "user"  // default = user, admin, pupil
      }
      db.collection('users').find().toArray((err, docs) => {
        let valid = docs.find(doc => {
          return doc.firstName === user.firstName && doc.lastName === user.lastName && doc.patronymic === user.patronymic || doc.email === user.email
        })
        if(valid) return res.sendStatus(500)
        db.collection('users').insertOne(user, (err, result) => {
          if (err) return res.sendStatus(500)
          res.send(result)
        })
      })
    })

    app.delete('/users/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      
      db.collection('users').deleteOne(
        { _id: ObjectID( req.params.id ) },
        (err, result) => {
          if (err) return res.sendStatus(500)
          res.send(result)
        }
      )
    })

    app.get('/users', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').find().toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/users/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').findOne( { _id: ObjectID( req.params.id ) }, (err, doc) => {
        if (err) return res.sendStatus(500)
        res.send(doc)
      })
    })

    app.get('/users/email/:mail', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').findOne( { email: req.params.mail }, (err, doc) => {
        if (err) return res.sendStatus(500)
        res.send(doc)
      })
    })

    app.put('/users/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('users').findOne( { _id: ObjectID( req.params.id ) }, (err, doc) => {
        if (err || doc === null) return res.sendStatus(500)
        
        let 
          resultFirstName = doc.firstName,
          resultLastName = doc.lastName,
          resultPatronymic = doc.patronymic,
          resultEmail = doc.email,
          resultPhone = doc.phone,
          resultPassword = doc.password,
          resultPrivilege = doc.privilege
        ;

        if(req.body.firstName != undefined) resultFirstName = req.body.firstName
        if(req.body.lastName != undefined) resultLastName = req.body.lastName
        if(req.body.patronymic != undefined) resultPatronymic = req.body.patronymic
        if(req.body.email != undefined) resultEmail = req.body.email
        if(req.body.phone != undefined) resultPhone = req.body.phone
        if(req.body.password != undefined) resultPassword = req.body.password
        if(req.body.privilege != undefined) resultPrivilege = req.body.privilege
        

        db.collection('users').updateOne(
          { _id: ObjectID( req.params.id ) },
          {$set:{
            firstName: resultFirstName,
            lastName: resultLastName,
            patronymic: resultPatronymic,
            email: resultEmail,
            phone: resultPhone,
            password: resultPassword,
            privilege: resultPrivilege,
          }},
          (err, result) => {
            if (err){ return res.sendStatus(500) }
            res.send(result)
          }
        )
      })
    })
    app.put('/users/email/:mail', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('users').findOne( { email: req.params.mail }, (err, doc) => {
        if (err || doc === null) return res.sendStatus(500)
        console.log(doc)
        let 
          resultFirstName = doc.firstName,
          resultLastName = doc.lastName,
          resultPatronymic = doc.patronymic,
          resultEmail = doc.email,
          resultPhone = doc.phone,
          resultPassword = doc.password,
          resultPrivilege = doc.privilege
        ;

        if(req.body.firstName != undefined) resultFirstName = req.body.firstName
        if(req.body.lastName != undefined) resultLastName = req.body.lastName
        if(req.body.patronymic != undefined) resultPatronymic = req.body.patronymic
        if(req.body.email != undefined) resultEmail = req.body.email
        if(req.body.phone != undefined) resultPhone = req.body.phone
        if(req.body.password != undefined) resultPassword = req.body.password
        if(req.body.privilege != undefined) resultPrivilege = req.body.privilege
        

        db.collection('users').updateOne(
          { email: req.params.mail },
          {$set:{
            firstName: resultFirstName,
            lastName: resultLastName,
            patronymic: resultPatronymic,
            email: resultEmail,
            phone: resultPhone,
            password: resultPassword,
            privilege: resultPrivilege,
          }},
          (err, result) => {
            if (err){ return res.sendStatus(500) }
            res.send(result)
          }
        )
      })
    })
  }
  catch(err){
    console.log(err.message)
  }
}