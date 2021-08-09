const request = require("request")

const search = (searchKey, callback) => {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + encodeURIComponent(searchKey) 

    request({ url, json:true }, (err, { body }) => {
        if(err){
            callback('Unable to connect to MET Muesuem services.', undefined)
        } else if(body.total === 0){
            callback('No searches found, please try again.', undefined)
        } else {
            callback(undefined, {
                searchTerm: searchKey,
                total: body.total,
                searchArr: body.objectIDs 
            })
        }
    })
}

module.exports = search