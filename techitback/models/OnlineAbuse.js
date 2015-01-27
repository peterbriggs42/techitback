var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Cyberbullying - Online Abuse
 * ==========
 */

var OnlineAbuse = new keystone.List('Online Abuse', {
	map: { name: 'title' },
	label: 'Online Abuse',
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
OnlineAbuse.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

OnlineAbuse.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
OnlineAbuse.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

OnlineAbuse.defaultColumns = 'title';

OnlineAbuse.register();
