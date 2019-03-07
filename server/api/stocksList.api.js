var Router = require('express').Router();
var Controller = require('../controller/controller');

Router.get('/', Controller.getData);
Router.get('/:symbol', Controller.findSymbol);

module.exports = Router;