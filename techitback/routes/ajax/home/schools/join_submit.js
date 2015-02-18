var keystone = require('keystone'),
	EmailList = keystone.list('EmailList'),
	common = require('../common');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['name'];
	var position = req.body['type']
	var school = req.body['school']
	var state = req.body['state']
	var country = req.body['country']
	var email = req.body['email']

	var newEmailList = new EmailList.model({
		
		name: name,
		position: position,
		school_name: school,
		email: email,
		country: country,
		state: state

	}).save(function(err) {

		var SchoolsParentsCategories = keystone.list('SchoolsParentsCategory');

		SchoolsParentsCategories.model.find()
			.exec(function(err, categories) {

			var join_category = categories.filter(common.getItemByKey, "join-our-e-mail-list")[0];
			var left = categories.filter(common.getItemByKey, "models-tips-for-parents")[0];
			var right = categories.filter(common.getItemByKey, "share-what-works")[0];

			view.render('home/schools_join_thanks', {
				main: 				join_category,
				left: 				left,
				right: 				right,
			});
		});
	});
};


