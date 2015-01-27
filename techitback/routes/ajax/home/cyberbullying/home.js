var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CyberbullyingSections = keystone.list('Cyberbullying Section');
	 
	CyberbullyingSections.model.find()
		.exec(function(err, posts) {
			
		view.render('home/cyberbullying', {
			main: 			posts.filter(common.getItemByKey, "main")[0],
			online_abuse: 	posts.filter(common.getItemByKey, "online")[0],
			share: 			posts.filter(common.getItemByKey, "share")[0],
			movement: 		posts.filter(common.getItemByKey, "movement")[0],
			report: 		posts.filter(common.getItemByKey, "report")[0]
		});	
	});
};
