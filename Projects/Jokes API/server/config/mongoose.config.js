const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my_first_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Established a connection to the database'))
    .catch( err => console.log('Something went wrong connecting to the database: ', err));