var keystone = require('keystone'),
	BlogSubmission = keystone.list('BlogSubmission'),
	common = require('../common');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var name = req.body['name'];
	var email = req.body['email'];
	var content = req.body['text'];

	var newEntry = new BlogSubmission.model({
		name: name,
		email: email,
		content: content,
	}).save(function(err) {

		var BlogHome = keystone.list('Post');
 
		BlogHome.model.find()
			.exec(function(err, posts) {

			view.render('home/blog_submit_thanks', {
				favorites: common.getFavoritePosts(posts)
			});
		});
	});
};