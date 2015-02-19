var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * Corporate Partners Sections
 * ==========
 */

var CorporatePartners = new keystone.List('CorporatePartners', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
CorporatePartners.add({
	title: { type: String, required: true },
	key: { type:Types.Key, noedit: false},
	image: { type: Types.S3File },
});

CorporatePartners.defaultColumns = 'title';

CorporatePartners.register();
