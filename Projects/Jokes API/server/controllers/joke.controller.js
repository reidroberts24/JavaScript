const Joke = require('../models/joke.model')

// find all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( (allJokes) => res.json(allJokes))
        .catch( (err) => console.log(err))
}

// find one joke (by ID)
module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then( (singleJoke) => res.json( singleJoke) )
        .catch( (err) => console.log(err))
}

// create new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req)
        .then( (newJoke) => res.json(newJoke))
        .catch( (err) => console.log(err))
}
// edit one joke (by ID)
module.exports.updateJoke = (req, res) => {
    Joke.updatedJoke( {_id: req.params._id }, req.body,)
}
//look up hwo to update a document with mongoose!!!!!!!

// delete a joke (by ID)