var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * EmailList Model
 * ==========
 */

var EmailList = new keystone.List('EmailList', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

EmailList.add({
	name: { type: String, required: false },
	position: { type: String, required: false },
	school_name: { type: String, required: false },
	email		: Types.Email,
	country		: String,
	state		: String,
	created_at	: { type: Date }
});

// Save 'created_at' date
EmailList.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

EmailList.defaultColumns = 'name, position, email, state, created_at';
EmailList.register();
