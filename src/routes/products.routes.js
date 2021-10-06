const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products.controller')



//Create
router.post('/',productCtrl.createOne);
//Read
router.get('/',productCtrl.getAll);
router.get('/:id',productCtrl.getOne);
//Update
router.put('/:id',productCtrl.updateOne);
//Delete
router.delete('/:id',productCtrl.deleteOne);

module.exports = router;