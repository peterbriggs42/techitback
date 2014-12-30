var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var YanngGirl = keystone.list('Yanng Girl');
	 
	YanngGirl.model.find()
		.where('key','goldie')
		.exec(function(err, posts) {
        // Render the view
		view.render('yanng/girls/goldie', {
			girl: posts[0]
		});	
    });
};
