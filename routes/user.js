const router = require('express').Router();
const userController = require('../controllers/user');

// routing url

//GET
router.get('/register', userController.register);
router.get('/login', userController.login);

//POST
router.post('/register', userController.add); //register user
router.post('/login', userController.process_login); //login process

module.exports = router;