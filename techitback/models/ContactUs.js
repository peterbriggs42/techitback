var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Contact Us
 * ==================
 */

var ContactUs = new keystone.List('ContactUs', {
	autokey: { from: 'name', path: 'key', unique: true }
});

ContactUs.add({
	name: String,
	email: String,
	content: { type: Types.Html, wysiwyg: true, height: 150 },
	created_at	: { type: Date },
});

ContactUs.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

ContactUs.defaultColumns = 'name, email, created_at';

ContactUs.register();
