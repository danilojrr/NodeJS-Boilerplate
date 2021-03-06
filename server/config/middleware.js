'use strict';

module.exports = {
	isLoggedIn: function (req, res, next) {
		if (req.isAuthenticated()) {
			next();
		} else {
			res.redirect('/login');
		}
	},
	putUserInResLocal: function (req, res, next) {
		res.locals.session = undefined;

		if (req.user) {
			res.locals.session = {
				user: req.user.info
			};
		}

		next();
	},
	notFoundHandler: function (req, res) {
		if (req.isAuthenticated()) {
			res.render('error', {
				error: {
					statusCode: 404,
					message: 'Page Not Found',
					description: 'We could not find the page you were looking for'
				}
			});
		} else {
			res.redirect('/login');
		}
	},
	internalServerErrorHandler: function (error, req, res) {
		res.render('error', {
			error: {
				statusCode: 500,
				message: 'Internal Server Error',
				description: 'We will work on fixing that right away',
				stackTrace: error.stack
			}
		});
	}
};
