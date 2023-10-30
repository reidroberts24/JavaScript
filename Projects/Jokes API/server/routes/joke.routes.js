const JokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.get('/api/jokes/:_id', JokeController.findSingleJoke)
    app.post('/api/jokes', JokeController.createJoke)
    app.patch('/api/jokes/:_id', JokeController.updateJoke)
    app.delete('/api/jokes/:_id', JokeController.deleteJoke)
}