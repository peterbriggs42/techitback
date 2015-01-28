var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Home - Cyberbullying - Their Stories
 * ==========
 */

var ShareStory = new keystone.List('Share Your Story Section', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
ShareStory.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: false},
	image: { type: Types.S3File },
});

ShareStory.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

ShareStory.defaultColumns = 'title';

ShareStory.register();
