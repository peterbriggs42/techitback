var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Tech Addiction
 * ==========
 */

var CyberbullyingSection = new keystone.List('Cyberbullying Section', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
CyberbullyingSection.add({
	title: { type: String, required: true },
	key: Types.Key,
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

CyberbullyingSection.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
CyberbullyingSection.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 200);
	next();
});

CyberbullyingSection.defaultColumns = 'title';

CyberbullyingSection.register();
