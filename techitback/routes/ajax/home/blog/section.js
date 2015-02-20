var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var PostCategory = keystone.list('PostCategory');

	PostCategory.model.find()
		.where('key', req.params['section'])
		.exec(function(err, categories) { 
		
		var BlogSection = keystone.list('Post');
		BlogSection.model.find()

			.where('categories').in([categories[0]['_id']])
			.exec(function(err, posts) {


				var AllBlogSections = keystone.list('Post');
				AllBlogSections.model.find()
					.exec(function(err, all_posts) {

			
				view.render('home/blog', {
					favorites: 		common.getFavoritePosts(all_posts),
					selected: 		req.params['section'],
					postsLeft: 		posts.filter(function(element) { return posts.indexOf(element) % 2 != 0; }),
					postsRight:  	posts.filter(function(element) { return posts.indexOf(element) % 2 == 0; })
				});
			});
		});
	});
};