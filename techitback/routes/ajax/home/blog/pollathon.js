var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogPosts = keystone.list('Post');
 
	BlogPosts.model.find()
		.exec(function(err, posts) {

		var Pollathon = keystone.list('Pollathon');
 
		Pollathon.model.find()
			.exec(function(err, polls) {

			view.render('home/blog_pollathon', {
				favorites: common.getFavoritePosts(posts),
				left: 		polls.filter(function(post) { return post.title == "left" })[0],
				middle: 	polls.filter(function(post) { return post.title == "middle" })[0],
				right: 		polls.filter(function(post) { return post.title == "right" })[0],
			});
		});
	});

};