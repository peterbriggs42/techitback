var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var WelcomeSections = keystone.list('Welcome Section');
 
	WelcomeSections.model.find()
		.exec(function(err, sections) {

		var WelcomeCauses = keystone.list('Welcome Cause');
 
		WelcomeCauses.model.find()
			.exec(function(err, causes) {
		
			view.render('home/welcome_causes_selected', {
				main: 			sections.filter(common.getItemByKey, "causes")[0],
				one: 			sections.filter(common.getItemByKey, "quizzes")[0],
				two: 			sections.filter(common.getItemByKey, "join")[0],
				three: 			sections.filter(common.getItemByKey, "games")[0],
				four: 			sections.filter(common.getItemByKey, "downloadable")[0],
				five: 			sections.filter(common.getItemByKey, "video")[0],
				// Causes
				previous: 		causes.filter(common.getItemByKey, "stomp")[0],
				selected: 		causes.filter(common.getItemByKey, "moodoff")[0],
				next: 			causes.filter(common.getItemByKey, "campaign")[0],
			});
		});
	});
};