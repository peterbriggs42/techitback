var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Corporate Partner Submission
 * ==========
 */

var CorporatePartnerSubmission = new keystone.List('CorporatePartnerSubmission', {
	map: { name: 'company' },
	autokey: { path: 'slug', from: 'created_at', unique: true }
});

CorporatePartnerSubmission.add({
	first_name		: { type: String, required: false },
	title		: String,
	website		: String,
	address1		: String,
	city		: String,
	country		: String,
	last_name		: String,
	company		: String,
	email		: String,
	address2		: String,
	state		: String,
	zip		: String,
	content: 	{ type: Types.Html, wysiwyg: true, height: 150 },
	created_at	: { type: Date }
});

CorporatePartnerSubmission.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

CorporatePartnerSubmission.defaultColumns = 'company, city, state, created_at';

CorporatePartnerSubmission.register();
