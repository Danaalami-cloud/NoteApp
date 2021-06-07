const { Entry } = require('../models');

const entryData = [
  {
    id: 1,
    water: 5,
    exercise: 80,
    sleep: 360,
    mood: 10,
    user_id: 1,
    entry_date: "07/06/2021"
  },
  {
    id: 2,
    water: 2,
    exercise: 60,
    sleep: 460,
    mood: 10,
    user_id: 2,
    entry_date: "07/06/2021"
  },
  {
    id: 3,
    water: 3,
    exercise: 50,
    sleep: 260,
    mood: 10,
    user_id: 3,
    entry_date: "08/06/2021"
  }
];

const seedEntrys = () => Entry.bulkCreate(entryData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedEntrys;