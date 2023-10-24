const express = require("express");
const {faker} = require('@faker-js/faker');


const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

const createUser = () => ({
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  lastName: faker.person.lastName(),
  firstName: faker.person.firstName(),
  _id: faker.string.uuid(),

});

const createCompany = () => ({
  _id: faker.string.uuid(),
  name: faker.company.name(),
  address: {
    street: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  }
})

// returns new user
app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser)
})

// returns new company
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany()
  res.json(newCompany)
})

//returns new company and user
app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const response = {
    user: newUser,
    company: newCompany
  }
  res.json(response)
})

app.listen( port, () => console.log(`Listening on port: ${port}`) ); 
