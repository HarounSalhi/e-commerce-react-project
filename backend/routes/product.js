const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

router.get('/',productCtrl.list);
router.post('/add',productCtrl.add);
router.post('/update',productCtrl.update);
router.post('/delete',productCtrl.delete);
router.post('/addCart',productCtrl.addCart);

module.exports= router;