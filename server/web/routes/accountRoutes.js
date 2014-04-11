'use strict';

var accountController = require('./../controllers/accountController');

module.exports = function (app, di) {
	app.get('/login', accountController.loginPage);
	app.post('/login', accountController.login);
	app.get('/logout', accountController.logout);
	app.get('/signup', accountController.signupPage);
	app.post('/signup', accountController.signup.inject(di));
};