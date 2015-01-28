var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var stories = keystone.list('Share Your Story Section');
	 
	stories.model.find()
		.exec(function(err, sections) {
			
		view.render('home/share_sections', {
			share: 	sections.filter(common.getItemByKey, "share")[0],
			see: 	sections.filter(common.getItemByKey, "see")[0]
		});	
	});
};
