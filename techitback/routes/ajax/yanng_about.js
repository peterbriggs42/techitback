var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var YanngAbout = keystone.list('Yanng Post');
	 
	YanngAbout.model.find()
		.where('key','about')
		.exec(function(err, posts) {
        // Render the view
		view.render('yanng_about', {
			text: posts[0]
		});	
    });
};
