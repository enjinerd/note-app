// depencies
const { Router } = require('express');
const userController = require('../controllers/user');

const router = new Router();

// route url

//GET
router.get('/register', userController.register);
router.get('/login', userController.login);

//POST
router.post('/register', userController.add); //register user
router.post('/login', userController.process_login); //login process

module.exports = router;