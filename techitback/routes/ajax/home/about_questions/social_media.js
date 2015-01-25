var keystone = require('keystone'),
common = require('./common');

var question_key = 'social_media';

exports = module.exports = function(req, res) {
	common.returnAboutQuestion(req, res, keystone, question_key);
};
