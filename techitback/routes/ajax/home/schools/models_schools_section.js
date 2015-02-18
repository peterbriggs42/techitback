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
			var school_category = categories.filter(common.getItemByKey, "models-tips-for-schools")[0];
			var school_sections = sections.filter(function(section) {
				return section['category'] == school_category.id;
			});

			// Find chosen section by URL param
			var chosen_section = school_sections.filter(common.getItemByKey, req.params['section'])[0];
			var order = chosen_section['order'];

			// Come up with all orders except the selected one
			var all_orders = [1,2,3,4,5,6];
			all_orders.splice(all_orders.indexOf(order), 1);

			var other_sections = [];
			for (index in all_orders) {
				other_sections.push(school_sections.filter(common.getItemByOrder, all_orders[index])[0]);
			}

			// Get left and right links
			var left_order = (order - 1 < 1) ? 6 : order - 1;
			var right_order = (order + 1 > 6) ? 1 : order + 1;

			view.render('home/schools_models_schools_selected', {
				main: 		chosen_section,
				left: 		school_sections.filter(common.getItemByOrder, left_order)[0],
				right: 		school_sections.filter(common.getItemByOrder, right_order)[0],

				one: 		other_sections[0],
				two: 		other_sections[1],
				three: 		other_sections[2],
				four:  		other_sections[3],
				five:  		other_sections[4],
			});
		});
	});
};
