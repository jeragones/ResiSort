var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('request_forms/renovation', { title: 'Solicitud de Renovación de Residencia' });
});

module.exports = router;