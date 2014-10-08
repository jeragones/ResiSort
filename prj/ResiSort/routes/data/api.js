var express = require('express');
var router = express.Router();
var career = require('../data/json/careers');
var province = require('../data/json/provinces');
var canton = require('../data/json/cantons');
var district = require('../data/json/districts');

/* GET home page. */
router.get('/careers', function(req, res) {
	res.json(career.Carreras);
	res.end();
});

module.exports = router;








/* GET home page. */
/*
router.get('/', function(req, res) {
	
	var provinces = [];
	province.Provincias.forEach(function(obj, i) {
		provinces.push({
			id: obj.Id,
			name: obj.Nombre
		});
	});
	res.json({
		title: 'Solicitud de Renovación para Residencia', 
		careers: careers,
		provinces: provinces
	});
});

module.exports = router; 

*/