const router = require('express').Router();
const userController = require('../controllers/user');
const { checkLogin, afterLogin } = require('../middlewares/check_login');

// routing url

//GET
router.get('/register', afterLogin, userController.register);
router.get('/login', afterLogin, userController.login);
router.get('/logout', userController.process_logout)

//POST
router.post('/register', afterLogin, userController.add); //register user
router.post('/login', afterLogin, userController.process_login); //login process

module.exports = router;