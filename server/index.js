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
        phone: req.body.phone,
        password: Math.random().toString(36).slice(-8),
        privilege: req.body.privilege ? "premium" : "user"   // default = user, admin, premium
      }
      db.collection('users').find().toArray((err, docs) => {
        let valid = docs.find(doc => {
          return doc.phone === user.phone
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

    app.get('/users/search/lastName/:lastName', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').find( { lastName: req.params.lastName } ).toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/users/search/firstName/:firstName', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').find( { firstName: req.params.firstName } ).toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/users/search/privilege/:privilege', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').find( { privilege: req.params.privilege } ).toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/users/search/phone/:phone', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').findOne( { phone: req.params.phone }, (err, doc) => {
        if (err){ return res.sendStatus(500) }
        res.send(doc)
      })
    })

    app.get('/users/search/id/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('users').find( { _id: ObjectID( req.params.id ) } ).toArray((err, docs) => {
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

    app.put('/users/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('users').findOne( { _id: ObjectID( req.params.id ) }, (err, doc) => {
        if (err || doc === null) return res.sendStatus(500)
        
        let 
          resultFirstName = doc.firstName,
          resultLastName = doc.lastName,
          resultPhone = doc.phone,
          resultPassword = doc.password,
          resultPrivilege = doc.privilege
        ;

        if(req.body.firstName != undefined) resultFirstName = req.body.firstName
        if(req.body.lastName != undefined) resultLastName = req.body.lastName
        if(req.body.phone != undefined) resultPhone = req.body.phone
        if(req.body.password != undefined) resultPassword = req.body.password
        if(req.body.privilege != undefined) resultPrivilege = req.body.privilege
        

        db.collection('users').updateOne(
          { _id: ObjectID( req.params.id ) },
          {$set:{
            firstName: resultFirstName,
            lastName: resultLastName,
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

    app.post('/texts', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      const text = {
        block: req.body.block,
        texts: req.body.texts
      }
      db.collection('texts').insertOne(text, (err, result) => {
        if (err) return res.sendStatus(500)
        res.send(result)
      })
    })

    app.put('/texts/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('texts').findOne( { _id: ObjectID( req.params.id ) }, (err, doc) => {
        if (err || doc === null) return res.sendStatus(500)
        
        let resultTexts = doc.texts;
        resultTexts[req.body.index] = req.body.result
        
        db.collection('texts').updateOne(
          { _id: ObjectID( req.params.id ) },
          {$set:{
            texts: resultTexts
          }},
          (err, result) => {
            if (err){ return res.sendStatus(500) }
            res.send(result)
          }
        )
      })
    })

    app.get('/texts', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('texts').find().toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/texts/:block', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('texts').findOne( { block: Number(req.params.block) }, (err, doc) => {
        if (err) return res.sendStatus(500)
        res.send(doc)
      })
    })

    app.post('/Videos', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      const video = {
        number: req.body.number,
        isOpen: req.body.isOpen,
        title: req.body.title,
        date: req.body.date,
        src: req.body.src
      }
      db.collection('Videos').insertOne(video, (err, result) => {
        if (err) return res.sendStatus(500)
        res.send(result)
      })
    })

    app.get('/Videos', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('Videos').find().toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/Videos/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('Videos').findOne( { _id: ObjectID( req.params.id ) }, (err, doc) => {
        if (err) return res.sendStatus(500)
        res.send(doc)
      })
    })

    app.post('/Validation/Users/Admin', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      db.collection('users').find( { privilege: 'admin' }).toArray((err, docs) => {
        let check = 0
        if (err) return res.sendStatus(500)
        for(let i = 0; i < docs.length; i++)
        {
          console.log(docs[i].password != req.body.password &&
            docs[i].firstName != req.body.firstName &&
            docs[i].lastName != req.body.lastName &&
            docs[i].phone != req.body.phone &&
            docs[i].privilege != 'admin')
            
          if(
            docs[i].password != req.body.password &&
            docs[i].firstName != req.body.firstName &&
            docs[i].lastName != req.body.lastName &&
            docs[i].phone != req.body.phone &&
            docs[i].privilege != 'admin'
          )
          {
            check++
            console.log(check, docs.length)
            if(check == docs.length){
              res.sendStatus(500)
            }
          }
          else {
            console.log(check, docs.length)
            res.sendStatus(200)
          }
        }
      })
    })
  }
  catch(err){
    console.log(err.message)
  }
}