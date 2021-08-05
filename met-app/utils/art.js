const request = require('request')

const art = (artArr, callback) => { 

    // have to figure out a better method than foreach, it takes too much time , need to do some async stuff to fix it 
    artArr.forEach(element => {
        const ART_PIECE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + element
        request({ url:ART_PIECE_URL, json:true }, (err, resp) => {
            if(err){
                callback("Unable to connect to server.", undefined)
            } else if(resp.body.message === "ObjectID not found"){
                callback("No matches found. Please try again.", undefined)
            } else {
                callback(undefined, {
                    title: resp.body.title, 
                    img: resp.body.primaryImage,
                    artist: resp.body.constituents.name
    
                })
            }
        })   
    });
}

module.exports = art 