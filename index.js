const http = require('http')
const url = require('url')
//console.log(http);


const fs = require('fs')

//console.log(fs);

//writeFile

// fs.writeFile('hello.txt','hello',(err)=>{
    
//     if (err) throw err
//     console.log("SuccessFully Created");
// })

//Append
// fs.appendFile('hello.txt','\n\nhello',(err)=>{
    
//     if (err) throw err
//     console.log("SuccessFully Append");
// })

//delete
// fs.unlink('hello.txt',(err)=>{
//     if(err) throw err
//     console.log("SuccessFully Deleted");
// })

//rename
// fs.rename('hello.txt','balaji.txt',(err)=>{
//     if(err) throw err
//     console.log("SuccessFully Renamed");
// })

// Read

// fs.readFile('balaji.txt',(err,data)=>{
//     if(err) throw err 
//     console.log("Reading...");
//     console.log(data);
// })








http.createServer((req,res)=>{

    //console.log(req.url);
    const q = url.parse(req.url,true).query
    const pathname = url.parse(req.url,true).pathname
    console.log(pathname);
    fs.readFile(("./"+pathname),(err,data)=>{
        if(err){
            res.writeHead(404,{"Context-Type":"text/html"})
            res.write("<h1>404 Page Not found</h1>")
            res.end()

        }else{
            res.writeHead(200,{"Context-Type":"text/html"})
            res.write(data)
            res.end()
        }
    })
    //res.write("Hello")
    //res.end()
}).listen(3000,()=>{console.log("Running....")})