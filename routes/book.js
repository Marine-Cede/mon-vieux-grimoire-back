const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bookCtrl = require('../controllers/book');
const sharper = require('../middleware/sharp-config');
const router = express.Router();

router.get('/',  bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestRatings);
router.get('/:id',  bookCtrl.getOneBook);
router.post('/', auth, multer, sharper, bookCtrl.createBook);
router.put('/:id', auth, multer,sharper, bookCtrl.modifyBook);
router.post('/:id/rating', auth, bookCtrl.createRating);
router.delete('/:id', auth, bookCtrl.deleteBook);


module.exports = router;