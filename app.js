const express = require("express")
const bp = require("body-parser")
const app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended:false}))

app.get("/", (req,res)=>{
    res.json({
        message:"Hello there"
    })
})

app.post("/", (req,res)=>{
    res.json(req.body)
})

app.listen("3000", ()=>console.log("listening"))
