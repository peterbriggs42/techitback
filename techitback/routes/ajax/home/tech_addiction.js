var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var YanngAbout = keystone.list('Tech Addiction');
	 
	YanngAbout.model.find()
		.where('title','Home')
		.exec(function(err, posts) {

			console.log(posts);
        // Render the view
		view.render('home/tech_addiction', {
			text: posts[0]
		});	
    });
};
