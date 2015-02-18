var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Schools + Parents Category
 * ==================
 */

var SchoolsParentsSection = new keystone.List('SchoolsParentsSection', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true }
});

SchoolsParentsSection.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: true},
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	order: Number, 
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
	category: { type: Types.Relationship, ref: 'SchoolsParentsCategory', many:false}
});

SchoolsParentsSection.fields.image.pre('upload', function(item, file, next) {
	common.generateThumbnail(item, file, 300);
	next();
});

SchoolsParentsSection.defaultColumns = 'category, title, key, order';

SchoolsParentsSection.register();
