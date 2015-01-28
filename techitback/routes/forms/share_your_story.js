var keystone = require('keystone'),
	ShareYourStory = keystone.list('Share Your Story');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['name'];
	var age = req.body['age'];
	var country = req.body['country'];
	var state = req.body['state'];
	var type = req.body['type'];
	var text = req.body['text'];

	var newEntry = new ShareYourStory.model({
		name: name,
		age: age,
		country: country,
		state: state,
		type: type,
		text: text
	}).save(function(err) {
		view.render('home/share_story_thanks');	
	});
};