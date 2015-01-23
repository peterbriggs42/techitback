var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Yanng Post Model
 * ==========
 */

var AboutQuestion = new keystone.List('About Question', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

AboutQuestion.add({
	title: { type: String, required: true },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

AboutQuestion.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

AboutQuestion.defaultColumns = 'title';

AboutQuestion.register();
