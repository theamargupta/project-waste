const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let collectionString = 'mongodb://127.0.0.1:27017'
const database="todoapp"
MongoClient.connect(collectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res)=>{
  const db = res.db(database)
  
  db.collection('items').insertOne({
      name:'amar',
      age:50
  })
})
