const router = require('express').Router();
const User = require('../models/users');

router.post('/register', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err){
        console.log(err);
    }
});

module.exports = router;