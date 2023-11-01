module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

const Person = require('../models/person.model')
 

// req.body is for all the JSON data
// req.params is for specific route parameters like /api/:id
module.exports.createPerson = (req, res) => {
    personInfo = req.body;
    Person.create(personInfo) //returns a Promise 
        .then(person => res.json(person)) //when the Promise is resolved. it takes the created person as the argument and sends back as a JSON response
        .catch(err => res.json(err))
}
 