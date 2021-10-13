const express =require('express');
const router =express.Router();

const orderCtrl= require('../controllers/order');

router.get('/',orderCtrl.list);
router.post('/add',orderCtrl.add);
router.post('/update',orderCtrl.update);
router.post('/delete',orderCtrl.delete);

module.exports=router;