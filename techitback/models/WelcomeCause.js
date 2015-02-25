var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Welcome to our Hour - Causes
 * ==========
 */

var WelcomeCause = new keystone.List('Welcome Cause', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
WelcomeCause.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	image: { type: Types.S3File },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

WelcomeCause.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

WelcomeCause.defaultColumns = 'title';

WelcomeCause.register();
