var keystone = require('keystone'),
	Types = keystone.Field.Types,
	common = require('../public/js/common');

/**
 * RSS Feed
 * ==========
 */

var RSSFeed = new keystone.List('RSS Feed', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Customize model
RSSFeed.add({
	title: { type: String, required: true },
	link: {type: Types.Url, noedit: false}
});

RSSFeed.defaultColumns = 'title';

RSSFeed.register();
