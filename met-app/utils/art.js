const request = require('request')

const art = (artArr, callback) => { 

    // have to figure out a better method than foreach, it takes too much time , need to do some async stuff to fix it 
    artArr.forEach(element => {
        const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + element
        request({ url, json:true }, (err, { body }) => {
            if(err){
                callback("Unable to connect to server.", undefined)
            } else if(body.message === "ObjectID not found"){
                callback("No matches found. Please try again.", undefined)
            } else {
                callback(undefined, {
                    title: body.title, 
                    img: body.primaryImage,
                    artist: body.artistDisplayName,
                    culture: body.culture,
                    beginDate: body.objectBeginDate,
                    endDate: body.objectEndDate
                })
            }
        })   
    });
}

module.exports = art 