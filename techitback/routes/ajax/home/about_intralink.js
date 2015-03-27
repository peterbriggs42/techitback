var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var AboutTitle = keystone.list('About Title');
	 
	AboutTitle.model.find()
		.exec(function(err, posts) {

			function isType(post) {
			  return post.slug == this;
			}
			
			view.render('home/about_intralink', {
				about_tech: posts.filter(isType, "about-tech-it-back")[0],
				about_intralink: posts.filter(isType, "about-intralink-global")[0],
				questions: posts.filter(isType, "questions")[0]
			});	
	});
};
