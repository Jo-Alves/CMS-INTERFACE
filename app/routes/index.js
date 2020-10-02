var express = require('express');
var HomeController = require('../controllers/home_controller');
var usuariosController = require('../controllers/usuarios_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/usuarios', usuariosController.index);
module.exports = router;
