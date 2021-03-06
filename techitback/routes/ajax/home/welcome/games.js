var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var WelcomeSections = keystone.list('Welcome Section');
 
	WelcomeSections.model.find()
		.exec(function(err, sections) {

		var WelcomeGames = keystone.list('Welcome Game');

		WelcomeGames.model.find()
			.exec(function(err, games) {
	
			view.render('home/welcome_games', {
				// Welcome sections
				main: 			sections.filter(common.getItemByKey, "games")[0],
				one: 			sections.filter(common.getItemByKey, "downloadable")[0],
				two: 			sections.filter(common.getItemByKey, "video")[0],
				three: 			sections.filter(common.getItemByKey, "causes")[0],
				four: 			sections.filter(common.getItemByKey, "quizzes")[0],
				five: 			sections.filter(common.getItemByKey, "join")[0],

				// Games
				stacking: 		games.filter(common.getItemByKey, "stacking")[0],
				challenge:  	games.filter(common.getItemByKey, "challenge")[0],
				forward:  		games.filter(common.getItemByKey, "forward")[0],
				talk: 		 	games.filter(common.getItemByKey, "talk")[0],
				wikipedia:  	games.filter(common.getItemByKey, "wikipedia")[0],
				band: 		 	games.filter(common.getItemByKey, "band")[0],
			});
		});
	});
};