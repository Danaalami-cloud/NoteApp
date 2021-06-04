const User = require('../models');

const userData = [
  {
    id: 1,
    name: "Freddie",
    email: "freddiebrewin@live.com ",
    password: "password1234"
  },
  {
    id: 2,
    name: "Dana",
    email: "Dana@gmail.com",
    password: "password1234"
  },
  {
    id: 3,
    name: "Jack",
    email: "jack@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;