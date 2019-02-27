const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");

const app = express();
//

app.use(bp.json())
app.use(bp.urlencoded({extended:false}))

// setup database
mongoose.connect("mongodb://admin123:admin123@ds119070.mlab.com:19070/2cc",
{useNewUrlParser:true})

// error handling
mongoose.connection.once("connected", ()=>{
    console.log("connected!")
}).on("error", ()=>{
    console.log("Error connecting")
})


app.use("/", require("./controller/router"))

app.listen("3000", ()=>console.log("listening..."))