const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/calandar', withAuth, async (req, res) => {
    res.render('calandar');
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
// router.get('/dashboard', withAuth, (req, res) => {
//     // All of the users posts are obtained from the database
//     Entry.findAll({
//         where: {
//             // use the ID from the session
//             user_id: req.session.user_id,
//         },
//         attributes: [
//             'id',
//             'entry_date',
//             'water',
//             'exercise',
//             'sleep',
//             'mood',
//             'notes',
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['name']
//             },
//         ]
//     })
//         .then(entryData => {
//             // serialize data before passing to template
//             /* console.log(entryData[0].water); */
//             const entrys = entryData.map(entry => entry.get({ plain: true }));

//             /* console.log(entrys); */
//             res.render('dashboard', { entrys, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// PUT Update water intake
router.put('/dashboard/water/:water', withAuth, (req, res) => {
    Entry.update(req.body,
        {
            where: {
                user_id: req.session.user_id,
                entry_date: req.body.date,
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
                user_id: req.session.user_id,
                entry_date: req.body.date,
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
                user_id: req.session.user_id,
                entry_date: req.body.date,
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
                user_id: req.session.user_id,
                entry_date: req.body.date,
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

// PUT Update Notes
router.put('/dashboard/notes/:notes', withAuth, (req, res) => {
    Entry.update(req.body,
        {
            where: {
                user_id: req.session.user_id,
                entry_date: req.body.date,
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
router.get('/dashboard/entry_date/:entry_date', withAuth, async (req, res) => {
    try {
        console.log(req.params.entry_date)
        const entryData = await Entry.findOne(
            {
                where: {
                    user_id: req.session.user_id,
                    entry_date: req.params.entry_date,
                },
            }
        );

        if (!entryData) {
            try {
                const newEntryData = await Entry.create(
                    {
                        user_id: req.session.user_id,
                        entry_date: req.params.entry_date,
                    }
                );
                const entry = newEntryData({ plain: true });
                res.render('dashboard', { entrys: [entry], loggedIn: true });
                console.log(entry);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            const entry = entryData.get({ plain: true });
            res.render('dashboard', { entrys: [entry], loggedIn: true });
            /* res.json(entry); */
            console.log(entry);
        }


    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/dashboard/entry_date/:entry_date', withAuth, async (req, res) => {
    try {
        console.log(req.params.entry_date)
        const entryData = await Entry.findOne(
            {
                where: {
                    user_id: req.session.user_id,
                    entry_date: req.params.entry_date,
                },
            }
        );

        if(!entryData) {
            try {
                const newEntryData = await Entry.create(
                    {
                    user_id: req.session.user_id,
                    entry_date: req.params.entry_date,
                    }
                );
                const entry = newEntryData ({ plain : true });
                console.log(entry);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            const entry = entryData.get({plain: true});
            /* res.render('dashboard', { entrys: [entry], loggedIn: true }); */
            res.json(entry);
            console.log(entry); 
        }

        
    } catch (err) {
        res.status(500).json(err);
    }
});
 



//graph route

router.get('/graph', withAuth, (req, res) => {
    // All of the users posts are obtained from the database
    Entry.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id,
        },
        attributes: [
            'water',
            'exercise',
            'sleep',
            'mood',
            'notes',
        ],
    })
        .then(entryData => {
            // serialize data before passing to template
            /* console.log(entryData[0].water); */
            const entrys = entryData.map(entry => entry.get({ plain: true }));

            /* console.log(entrys); */
            res.render('graph', { entrys, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;