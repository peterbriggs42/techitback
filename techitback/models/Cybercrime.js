var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Cybercrime
 * ==========
 */

var Cybercrime = new keystone.List('Cybercrime', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
Cybercrime.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

Cybercrime.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
Cybercrime.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

Cybercrime.defaultColumns = 'title';

Cybercrime.register();
