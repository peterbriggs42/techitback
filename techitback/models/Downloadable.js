var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Downloadable
 * ==========
 */

var Downloadable = new keystone.List('Downloadable', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Downloadable.add({
	title: { type: String, required: true },
	preview: { type: Types.S3File },
	file: { type: Types.S3File },
});

Downloadable.defaultColumns = 'title';
Downloadable.register();
