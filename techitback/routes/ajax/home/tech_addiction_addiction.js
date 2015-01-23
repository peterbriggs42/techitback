var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var TechAddictionAddiction = keystone.list('Tech Addiction');
	 
	TechAddictionAddiction.model.find()
		.exec(function(err, posts) {

			function isType(post) {
			  return post.title == this;
			}
			
			view.render('home/tech_addiction_addiction', {
				home: posts.filter(isType, "Home")[0],
				sleep: posts.filter(isType, "Sleep")[0],
				addiction: posts.filter(isType, "Addiction")[0],
				multi: posts.filter(isType, "Multitasking")[0],
				desensitization: posts.filter(isType, "Desensitization")[0],
				stress: posts.filter(isType, "Stress and Depression")[0]
			});	
	});
};
