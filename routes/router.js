const router = require('express').Router();

// Use rootController from controller
const rootController = require('../controllers/root');

// require noteController
const noteController = require('../controllers/note');

// use checklogin
const { checkLogin } = require('../middlewares/check_login');

//Defining route when access URL
router.get('/', checkLogin, rootController.index);
router.get('/notes/create', checkLogin, noteController.create);

// POST route for form
router.post('/notes', checkLogin, noteController.add);

// route for edit form
router.get('/notes/:id/edit', checkLogin, noteController.edit);
router.put('/notes/:id/edit', checkLogin, noteController.update);

// route for delete notes
router.delete('/notes/:id/remove', checkLogin, noteController.remove);

module.exports = router;
