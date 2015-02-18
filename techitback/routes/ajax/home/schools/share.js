var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');

	SchoolsParentsCategories.model.find()
		.exec(function(err, categories) {

		var share_category = categories.filter(common.getItemByKey, "share-what-works")[0];
		var left = categories.filter(common.getItemByKey, "join-our-e-mail-list")[0];
		var right = categories.filter(common.getItemByKey, "models-tips-for-schools")[0];
		
		var SchoolsParentsSections = keystone.list('SchoolsParentsSection');
		SchoolsParentsSections.model.find()
			.exec(function(err, sections) {

			var share_sections = sections.filter(function(section) {
				return section['category'] == share_category.id;
			});


			view.render('home/schools_share', {
				main: 				share_category,
				left: 				left,
				right: 				right,

				share: 				share_sections.filter(common.getItemByKey, "share-tips")[0],
				your: 				share_sections.filter(common.getItemByKey, "your-tips")[0],
			});
		});
	});
};