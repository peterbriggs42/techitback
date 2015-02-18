var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Get all Categories
	var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');
	SchoolsParentsCategories.model.find()
		.exec(function(err, categories) {

		// Now get all sections
		var SchoolsParentsSections = keystone.list('SchoolsParentsSection');
		SchoolsParentsSections.model.find()
			.exec(function(err, sections) {

			// Narrow Sections by School Category
			var share_category = categories.filter(common.getItemByKey, "share-what-works")[0];
			var school_sections = sections.filter(function(section) {
				return section['category'] == share_category.id;
			});

			// Find chosen section by URL param
			var chosen_section = school_sections.filter(common.getItemByKey, 'your-tips')[0];
			var other_section = school_sections.filter(common.getItemByKey, 'share-tips')[0];

			view.render('home/schools_your_tips', {
				main: 		chosen_section,
				left: 		other_section,
				right: 		other_section,
			});
		});
	});
};
