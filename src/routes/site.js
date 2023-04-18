const express = require('express');
const router = express.Router();

const site = require('../controllers/Site');

// router.get('/search', siteController.search);
router.get('/', site.index);

module.exports = router;