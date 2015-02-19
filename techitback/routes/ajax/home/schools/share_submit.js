var keystone = require('keystone'),
	ShareTip = keystone.list('ShareTip'),
	common = require('../common');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['name'];
	var state = req.body['state'];
	var country = req.body['country'];
	var content = req.body['text'];

	var newShareTip = new ShareTip.model({
		
		name: name,
		country: country,
		state: state,
		content: content

	}).save(function(err) {

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
				var other_section = school_sections.filter(common.getItemByKey, 'your-tips')[0];

				view.render('home/schools_share_tips_thanks', {
					left: 		other_section,
					right: 		other_section,
				});
			});
		});
	});
};


