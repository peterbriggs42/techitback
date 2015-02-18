var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;


	var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');

	SchoolsParentsCategories.model.find()
		.exec(function(err, categories) {

		var parent_category = categories.filter(common.getItemByKey, "models-tips-for-parents")[0];
		var share = categories.filter(common.getItemByKey, "models-tips-for-schools")[0];
		var join = categories.filter(common.getItemByKey, "join-our-e-mail-list")[0];

		var SchoolsParentsSections = keystone.list('SchoolsParentsSection');

		SchoolsParentsSections.model.find()
			.exec(function(err, sections) {

			var school_sections = sections.filter(function(section) {
				return section['category'] == parent_category.id;
			});
		
			view.render('home/schools_models_parents', {
				main: 				parent_category,
				left: 				share,
				right: 				join,

				talk_it_out:		school_sections.filter(common.getItemByKey, "talk-it-out")[0],
				keep_up_with_apps:	school_sections.filter(common.getItemByKey, "keep-up-with-apps")[0],
				set_boundaries:		school_sections.filter(common.getItemByKey, "set-boundaries")[0],
				join_them:			school_sections.filter(common.getItemByKey, "join-them")[0],
				tech_check:			school_sections.filter(common.getItemByKey, "tech-check")[0],
				report_it:			school_sections.filter(common.getItemByKey, "report-it")[0],
				just_say_no:		school_sections.filter(common.getItemByKey, "just-say-no")[0],
			});
		});
	});
};
