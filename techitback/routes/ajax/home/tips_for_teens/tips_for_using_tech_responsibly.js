var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var TipsForTeens = keystone.list('TipsForTeens');

	TipsForTeens.model.find()
		.exec(function(err, sections) {
	
		view.render('home/tips_main', {
			main: 			sections.filter(common.getItemByKey, "tips-for-using-tech-responsibly")[0],
			link: 			sections.filter(common.getItemByKey, "the-yes-and-no-nos-of-online-behavior")[0],
			watch: 			sections.filter(common.getItemByKey, "watch-what-you-post")[0],
			check: 			sections.filter(common.getItemByKey, "check-your-connects")[0],
			once: 			sections.filter(common.getItemByKey, "once-its-there-its-there")[0],
			techbreak: 		sections.filter(common.getItemByKey, "its-ok-to-take-a-tech-break")[0],
			solution: 		sections.filter(common.getItemByKey, "be-a-part-of-the-solution")[0],
		});
	});
};
