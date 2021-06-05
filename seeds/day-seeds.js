const { Day } = require('../models');

const dayData = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }

];

const seedDays = () => Day.bulkCreate(dayData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedDays;