var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Yanng Join The Hour Model
 * ==========
 */

var YanngPost = new keystone.List('Join The Hour', {
	map: { name: 'email' },
	autokey: { path: 'slug', from: 'email', unique: true }
});

YanngPost.add({
	name		: { type: String, required: false },
	email		: Types.Email,
	country		: String,
	state		: String,
	text		: Types.Text,
	created_at	: { type: Date }
});

// Save 'created_at' date
YanngPost.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

YanngPost.defaultColumns = 'email, name, state';

YanngPost.register();
