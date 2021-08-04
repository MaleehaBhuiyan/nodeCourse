const request = require('request')

const art = (artPieceID, callback) => {
    const ART_PIECE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + artPieceID
    
    request({ url:ART_PIECE_URL, json:true }, (err, resp) => {
        if(err){
            callback("Unable to connect to server.", undefined)
        } else if(resp.body.message === "ObjectID not found"){
            callback("No matches found. Please try again.", undefined)
        } else {
            callback(undefined, {
                title: resp.body.title, 

            })
        }
    })
}

art(436524, (err, data) => {
    console.log('Data', data)
    console.log('Error', err)
})

module.exports = art 