const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bookCtrl = require('../controllers/book');
const router = express.Router();

router.get('/',  bookCtrl.getAllBooks);
router.get('/:id',  bookCtrl.getOneBook);
router.post('/', auth, multer, bookCtrl.createBook);
router.put('/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);


module.exports = router;