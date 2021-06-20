// nodejs Streams

// streams are objects that let you read data from a source 
// or write data to a destination in continuos . fashion 
// in nodejs there are four types of streams 
// -- streaming means listening to music or watching 
// video in 'real time ' instead of downloading
// a file to your compouter and watching it later


// readable  --> stream which is used for read opertaions
//writable --> stream which is used for write operations
// duplex - stream which can be used for both read and write operations
// transform -- A type of duplex stream where the output
// is computed based on input 


// each type of stream is an EventEmitter instance and throws several events
// diiferent instance of times . for exmaple , some of the commonly used 
// events are 
// data --- this  event is fired when there is data is available to read
// end --> this evnet is fired when there ios no more data to read

// error  --> when there is any error receiving or writing data
// finish --> when all the data has been flushed to underlying system

const fs = require("fs");

const http = require("http");

const server  = http.createServer();

server.on("request", (req,res) => {
    //  fs.readFile("input.txt",(err,data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // })

    const rstream = fs.createReadStream("input.txt");

    rstream.on('data',(chunkdata) => {
        res.write(chunkdata)
    })
    rstream.on('end', () => {
        res.end();
    })
    rstream.on('error', (err)=> {
        console.log(err);
        res.end("file not founds")
    })
})


server.listen(8000, "127.0.0.1")




// 2nd way
// reading from a stream
// create a readable stream
// handle stream events  --> data, end, and error





























