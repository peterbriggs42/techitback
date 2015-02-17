var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogHome = keystone.list('Post');
 
	BlogHome.model.find()
		.exec(function(err, posts) {
		
		view.render('home/blog', {
			favorites: 		posts, //fixme
			postsLeft: 		posts.filter(function(element) { return posts.indexOf(element) % 2 != 0; }),
			postsRight:  	posts.filter(function(element) { return posts.indexOf(element) % 2 == 0; })
		});
	});
};