const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: "Freddie",
    email: "freddiebrewin@live.com",
    password: "password"
  },
  {
    id: 2,
    name: "Dana",
    email: "Dana@gmail.com",
    password: "password"
  },
  {
    id: 3,
    name: "Jack",
    email: "jack@gmail.com",
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;