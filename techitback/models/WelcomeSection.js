var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Welcome Sections
 * ==========
 */

var WelcomeSection = new keystone.List('Welcome Section', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
WelcomeSection.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	link: {type: String, noedit: true},
	image: { type: Types.S3File }
});

WelcomeSection.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

WelcomeSection.defaultColumns = 'title';

WelcomeSection.register();
