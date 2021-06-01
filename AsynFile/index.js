const fs = require("fs")

// this is asyn way to create file and put data on the file


fs.writeFile("dev.txt", " i love Js", 
// once comple callback call
(err)  => {
    console.log(" completed")
    console.log(err)
})


// we pass them a function as an arguments- a callback--
// that gets called  when task completes..

// a function is passed as argument its called 
// call back

// the callback has an arguments that tells you whether
// the operations completed successfully

// Now we need to say what to do when fs.writeFile
// has completed ( even if it's nothing), and start
// checking for errors



// add data in Asyn

fs.appendFile("dev.txt", " i love Mern Tech" , (err)=> {
    console.log(" task completed")
    console.log(err)
})

// data read from file

fs.readFile("dev.txt" , "UTF-8", (err, data)=> {
    console.log(data, err)
})
































