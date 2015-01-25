var keystone = require('keystone'),
common = require('./about_questions/common');

var question_key = undefined;

exports = module.exports = function(req, res) {
	common.returnAboutQuestion(req, res, keystone, question_key);
};
