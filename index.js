const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())

const port = process.env.PORT || 5000
const apiData = require("./data.json")


app.get("/", (res, req) => {
    res.send("Hello I'm live")
})

app.get("/service", (res, req) => {
    const apiData = require("./data.json")

    res.send(apiData)

})

app.listen(port, () => {
    console.log("I am live again");
})