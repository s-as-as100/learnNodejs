// the http.createServer() mehod includes request  and
// response parameters which is supplied by nodejs

//  the request object can be used to get information 
// about the current HTTP request. 

// if the response from the http server is supposed
// to be displayed as html ,
// you should include an http header with correct content 
//type


// 127.0.0.1  == localhost

// module
const http = require('http');

const fs = require('fs');

// createServer
const server = http.createServer((req, res) => {
   const data = fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8")
    const objData = JSON.parse(data)
    // console.log(req.url)


      if(req.url =="/") {
          res.end("my home page")
      }
    else if (req.url =="/userapi") {
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(objData[1].name)
    }
    else if (req.url =="/contact") {
        res.end("my contatc page")
    }
    else if (req.url =="/skill") {
        res.write()  // also work
        res.end("my skills page")
    }
     
    else {
        // unknown url add status code 
     res.writeHead(404 , {"Content-type" : "text/html"})

        res.end(" <h1>  404 error page doesn't exits </h1>")

    }

})

// listenig
server.listen(7000, "127.0.0.1", () => {
    console.log("listening  to port 7000")
})