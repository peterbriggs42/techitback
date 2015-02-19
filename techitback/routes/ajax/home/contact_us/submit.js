var keystone = require('keystone'),
	ContactUs = keystone.list('ContactUs'),
	common = require('../common');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['name'];
	var email = req.body['email']
	var content = req.body['text']

	var newEmailList = new ContactUs.model({
		
		name: name,
		email: email,
		content: content

	}).save(function(err) {
		view.render('home/contact_us_thanks');	
	});
};


