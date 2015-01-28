var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var amanda = keystone.list('Their Story');
	 
	amanda.model.find()
		.exec(function(err, stories) {
			
		view.render('home/ts_amanda', {
			amanda: 	stories.filter(common.getItemByKey, "amanda")[0],
			rebecca: 	stories.filter(common.getItemByKey, "rebecca")[0],
			marcus: 	stories.filter(common.getItemByKey, "marcus")[0]
		});	
	});
};
