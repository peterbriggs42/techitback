var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var YanngAbout = keystone.list('Yanng Post');
	 
	YanngAbout.model.find()
		.where('key','about-2')
		.exec(function(err, posts) {
        // Render the view
		view.render('yanng/yanng_about2', {
			text: posts[0]
		});	
    });
};
