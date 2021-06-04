const router = require('express').Router();
const User = require('../../models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Get all user data route
 router.get('/', (req,res) => {
  User.findAll({
    attributes: {exclude: ['password'] } //exclude the password
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

//POST add a new router /api/users
router.post('/', (req, res) => {
  // create method
  // expects an object in the form {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    // send the user data back to the client as confirmation and save the session
    .then(userData => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.loggedIn = true;
    
        res.json(userData);
      });
    })
    // if there is a server error, return that error
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST login route
/* router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({ where: { email: req.body.email } });
    console.log(req.body.password);
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
}); */


module.exports = router;