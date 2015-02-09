var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogHome = keystone.list('Post');
 
	BlogHome.model.find()
		.exec(function(err, posts) {

		var selected_post = posts.filter(function(post) {
			console.log(post.id+" and "+req.params['id']);
			return post.id == req.params['id'];
		})[0];

		view.render('home/blog_article', {
			post: 	 selected_post
		});
	});
};