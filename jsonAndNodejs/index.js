// json stand for javascript object notations 
// json is light weight
// json for storing and transporting the data 

// json often used for when data is sent from a server to webpage


// two method 
// 1 parse 2. stringfy
// stringify convert  object into json
// parse  convert into string or object ?
 const fs = require('fs')
const mySelf = {
    name: "mohd",
    age:23,
    course:"b.tech",
    job:"software developer"
}
// console.log(mySelf)

// const json = JSON.stringify(mySelf)

// console.log(json)

// const obj = JSON.parse(json)
// console.log(obj)

//1. convert to json 
// 2.add on another file
//3. readfile
// 4.convert back to object
//5 show on console

const obj = JSON.stringify(mySelf)
console.log(obj)

fs.writeFile("json.json1" , obj, (err) => {
    console.log("done")
})

fs.readFile("json1.json", "utf-8", (err,data) => {
    console.log(data)
})


















































