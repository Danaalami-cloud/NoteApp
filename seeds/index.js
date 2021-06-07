const seedUsers = require('./user-seeds');
/* const seedDays = require('./day-seeds'); */
const seedEntrys = require('./entry-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
/*     await seedDays();
    console.log('\n----- DAYS SEEDED -----\n'); */
    await seedEntrys();
    console.log('\n----- ENTRYS SEEDED -----\n');
    
    process.exit(0);
  };
  
  seedAll();