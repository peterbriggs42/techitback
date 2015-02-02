var keystone = require('keystone'),
	ReportAbuse = keystone.list('Report Abuse');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var age = req.body['age'];
	var country = req.body['country'];
	var state = req.body['state'];
	var url = req.body['url'];
	var text = req.body['text'];

	var newEntry = new ReportAbuse.model({
		age: age,
		country: country,
		state: state,
		url: url,
		abuse: text
	});
	newEntry.save(function(err) {
		newEntry._.image.uploadFile(req.files['file'], true, function(err, fileData) {
	   		newEntry.image = fileData;
	   		newEntry.save();
		});
		view.render('home/report_it_thanks');	
	});
};