// common.js
// ========

var getPostBySlug = function(post) {
  return post.slug == this;
}

var getQuestionByKey = function(question) {
  return question.key == this;
}

var returnAboutQuestion = function(req, res, keystone, question_key) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	var AboutTitle = keystone.list('About Title');
	 
	AboutTitle.model.find()
		.exec(function(err, posts) {

			var AboutQuestions = keystone.list('About Question');
	 
			AboutQuestions.model.find()
				.exec(function(err, questions) {

					view.render('home/about_questions', {
						about_tech: posts.filter(getPostBySlug, "about-tech-it-back")[0],
						about_intralink: posts.filter(getPostBySlug, "about-intralink-global")[0],
						questions: posts.filter(getPostBySlug, "questions")[0],
						all_questions : questions,
						question: questions.filter(getQuestionByKey, question_key)[0]
					});	
			});
	});
}

// And export them for module usage
module.exports = {
	getPostBySlug: 		getPostBySlug,
	getQuestionByKey: 	getQuestionByKey,
	returnAboutQuestion: returnAboutQuestion
};