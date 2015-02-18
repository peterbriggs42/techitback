var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Blog Submission
 * ==================
 */

var BlogSubmission = new keystone.List('BlogSubmission', {
	autokey: { from: 'name', path: 'key', unique: true }
});

BlogSubmission.add({
	name: { type: String, required: false },
	email: String,
	content: { type: Types.Html, wysiwyg: true, height: 150 },
	created_at	: { type: Date },
});

BlogSubmission.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

BlogSubmission.defaultColumns = 'name, email, created_at';

BlogSubmission.register();
