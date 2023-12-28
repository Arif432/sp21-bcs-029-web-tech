const express = require('express');
const router = express.Router();
const { postCalculation,getCalculation} = require('../controllers/calculator');

router.post('/postCal',postCalculation);
router.get('/getCal',getCalculation);

module.exports = router;