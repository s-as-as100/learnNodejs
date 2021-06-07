// the os module provides operating system-related
// utility methods and properties. It can be accessed using


const os = require('os');

console.log(os.arch())


// os,freemem() 
// check ram ?
// return <integer>

// returns the amount of free system memory in bytes as an integer

const freeMemory = os.freemem();

// console.log(freeMemory)

// convert into gb
console.log(`${freeMemory /1024/1024/1024 }`)

console.log(os.platform())