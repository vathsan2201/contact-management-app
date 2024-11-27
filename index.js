const express = require("express")
const dotenv = require("dotenv").config()
const contact = require("./routes/contactRoutes")
const users = require("./routes/userRoutes.js")
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")
const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use('/api/contacts',contact)
app.use('/api/users',users)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on ${port}`))