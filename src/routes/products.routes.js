const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products.controller')


router.get('/',productCtrl.getAll);

router.post('/',productCtrl.createOne);

module.exports = router;