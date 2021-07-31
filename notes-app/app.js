const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('@gmail.com'))

const greenMsg = chalk.green('Success')

console.log(chalk.bold.inverse(greenMsg))



