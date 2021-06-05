const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    res.render('login');
})

router.get('/login', async (req, res) => {
    res.render('login');
})

router.get('/dashboard', async (req, res) => {
    const userData = await User.findOne({
        where: {
            id: req.session.user_id
        }
    })
    console.log(userData);
    res.render('dashboard');
})

module.exports = router;