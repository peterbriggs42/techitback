var keystone = require('keystone'),
	UserCreatedTip = keystone.list('User Created Tips');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['firstname'];
	var name_can_use = req.body['name_can_use'];
	var age = req.body['age'];
	var country = req.body['country'];
	var state = req.body['state'];
	var yes_answer = req.body['yes_box'];
	var no_answer = req.body['no_box'];

	var newTip = new UserCreatedTip.model({
		name: name,
		name_can_use: name_can_use,
		age: age,
		country: country,
		state: state,
		yes_tip: yes_answer,
		no_tip: no_answer
	}).save(function(err) {
		view.render('yanng/yanng_createsharethanks');	
	});
};