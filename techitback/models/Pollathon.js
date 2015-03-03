var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Poll-A-Thon
 * ==========
 */

var Pollathon = new keystone.List('Pollathon', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
Pollathon.add({
	title: { type: String, required: true },
	html: {
		brief: { type: Types.Html, wysiwyg: false, height: 300 },
	},
});

Pollathon.defaultColumns = 'title';

Pollathon.register();
