var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	var CorporatePartners = keystone.list('CorporatePartners');

	CorporatePartners.model.find()
		.exec(function(err, sections) {
	
		view.render('home/corporate_home', {
			partners: 		sections.filter(common.getItemByKey, "corporatepartners")[0],
			partnerwithus: 	sections.filter(common.getItemByKey, "partnerwithus")[0],
		});
	});
};
