const chalk = require('chalk');
const fs = require ('fs')

// create add note
const addNote = (title, body)=>{
    const notes = loadNotes()
    const dupicateNote = notes.find((a)=> a.title===title)
    if (!dupicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else {
        console.log(chalk.red.inverse('note title taken'))
    }

    
}

// create remote note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((a)=> a.title !== title)
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }
    
    
}

// list notes
const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.inverse('Your Notes'))
    
    notes.forEach(note =>{
        console.log(note.title)
    })
}

// read notes
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    
    if (note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('no note found'))
    }
}

// create save note to file
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
// create load note from file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
    
}

module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}