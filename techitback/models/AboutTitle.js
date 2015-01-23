var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Yanng Post Model
 * ==========
 */

var AboutTitle = new keystone.List('About Title', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

AboutTitle.add({
	title: { type: String, required: true },
	image: { type: Types.S3File },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

AboutTitle.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

AboutTitle.defaultColumns = 'title';

AboutTitle.register();
