const express = require("express")
const dbConnection = require("./config/dbConnect")
const dotenv = require("dotenv").config()
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoute")
const app = express()
//middleware 
app.use(express.json())
dbConnection();
//routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


//start server
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})     


