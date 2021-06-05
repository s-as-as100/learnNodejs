const fs = require("fs");

// synchronous

// first we get the firt data then we go ahead

// this is synchor version


// const data = fs.readFileSync("dev.txt" ,"utf-8")
// console.log(data)

// console.log(" become a full stack developer")


// asynchoronous way
//it doesnlt wait anyone 

fs.readFile("dev.txt", "utf-8", (err, data) => {
    console.log(data)
})

console.log(" i love you")

// create a folder name techno

fs.mkdir("techno" , (err) => {
console.log(err)
})

// create file inside the techno 

fs.writeFile("./techno/tech.txt", "heelo", (err,data) => {
    console.log(data)
})