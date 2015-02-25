var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Welcome Quizzes
 * ==========
 */

var WelcomeQuizzes = new keystone.List('Welcome Quiz', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
WelcomeQuizzes.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	link: {type: String, noedit: true}
});

WelcomeQuizzes.defaultColumns = 'title';

WelcomeQuizzes.register();
