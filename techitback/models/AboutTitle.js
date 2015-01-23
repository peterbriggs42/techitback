var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - About
 * ==========
 */

var AboutTitle = new keystone.List('About Title', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
AboutTitle.add({
	title: { type: String, required: true },
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

AboutTitle.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
AboutTitle.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

AboutTitle.defaultColumns = 'title';

AboutTitle.register();
