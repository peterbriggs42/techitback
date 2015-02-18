var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;


	var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');

	SchoolsParentsCategories.model.find()
		.exec(function(err, categories) {

		var school_category = categories.filter(common.getItemByKey, "models-tips-for-schools")[0];
		var share = categories.filter(common.getItemByKey, "share-what-works")[0];
		var join = categories.filter(common.getItemByKey, "join-our-e-mail-list")[0];

		var SchoolsParentsSections = keystone.list('SchoolsParentsSection');

		SchoolsParentsSections.model.find()
			.exec(function(err, sections) {

			var school_sections = sections.filter(function(section) {
				return section['category'] == school_category.id;
			});
		
			view.render('home/schools_models_schools', {
				main: 				school_category,
				left: 				share,
				right: 				join,

				talk: 				school_sections.filter(common.getItemByKey, "talk-about-it")[0],
				tech_use: 			school_sections.filter(common.getItemByKey, "tech-use-in-school")[0],
				discuss: 			school_sections.filter(common.getItemByKey, "discuss-in-the-classroom")[0],
				tech_health: 		school_sections.filter(common.getItemByKey, "tech-health-curriculum")[0],
				parent: 			school_sections.filter(common.getItemByKey, "parent-school-communication")[0],
				establish: 			school_sections.filter(common.getItemByKey, "establish-a-tech-policy")[0],
			});
		});
	});
};
