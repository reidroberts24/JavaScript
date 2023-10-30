const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Established a connection to the database'))
    .catch( err => console.log('Something went wrong connecting to the database: ', err));
