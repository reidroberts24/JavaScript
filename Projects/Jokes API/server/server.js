
// server.js - will handle all the server logic with express

const express = require('express')
const app = express()
require('./config/mongoose.config')
app.use(express.json(), express.urlencoded({ extended: true }))
const AllMyUserRoutes = require('./routes/user.routes')
AllMyUserRoutes(app)
app.listen(8000, () => console.log("Server is running on port 8000"))