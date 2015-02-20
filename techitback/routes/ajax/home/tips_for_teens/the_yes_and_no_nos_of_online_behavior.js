var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var TipsForTeens = keystone.list('TipsForTeens');

	TipsForTeens.model.find()
		.exec(function(err, sections) {
	
		view.render('home/tips_yanng', {
			main: 			sections.filter(common.getItemByKey, "the-yes-and-no-nos-of-online-behavior")[0],
			link: 			sections.filter(common.getItemByKey, "tips-for-using-tech-responsibly")[0],
		});
	});
};
