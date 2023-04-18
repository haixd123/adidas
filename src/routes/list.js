const express = require('express');
const router = express.Router();

const listProductController = require('../controllers/List');

router.get('/', listProductController.show);

module.exports = router;
