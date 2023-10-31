const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', PersonController.index);
}

