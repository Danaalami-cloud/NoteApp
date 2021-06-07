const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

/* router.get('/dashboard', async (req, res) => {
    const userData = await User.findOne({
        where: {
            id: req.session.user_id
        }
    })
    const entryData = await Entry.findOne({
        where: {
            id: req.session.user_id
        }
    });
    const entrys = entryData.map((entry) => entry.get({ plain:true}))
    console.log(userData); 
    console.log(entryData);
    res.render('dashboard', {
        entrys,
        logged_in: req.session.logged_in
    });
}) */

// A route to render the dashboard page, only for a logged in user
router.get('/dashboard', withAuth, (req, res) => {
    // All of the users posts are obtained from the database
    Entry.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'entry_date',
        'water',
        'exercise',
        'sleep',
        'mood',
      ],
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ]
    })
      .then(entryData => {
        // serialize data before passing to template
        /* console.log(entryData[0].water); */
        const entrys = entryData.map(entry => entry.get({ plain: true }));
        console.log(entrys); 
        /* console.log(entryData); */
        res.render('dashboard', { entrys, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;