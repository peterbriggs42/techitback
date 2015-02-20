var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Tips for Teens
 * ==================
 */

var TipsForTeens = new keystone.List('TipsForTeens', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true }
});

TipsForTeens.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	order: Number, 
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

TipsForTeens.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

TipsForTeens.defaultColumns = 'category, title, key, order';

TipsForTeens.register();
