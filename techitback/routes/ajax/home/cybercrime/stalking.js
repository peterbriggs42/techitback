var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CybercrimeStalking = keystone.list('Cyber Mistake');
 
	CybercrimeStalking.model.find()
		.exec(function(err, mistakes) {
		
		view.render('home/crime_stalking', {
			cyberstalking: 	mistakes.filter(common.getItemByKey, "cyberstalking")[0],
			cybersexting: 	mistakes.filter(common.getItemByKey, "cybersexting")[0],
			bullying: 		mistakes.filter(common.getItemByKey, "bullying")[0]
		});	
	});
};
