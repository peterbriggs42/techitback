var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var YanngGirl = keystone.list('Yanng Girl');
	 
	YanngGirl.model.find()
		.where('key','yumi')
		.exec(function(err, posts) {
        // Render the view
		view.render('yanng/girls/yumi', {
			girl: posts[0]
		});	
    });
};
