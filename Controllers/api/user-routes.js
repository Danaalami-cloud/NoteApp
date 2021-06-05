const router = require('express').Router();
const { User } = require('../../models');
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

// POST /api/users/login -- login route for a user
router.post('/login',  (req, res) => {
  // findOne method by email to look for an existing user in the database with the email address entered
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
      where: {
      email: req.body.email
      }
  }).then(userData => {
      // if the email is not found, return an error
      if (!userData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
      }
      // Otherwise, verify the user.
      // call the instance method as defined in the User model
      const validPassword = userData.checkPassword(req.body.password);
      console.log(validPassword);
      // if the password is invalid (method returns false), return an error
      if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
      }
      // otherwise, save the session, and return the user object and a success message
      req.session.save(() => {
        // declare session variables
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  });  
});


module.exports = router;