const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../../utils/auth');

/* router.get('/dashboard/entry_date/:entry_date', withAuth, async (req, res) => {
    try {
        const entryData = await Entry.findOne(
            {
                where: {
                    user_id: req.session.user_id,
                    entry_date: req.params.entry_date,
                },
            }
        );
        const entry = entryData.get({plain: true});
        res.render('dashboard', { entrys: [entry], loggedIn: true });
        res.json(entry);
        console.log(entry);
    } catch (err) {
        res.status(500).json(err);
    }
}); */
