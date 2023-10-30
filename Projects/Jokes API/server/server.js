
// server.js - will handle all the server logic with express
const express = require('express')
const app = express();
const port = 8000
require('./config/mongoose.config')

app.use(express.json(), express.urlencoded( { extended: true} ) )

const JokeRoutes = require('./routes/joke.routes')
JokeRoutes(app)
app.listen(port, () => console.log(`Server running on port ${port}`))