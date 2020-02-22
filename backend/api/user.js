const router = require('express').Router();

const auth = require('../controllers/auth');

router.get('/register', (req, res) => {
    auth.register();
});

module.exports = router;