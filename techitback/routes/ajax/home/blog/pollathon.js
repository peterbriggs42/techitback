var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogPosts = keystone.list('Post');
 
	BlogPosts.model.find()
		.exec(function(err, posts) {

		view.render('home/blog_pollathon', {
			favorites: common.getFavoritePosts(posts)
		});
	});

};