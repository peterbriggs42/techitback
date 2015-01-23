var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Tech Addiction
 * ==========
 */

var TechAddiction = new keystone.List('Tech Addiction', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
TechAddiction.add({
	title: { type: String, required: true },
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

TechAddiction.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
TechAddiction.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 200);
	next();
});

TechAddiction.defaultColumns = 'title';

TechAddiction.register();
