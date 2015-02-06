var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CybercrimeSections = keystone.list('Cybercrime');
	 
	CybercrimeSections.model.find()
		.exec(function(err, crimes) {
			
		view.render('home/cybercrime', {
			main: 			crimes.filter(common.getItemByKey, "main")[0],
			mistakes: 		crimes.filter(common.getItemByKey, "mistakes")[0],
			whatis: 		crimes.filter(common.getItemByKey, "whatis")[0]
		});	
	});
};
