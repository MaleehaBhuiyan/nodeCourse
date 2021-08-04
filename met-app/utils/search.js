const request = require("request")

const search = (searchKey, callback) => {
    const SEARCH_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + encodeURIComponent(searchKey) 

    request({ url:SEARCH_URL, json:true }, (err, resp) => {
        if(err){
            callback('Unable to connect to MET Muesuem services.', undefined)
        } else if(resp.body.total === 0){
            callback('No searches found, please try again.', undefined)
        } else {
            callback(undefined, {
                searchArr: resp.body.objectIDs
            })
        }
    })
}

search('Sunflowers', (err, data) => {
  console.log('Error', err)
  console.log('Data', data)
})

module.exports = search