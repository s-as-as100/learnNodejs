 

const chalk = require("chalk")
const validator = require('validator')

console.log(chalk.yellow("hello"))


const res = validator.isEmail('fojo@bar.com');

console.log(res  ? chalk.green.inverse(res) : chalk.red.inverse(res) )
