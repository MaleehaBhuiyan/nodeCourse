const request = require('request');
const search = require('./utils/search')
const art = require('./utils/art')

const searchKey = process.argv[2]

if(!searchKey){
    console.log('Please provide a search term.')
} else {
    search(searchKey, (err, { total, searchTerm, searchArr } = {}) => {
        if(err){
            return console.log(err)
        }
        console.log(total)
        console.log(searchTerm)
      
        art(searchArr, (err, { title, img, artist, culture, beginDate, endDate } = {}) => {
            if(err){
                return console.log(err)
            }
            console.log(title)
            console.log(img)
            console.log(artist)
            console.log(culture)
            console.log(beginDate)
            console.log(endDate)
            console.log('-------------------------------------')
        })
    })
}






