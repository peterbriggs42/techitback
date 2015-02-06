var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var WelcomeSections = keystone.list('Welcome Section');
 
	WelcomeSections.model.find()
		.exec(function(err, sections) {
		
		view.render('home/welcome_join', {
			main: 			sections.filter(common.getItemByKey, "join")[0],
			one: 			sections.filter(common.getItemByKey, "games")[0],
			two: 			sections.filter(common.getItemByKey, "downloadable")[0],
			three: 			sections.filter(common.getItemByKey, "video")[0],
			four: 			sections.filter(common.getItemByKey, "causes")[0],
			five: 			sections.filter(common.getItemByKey, "quizzes")[0]
		});
	});
};