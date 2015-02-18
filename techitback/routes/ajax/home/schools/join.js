var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');

	SchoolsParentsCategories.model.find()
		.exec(function(err, categories) {

		var join_category = categories.filter(common.getItemByKey, "join-our-e-mail-list")[0];
		var left = categories.filter(common.getItemByKey, "models-tips-for-parents")[0];
		var right = categories.filter(common.getItemByKey, "share-what-works")[0];
		
		view.render('home/schools_join', {
			main: 				join_category,
			left: 				left,
			right: 				right,
		});
	});
};
