var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Cyberbullying - Their Stories
 * ==========
 */

var WelcomeGame = new keystone.List('Welcome Game', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
WelcomeGame.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	link: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

WelcomeGame.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

WelcomeGame.defaultColumns = 'title';

WelcomeGame.register();
