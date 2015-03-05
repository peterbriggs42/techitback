var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var BlogHome = keystone.list('Post');
 
	BlogHome.model.find()
		.exec(function(err, posts) {

		var RSSFeed = keystone.list('RSS Feed');
 
		RSSFeed.model.find()
			.exec(function(err, rss) {

			view.render('home/blog', {
				favorites: common.getFavoritePosts(posts),
				postsLeft: 		posts.filter(function(element) { return posts.indexOf(element) % 2 != 0; }),
				postsRight:  	posts.filter(function(element) { return posts.indexOf(element) % 2 == 0; }),
				rss: 			rss.map(function(item) { return item.link }).join("|")
			});
		});
	});
};