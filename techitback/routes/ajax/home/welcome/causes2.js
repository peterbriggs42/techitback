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
		
			view.render('home/welcome_causes2', {
				main: 			sections.filter(common.getItemByKey, "causes")[0],
				one: 			sections.filter(common.getItemByKey, "quizzes")[0],
				two: 			sections.filter(common.getItemByKey, "join")[0],
				three: 			sections.filter(common.getItemByKey, "games")[0],
				four: 			sections.filter(common.getItemByKey, "downloadable")[0],
				five: 			sections.filter(common.getItemByKey, "video")[0],
				// Causes
				stopbullying: 	causes.filter(common.getItemByKey, "stopbullying")[0],
				thrive: 		causes.filter(common.getItemByKey, "thrive")[0],
				memorial: 		causes.filter(common.getItemByKey, "memorial")[0]
			});
		});
	});
};