var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var YanngEtiquette = keystone.list('Yanng Post');
	 
	YanngEtiquette.model.find()
		.where('key', 'etiquette')
		.exec(function(err, posts) {
        // Render the view
		view.render('yanng/yanng_etiquette', {
			text: posts[0]
		});	
    });
};
