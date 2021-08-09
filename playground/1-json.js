const fs = require('fs')


// WRITING TO FILE 

/* const book = {
     title: 'Ego is the enemy',
    author: 'Ryan Holiday'
 }

 const bookJSON = JSON.stringify(book)

 fs.writeFileSync('1-json.json', bookJSON) */ 

// READING FROM FILE 

/* const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title) */


// CHALLENGE ANSWER 

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const data = JSON.parse(dataString)
data.name = 'Maleeha'
data.age = 21 

const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)


