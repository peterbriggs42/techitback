var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogHome = keystone.list('Post');
 
	BlogHome.model.find()
		.exec(function(err, posts) {

		console.log(posts);
		
		view.render('home/blog', {
			post1: 		posts[0],
			post2:  	posts[1],
			post3: 		posts[2],
			post4:  	posts[3]
		});
	});
};