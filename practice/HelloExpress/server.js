const express = require("express");
const faker = require('faker');

const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) ); 



const createUser = () => ({
  userPassword: faker.internet.password(),
  userEmail: faker.internet.email(),
  userPhoneNumber: faker.phone.number(),
  userLastName: faker.person.lastName(),
  userFirstName: faker.person.firstName(),
  userID: faker.string.uuid(),

});


app.get("/api/users/new", (req, res) => {
  newUser = createUser();
  res.json(newUser)
})