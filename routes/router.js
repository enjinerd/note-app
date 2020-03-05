const router = require('express').Router();

//Use rootController from controller
const rootController = require('../controllers/root');
// require noteController
const noteController = require('../controllers/note');

//Defining route when access URL
router.get('/', rootController.index);
router.get('/notes/create', noteController.create);

// POST route for form
router.post('/notes', noteController.add);

// route for edit form
router.get('/notes/:id/edit', noteController.edit);
router.put('/notes/:id/edit', noteController.update);

// route for delete notes
router.delete('/notes/:id/remove', noteController.remove);

module.exports = router;
