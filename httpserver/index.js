// the http.createServer() mehod includes request  and
// response parameters which is supplied by nodejs

//  the request object can be used to get information 
// about the current HTTP request. 

// if the response from the http server is supposed
// to be displayed as html ,
// you should include an http header with correct content 
//type


// 127.0.0.1  == localhost


const http = require('http');


const server = http.createServer((req, res) => {
    res.end("hello i love nodejs ")
})


server.listen(7000, "127.0.0.1", () => {
    console.log("listening to port 7000")
})