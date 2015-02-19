var keystone = require('keystone'),
	CorporatePartnerSubmission = keystone.list('CorporatePartnerSubmission'),
	common = require('../common');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var newEmailList = new CorporatePartnerSubmission.model({
		
		first_name: req.body['first_name'],
		title: req.body['title'],
		website: req.body['website'],
		address1: req.body['address1'],
		city: req.body['city'],
		country: req.body['country'],
		last_name: req.body['last_name'],
		company: req.body['company'],
		email: req.body['email'],
		address2: req.body['address2'],
		state: req.body['state'],
		zip: req.body['zip'],
		content: req.body['text']

	}).save(function(err) {
		view.render('home/corporate_partnerwithus_thanks');	
	});
};


