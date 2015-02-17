var keystone = require('keystone'),
	PostComment = keystone.list('PostComment'),
	common = require('../common');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
		locals.moment = require('moment');

	// Come up with the Post
	var BlogHome = keystone.list('Post');
	BlogHome.model.find()
		.exec(function(err, posts) {

		var selected_post = posts.filter(function(post) {
			return post.id == req.params['id'];
		})[0];

		// Generate a Post Comment model to save
		var newComment = new PostComment.model({

			name: req.body['name'],
			text: req.body['text'],
			post: selected_post

		}).save(function(err) {

			var BlogComments = keystone.list('PostComment');
			BlogComments.model.find()
				.sort('-created_at')
				.exec(function(err, comments) {

				comments = comments.filter(function(comment) {
					return comment['post'] == selected_post.id;
				});

				view.render('home/blog_article', {
					favorites: common.getFavoritePosts(posts),
					post: 	 selected_post,
					comments: comments
				});
			});
		});
	});
};