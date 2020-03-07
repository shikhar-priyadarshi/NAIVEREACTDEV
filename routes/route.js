const router = require('express').Router();
const passport = require('passport');
const controller = require('../controllers');


router.post('/register', passport.authenticate('register',{ session : false }),controller.register);
router.post('/LogIn', passport.authenticate('login',{ session : false }),controller.login)
router.post('/Logout',controller.logout);









router.get('/',( req, res) =>{
    res.send('SERVER IS WORKING');
})

module.exports = router;