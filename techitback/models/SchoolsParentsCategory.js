var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Schools + Parents Category
 * ==================
 */

var SchoolsParentsCategory = new keystone.List('SchoolsParentsCategory', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true }
});

SchoolsParentsCategory.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

// Before uploading file, create thumbnail as well and save it
SchoolsParentsCategory.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

SchoolsParentsCategory.defaultColumns = 'title, key';

SchoolsParentsCategory.relationship({ ref: 'SchoolsParentsSection', path: 'categories' });

SchoolsParentsCategory.register();
