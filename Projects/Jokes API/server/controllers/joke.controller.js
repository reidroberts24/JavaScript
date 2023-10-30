const Joke = require('../models/joke.model')

// find all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => res.json(allJokes))
        .catch( err => console.log(err))
}

// find one joke (by ID)
module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then( singleJoke => res.json( singleJoke) )
        .catch( err => console.log(err))
}

// create new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then( newJoke => res.json(newJoke))
        .catch( err => console.log(err))
}
// edit one joke (by ID)
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate( {_id: req.params._id }, req.body, {
        new: true,
        runValidators: true
    })
        .then( updatedJoke => res.json(updatedJoke) )
        .catch( err => console.log(err))
}

// delete a joke (by ID)
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then( result => res.json(result))
        .catch( err => console.log(err) )
}