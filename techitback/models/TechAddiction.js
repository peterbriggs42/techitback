var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Home - Tech Addiction
 * ==========
 */

var YanngPost = new keystone.List('Tech Addiction', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

YanngPost.add({
	title: { type: String, required: true },
	image: { type: Types.S3File },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

YanngPost.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

YanngPost.defaultColumns = 'title';

YanngPost.register();
