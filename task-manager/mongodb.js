// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' 

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true  }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database.')
    }
    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6115498ae947ec14a07bf88d")
    // }, {
    //     $set: {
    //         name: 'Jessie'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('task').updateMany(
    //     { completed: false },
    //     {
    //         $set: { completed: true }
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log("An error has occured.")
    // })

    // db.collection('users').deleteMany({
    //     name: 'Maria'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteOne(
        { name: 'Jessie' }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



})