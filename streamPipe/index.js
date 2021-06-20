// nodejs streams

// stream.pipe(), the method used to take a readable
// stream and correct it to a writeable steam

// readable.pipe(destination[,options]) 


// destination -- <stream.writable> the destination for 
// writing data 

// options  <object> pipe options

// --> end <boolean> End the writer whebn the reader ends . default : true


// returns <stream.Writable > the destination, 
// allowing for chain of pipes if it a Duplex or transform stream


// 3rd way


const fs = require("fs");

const http = require("http");

const server  = http.createServer();

server.on("request", (req,res) => {
    //  fs.readFile("input.txt",(err,data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // })

    // const rstream = fs.createReadStream("input.txt");

    // rstream.on('data',(chunkdata) => {
    //     res.write(chunkdata)
    // })
    // rstream.on('end', () => {
    //     res.end();
    // })
    // rstream.on('error', (err)=> {
    //     console.log(err);
    //     res.end("file not founds")

    // 3rd way
    const rstream = fs.createReadStream("in.txt");
rstream.pipe(res);
    // })
})


server.listen(8000, "127.0.0.1")
