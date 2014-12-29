var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Yanng Post Model
 * ==========
 */

var YanngPost = new keystone.List('Yanng Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

YanngPost.add({
	title: { type: String, required: true },
	key: Types.Key,
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

YanngPost.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

YanngPost.defaultColumns = 'title';
YanngPost.register();
