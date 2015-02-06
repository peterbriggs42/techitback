var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CybercrimeSections = keystone.list('Cybercrime');
	 
	CybercrimeSections.model.find()
		.exec(function(err, crimes) {

		var CybercrimeMistakes = keystone.list('Cyber Mistake');
	 
		CybercrimeMistakes.model.find()
			.exec(function(err, mistakes) {
			
			view.render('home/crime_mistakes', {
				mistakes: 		crimes.filter(common.getItemByKey, "mistakes")[0],
				cyberstalking: 	mistakes.filter(common.getItemByKey, "cyberstalking")[0],
				cybersexting: 	mistakes.filter(common.getItemByKey, "cybersexting")[0],
				bullying: 		mistakes.filter(common.getItemByKey, "bullying")[0]
			});	
		});
	});
};
