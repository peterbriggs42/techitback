var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogHome = keystone.list('Post');
 
	BlogHome.model.find()
		.exec(function(err, posts) {

		view.render('home/blog_submit', {
			favorites: common.getFavoritePosts(posts),
		});
	});
};