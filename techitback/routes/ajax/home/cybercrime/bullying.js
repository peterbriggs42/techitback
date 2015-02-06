var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CybercrimeBullying = keystone.list('Cyber Mistake');
 
	CybercrimeBullying.model.find()
		.exec(function(err, mistakes) {
		
		view.render('home/crime_bullying', {
			cyberstalking: 	mistakes.filter(common.getItemByKey, "cyberstalking")[0],
			cybersexting: 	mistakes.filter(common.getItemByKey, "cybersexting")[0],
			bullying: 		mistakes.filter(common.getItemByKey, "bullying")[0]
		});	
	});
};
