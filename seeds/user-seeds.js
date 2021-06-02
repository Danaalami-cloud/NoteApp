const { User } = require('../models');

const userData = [
  {
    username: "Freddie",
    email: "freddiebrewin@live.com ",
    password: "password1234"
  },
  {
    username: "Dana",
    email: "Dana@gmail.com",
    password: "password1234"
  },
  {
    username: "Jack",
    email: "jack@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;