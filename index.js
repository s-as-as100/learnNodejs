//  const fs = require("fs")


 // creating a new file
//  fs.writeFileSync("read.txt" , " i love node js")


 // if i creating same file add some data it delete previous data
//  fs.writeFileSync("read.txt", "i love js")



 // add new data inside existing file


//  fs.appendFileSync("read.txt", " i love Reactjs")


 // read data from another file

//  const buf_data = fs.readFileSync("read.txt")

 // node.js includes an additional data type called buffer
 //(not available in browser's JS)
 // Buffer is mainly used to store binary data

 // while read from a file or receiving packets over the  networks


// console.log(buf_data)
 
// convert data into strings
// org_data =  buf_data.toString();

// console.log(org_data)


// file rename 

// fs.renameSync("read.text", "readwrite.txt")


// create a file and add data overwrite in existing file

// const fs  = require("fs")

// fs.writeFileSync("practise.js", "I love Nodejs and Reactjs")

// add data on existing file inside js

// fs.appendFileSync( "practise.js",   "my company is not good ")

// read data from another file


// const buf_data = fs.readFileSync("practise.js")
// console.log(buf_data)

// store binary data 


// convert data into strings
// org_data = buf_data.toString()

// console.log(org_data)


// Q. create a folder named it ariftech

const fs = require('fs')

// fs.mkdirSync("ariftech.js")

fs.writeFileSync("developer.txt", " i love g")

// more data into existing file

fs.appendFileSync("developer.txt", " i love programming")


// read data from another file

const buf_data = fs.readFileSync("developer.txt", "utf-8")

console.log(buf_data)

file = buf_data.toString()
console.log(file)


// rename the file 
fs.renameSync("developer.txt", "reactjs")


// delete 

fs.unlinkSync("reactjs")


// delete folder

fs.rmdirSync("folder name ")









































