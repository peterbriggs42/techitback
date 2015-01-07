var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Yanng Post Model
 * ==========
 */

var YanngPost = new keystone.List('User Created Tips', {
	map: { name: 'created_at' },
	autokey: { path: 'slug', from: 'created_at', unique: true }
});

YanngPost.add({
	name		: { type: String, required: false },
	age			: { type: Types.Number },
	country		: String,
	state		: String,
	yes_tip		: Types.Text,
	no_tip		: Types.Text,
	created_at	: { type: Date },
	name_can_use: Types.Boolean
});

YanngPost.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

YanngPost.defaultColumns = 'created_at, name, age, state';

YanngPost.register();
