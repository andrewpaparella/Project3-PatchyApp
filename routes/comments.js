const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const patchNotesCtrl = require('../controllers/patchNotes');
// require the authorization middleware function
const ensureLoggedIn = require('../config/ensureLoggedIn');

// router.post('/new', commentsCtrl.create)
// router.delete('/:id', commentsCtrl.delete)



module.exports = router;