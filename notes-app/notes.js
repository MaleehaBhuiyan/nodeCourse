const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes..."
}

// job is to get note saved into the data file 
addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => {
        return note.title === title 
    })
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body 
        })

        saveNotes(notes)

        console.log(chalk.green.bold.inverse('New note added!'))
    } else {
        console.log(chalk.red.bold.inverse('Note title taken'))
    }
}

// job is to remove notes from file 

removeNote = (title) => {
    const notes = loadNotes()
    const filterArr = notes.filter(note => note.title !== title)

    saveNotes(filterArr)

    if(filterArr.length === notes.length){
        console.log(chalk.red.bold.inverse('Note title not found.')) 
    } else console.log(chalk.green.bold.inverse('Note is removed!'))
}

// job is to list all note titles 

listNotes = () => {
    const notes = loadNotes()
    const noteTitles = notes.map(note => note.title)
    const titles = noteTitles.join('\n')
    console.log(chalk.bold.blue.inverse('All notes'))
    console.log(titles)
}

// job is to read a note 

readNote = (title) => {
    notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if(note){
        console.log(chalk.blue.bold(note.title))
        console.log(note.body)
    } else console.log(chalk.red.inverse('Note not found'))
}

// loads all notes (using it for addNote, removeNote)

loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

// saves data 

saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote 
}