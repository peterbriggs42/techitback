var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CyberbullyingSections = keystone.list('Cyberbullying Section');
	CyberbullyingSections.model.find()
		.exec(function(err, posts) {

		var onlineAbuseTitle = posts.filter(common.getItemByKey, "online")[0];

		var OnlineAbuse = keystone.list('Online Abuse');
		OnlineAbuse.model.find()
			.exec(function(err, abuses) {
			
			view.render('home/online_abuse', {
				main: 				onlineAbuseTitle, 
				cyberbullying: 		abuses.filter(common.getItemByKey, "cyberbullying")[0],
				cybersexting: 		abuses.filter(common.getItemByKey, "cybersexting")[0],
				cyberstalking: 		abuses.filter(common.getItemByKey, "cyberstalking")[0],
				pranking: 			abuses.filter(common.getItemByKey, "pranking")[0],
				strangerdanger: 	abuses.filter(common.getItemByKey, "stranger")[0]
			});	
		});
	});
};
