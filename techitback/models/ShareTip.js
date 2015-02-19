var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Share Tip
 * ==================
 */

var ShareTip = new keystone.List('ShareTip', {
	autokey: { from: 'name', path: 'key', unique: true }
});

ShareTip.add({
	name: String,
	country: String,
	state: String,
	content: { type: Types.Html, wysiwyg: true, height: 150 },
	created_at	: { type: Date },
});

ShareTip.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

ShareTip.defaultColumns = 'name, state, country, created_at';

ShareTip.register();
