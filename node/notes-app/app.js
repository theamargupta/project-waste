const notes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs')


// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'    
        },
        body:{
            describe:'note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})
// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'note title to be removed',
            demandOption: true,
            type: 'string'    
        }
    },
    handler:(argv) => {
       notes.removeNote(argv.title)
    }
})
// create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: () => {
        console.log('listing out all notes')
    }

})
// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log('reading a note')
    }

})
yargs.parse()