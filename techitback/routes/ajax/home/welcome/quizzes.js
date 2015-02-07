var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var WelcomeSections = keystone.list('Welcome Section');
 
	WelcomeSections.model.find()
		.exec(function(err, sections) {

		var WelcomeQuizzes = keystone.list('Welcome Quiz');
 
		WelcomeQuizzes.model.find()
			.exec(function(err, quizzes) {
		
			view.render('home/welcome_quizzes', {
				main: 			sections.filter(common.getItemByKey, "quizzes")[0],
				one: 			sections.filter(common.getItemByKey, "join")[0],
				two: 			sections.filter(common.getItemByKey, "games")[0],
				three: 			sections.filter(common.getItemByKey, "downloadable")[0],
				four: 			sections.filter(common.getItemByKey, "video")[0],
				five: 			sections.filter(common.getItemByKey, "causes")[0],

				realorfake: 	quizzes.filter(common.getItemByKey, "realorfake")[0],
				techitoff: 		quizzes.filter(common.getItemByKey, "techitoff")[0],
				cellphone: 		quizzes.filter(common.getItemByKey, "cellphone")[0],
				survive: 		quizzes.filter(common.getItemByKey, "survive")[0],
				geek: 			quizzes.filter(common.getItemByKey, "geek")[0],
				technology: 	quizzes.filter(common.getItemByKey, "technology")[0],
			});
		});
	});
};