var keystone = require('keystone'),
	JoinTheHour = keystone.list('Join The Hour');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['name'];
	var email = req.body['email'];
	var country = req.body['country'];
	var state = req.body['state'];
	var text = req.body['text'];

	var newEntry = new JoinTheHour.model({
		name: name,
		email: email,
		country: country,
		state: state,
		text: text,
	}).save(function(err) {
		view.render('jointhehour_thanks');	
	});
};