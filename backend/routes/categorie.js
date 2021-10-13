const express = require('express');
const router= express.Router();

const categorieCtrl=require('../controllers/categorie');

router.get('/',categorieCtrl.list);
router.post('/add',categorieCtrl.add);
router.post('/update',categorieCtrl.update);
router.post('/delete',categorieCtrl.delete);

module.exports = router;