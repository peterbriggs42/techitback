var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Report Abuse Model
 * ==========
 */

var ReportAbuse = new keystone.List('Report Abuse', {
	map: { name: 'created_at' },
	label: 'Online Abuse',
	autokey: { path: 'slug', from: 'created_at', unique: true }
});

ReportAbuse.add({
	age			: { type: Types.Number },
	country		: String,
	state		: String,
	url			: Types.Text,
	image		: { type: Types.S3File },
	created_at	: { type: Date },
	abuse 		: Types.Text
});

ReportAbuse.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

ReportAbuse.defaultColumns = 'created_at, age, state';

ReportAbuse.register();
