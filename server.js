// const http  = require('http')
// const port = 5000

// const server = http.createServer(function(res,req){

// })

// server.listen(port,function(error){
//     if (error) {
//         console.log("something went wrong!",error);
//     }
//     else{
//         console.log('server is listening on port '+port);
//     }
// })




const express   =  require("express")
const data = require("./data.json")

const app = express()
app.get("/server", (req, res)=>{
    res.json(data)
})

app.get("/", (req, res)=>{
    res.send("hello")
})

app.listen(7000,()=>{
    console.log("Server is running 5000 port");
})