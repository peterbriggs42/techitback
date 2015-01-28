var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Share Your Story Model
 * ==========
 */

var ShareYourStory = new keystone.List('Share Your Story', {
	map: { name: 'created_at' },
	autokey: { path: 'slug', from: 'created_at', unique: true }
});

ShareYourStory.add({
	name		: { type: String, required: false },
	age			: { type: Types.Number },
	country		: String,
	state		: String,
	type		: Types.Text,
	text		: Types.Text,
	created_at	: { type: Date }
});

ShareYourStory.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

ShareYourStory.defaultColumns = 'created_at, name, age, type';

ShareYourStory.register();
