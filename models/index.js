const User = require('./user');
/* const Day = require('./Day'); */
const Entry = require('./Entry');

User.hasMany(Entry, {
    foreignKey: 'user_id',
});

Entry.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User,/*  Day, */ Entry };