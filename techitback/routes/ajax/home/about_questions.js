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

			var AboutQuestions = keystone.list('About Question');
	 
			AboutQuestions.model.find()
				.exec(function(err, questions) {
			
					view.render('home/about_questions', {
						about_tech: posts.filter(isType, "about-tech-it-off")[0],
						about_intralink: posts.filter(isType, "about-intralink-global")[0],
						questions: posts.filter(isType, "questions")[0],
						all_questions : questions
					});	

			});
	});
};
