const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/logout', async (req, res) => {
  res.render('login');
});

// A route to render the dashboard page for current date, only for a logged in user
router.get('/dashboard', withAuth, (req, res) => {
  // All of the users posts are obtained from the database
  Entry.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'entry_date',
      'water',
      'exercise',
      'sleep',
      'mood',
      'notes',
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


// A route to render the dashboard page for current date, only for a logged in user
router.get('/dashboard/:entry_date', withAuth, (req, res) => {
    // All of the users posts are obtained from the database
    Entry.findOne({
      where: {
        // use the ID from the session
        user_id: req.session.user_id,
        entry_date: req.body.entry_date,
      },
      attributes: [
        'id',
        'entry_date',
        'water',
        'exercise',
        'sleep',
        'mood',
        'notes',
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



// PUT Update water intake
router.put('/dashboard/water/:water', withAuth, (req, res) => {
  Entry.update(req.body,
      {
          where: {
              id: req.session.user_id
          }
      }
  )
  .then(entryData => {
      if (!entryData) {
          res.status(404).json({ message: 'Drink water BITCH' });
          return;
      }
      res.json(entryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

// PUT Update exercise
router.put('/dashboard/exercise/:exercise', withAuth, (req, res) => {
  Entry.update(req.body,
      {
          where: {
              id: req.session.user_id
          }
      }
  )
  .then(entryData => {
      if (!entryData) {
          res.status(404).json({ message: 'Move your ass BITCH' });
          return;
      }
      res.json(entryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

// PUT Update sleep
router.put('/dashboard/sleep/:sleep', withAuth, (req, res) => {
  Entry.update(req.body,
      {
          where: {
              id: req.session.user_id
          }
      }
  )
  .then(entryData => {
      if (!entryData) {
          res.status(404).json({ message: 'getcha self some sleep BITCH' });
          return;
      }
      res.json(entryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

// PUT Update Mood
router.put('/dashboard/mood/:mood', withAuth, (req, res) => {
  Entry.update(req.body,
      {
          where: {
              id: req.session.user_id
          }
      }
  )
  .then(entryData => {
      if (!entryData) {
          res.status(404).json({ message: 'cheer up BITCH' });
          return;
      }
      res.json(entryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

// PUT Update Mood
router.put('/dashboard/notes/:notes', withAuth, (req, res) => {
  Entry.update(req.body,
      {
          where: {
              id: req.session.user_id
          }
      }
  )
  .then(entryData => {
      if (!entryData) {
          res.status(404).json({ message: 'cheer up BITCH' });
          return;
      }
      res.json(entryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

//GET entry data for selected date
router.post('/dashboard/selectedDate/:entry_date', withAuth, (req, res) => {
    Entry.findOne({
        where: {
            entry_date: req.body.normalisedSelectedDate,
            user_id: req.session.user_id,
        }
    }).then(entryData => {
        console.log(entryData);
        if(!entryData) {
            Entry.create({
                /* id: req.session.user_id, */
                entry_date: req.body.normalisedSelectedDate,
                user_id: req.session.user_id,
                water: 0,
                exercise: 0,
                sleep: 0,
                mood: 0,
                notes: "Notes section"
            }).then(newEntryData => res.json(newEntryData));
            return
        }
        res.json(entryData)
        res.render('/dashboard')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/dashboard/selectedDate/:entry_date', withAuth, (req, res) => {
    Entry.findOne({
        where: {
            entry_date: req.body.normalisedSelectedDate,
            user_id: req.session.user_id,
        }
    }).then(entryData => {
        res.json(entryData);
        res.render('dashboard', { entrys, loggedIn: true });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
})



/* router.get('/dashboard/date/:day', withAuth, async (req, res) => {
  try {req.session.user_id
  // date format day/month/year&
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const entryData = await Entry.findOne(
      {
        where: {
          entry_date: `${req.params.day}/${month}/${year}`,
                user_id: req.session.user_id
          }
      }
  )
  console.log(entryData);
  res.render('dashboard', entryData);}
  catch(err) {
      console.log(err);
      res.status(500).json(err)
  };
}); */



module.exports = router;