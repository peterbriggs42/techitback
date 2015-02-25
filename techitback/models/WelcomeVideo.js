var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Welcome Sections
 * ==========
 */

var WelcomeVideo = new keystone.List('Welcome Video', {
	map: { name: 'title' },
	label: 'Video',
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
WelcomeVideo.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	link: {type: Types.Url, noedit: true},
});

WelcomeVideo.defaultColumns = 'title';

WelcomeVideo.register();
