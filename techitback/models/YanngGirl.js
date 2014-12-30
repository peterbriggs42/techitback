var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * YANNG Girl
 * ==================
 */

var YanngGirl = new keystone.List('Yanng Girl', {
	autokey: { from: 'name', path: 'key', unique: true }
});

YanngGirl.add({
	name: { type: String, required: true },
	key: Types.Key,
	age: { type: Types.Number },
	sign: { type: String },
	'techHabits': { type: String },
	'likes': { type: String },
	'dislikes': { type: String },
	'motto' : { type: String }
});

YanngGirl.register();
