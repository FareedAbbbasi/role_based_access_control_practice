const express = require("express")
const dbConnection = require("./config/dbConnect")
const dotenv = require("dotenv").config()

const app = express()

//middleware 

app.use(express.json())
dbConnection();
//routes


//start server
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})     


