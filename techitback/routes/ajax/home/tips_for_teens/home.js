var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var TipsForTeens = keystone.list('TipsForTeens');

	TipsForTeens.model.find()
		.exec(function(err, sections) {
	
		view.render('home/tips_home', {
			main: 			sections.filter(common.getItemByKey, "main")[0],
			top: 			sections.filter(common.getItemByKey, "tips-for-using-tech-responsibly")[0],
			bottom: 		sections.filter(common.getItemByKey, "the-yes-and-no-nos-of-online-behavior")[0]
		});
	});
};
