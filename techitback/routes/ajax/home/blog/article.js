var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
		locals.moment = require('moment');

	var BlogHome = keystone.list('Post');
 
	BlogHome.model.find()
		.exec(function(err, posts) {

		var selected_post = posts.filter(function(post) {
			return post.id == req.params['id'];
		})[0];

		var BlogComments = keystone.list('PostComment');
 
		BlogComments.model.find()
			.exec(function(err, comments) {

			comments = comments.filter(function(comment) {
				return comment['post'] == selected_post.id;
			});

			view.render('home/blog_article', {
				post: 	 selected_post,
				comments: comments
			});
		});
	});
};