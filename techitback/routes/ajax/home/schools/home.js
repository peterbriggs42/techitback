var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');

	SchoolsParentsCategories.model.find()
		.exec(function(err, categories) {
	
		view.render('home/schools_home', {
			main: 				categories.filter(common.getItemByKey, "main")[0],
			models_schools: 	categories.filter(common.getItemByKey, "models-tips-for-schools")[0],
			join: 				categories.filter(common.getItemByKey, "join-our-e-mail-list")[0],
			models_parents: 	categories.filter(common.getItemByKey, "models-tips-for-parents")[0],
			share: 				categories.filter(common.getItemByKey, "share-what-works")[0],
		});
	});
};
