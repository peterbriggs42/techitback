var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var Cyberstalking = keystone.list('Online Abuse');
	 
	Cyberstalking.model.find()
		.exec(function(err, abuses) {
			
		view.render('home/oa_cyberstalking', {
			cyberbullying: 	abuses.filter(common.getItemByKey, "cyberbullying")[0],
			cyberstalking: 	abuses.filter(common.getItemByKey, "cyberstalking")[0],
			pranking: 		abuses.filter(common.getItemByKey, "pranking")[0],
			cybersexting: 	abuses.filter(common.getItemByKey, "cybersexting")[0],
			stranger: 		abuses.filter(common.getItemByKey, "stranger")[0]
		});	
	});
};
