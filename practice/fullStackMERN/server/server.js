
const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors())
const port = 8000;
    
require('./routes/person.routes')(app)
app.listen(port, () => console.log(`Listening on port: ${port}`) );
