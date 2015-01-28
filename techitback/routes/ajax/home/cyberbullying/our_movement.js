var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CyberbullyingSections = keystone.list('Cyberbullying Section');
	CyberbullyingSections.model.find()
		.exec(function(err, posts) {

		var theirStoriesTitle = posts.filter(common.getItemByKey, "movement")[0];

		var TheirStories = keystone.list('Their Story');
		TheirStories.model.find()
			.exec(function(err, abuses) {
			
			view.render('home/theirstories', {
				main: 		theirStoriesTitle, 
				amanda: 	abuses.filter(common.getItemByKey, "amanda")[0],
				rebecca: 	abuses.filter(common.getItemByKey, "rebecca")[0],
				marcus: 	abuses.filter(common.getItemByKey, "marcus")[0]
			});	
		});
	});
};
