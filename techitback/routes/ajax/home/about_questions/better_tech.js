var keystone = require('keystone'),
common = require('./common');

var question_key = 'better_tech';

exports = module.exports = function(req, res) {
	common.returnAboutQuestion(req, res, keystone, question_key);
};
