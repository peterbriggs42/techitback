var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'gallery';
	
	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));
	
	var YanngAbout = keystone.list('Yanng Post');
	 
	YanngAbout.model.find().exec(function(err, posts) {
        // Render the view
		view.render('yanng', {
			text: posts[2]
		});
    });
	
};
