const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/person', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the "person" database'))
    .catch(err => console.log('An error occurred connecting to the database. ', err));