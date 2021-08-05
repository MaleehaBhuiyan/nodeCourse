const request = require('request');
const search = require('./utils/search')
const art = require('./utils/art')

const searchKey = process.argv[2]

if(!searchKey){
    console.log('Please provide a search term.')
} else {
    search(searchKey, (err, searchData) => {
        if(err){
            return console.log(err)
        }
        console.log(searchData.total)
        console.log(searchData.searchTerm)

        art(searchData.searchArr, (err, artData) => {
            if(err){
                return console.log(err)
            }

            console.log(artData.title)
            console.log(artData.img)


        })
    })
}






