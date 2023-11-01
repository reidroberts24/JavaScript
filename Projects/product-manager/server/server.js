const cors = require('cors')
const express = require('express');
const app = express();
const port = 8000;

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json()) //allows json objects to be posted
app.use(express.urlencoded( { extended: true } )) //allows json objects with strings and arrays

require('./config/mongoose.config')    
require('./routes/product.routes')(app)
app.listen(port, () => console.log(`Listening on port: ${port}`) );

//make sure back end logic works and stores data before working on the front-end
