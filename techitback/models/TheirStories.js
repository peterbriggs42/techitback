var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Cyberbullying - Their Stories
 * ==========
 */

var TheirStory = new keystone.List('Their Story', {
	map: { name: 'title' },
	label: 'Their Story',
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
TheirStory.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: false},
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

TheirStory.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
TheirStory.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

TheirStory.defaultColumns = 'title';

TheirStory.register();
