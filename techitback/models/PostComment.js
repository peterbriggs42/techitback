var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var PostComment = new keystone.List('PostComment', {
	autokey: { from: 'name', path: 'key', unique: true }
});

PostComment.add({
	name: { type: String, required: true },
	text: { type: String },
	post: {type:Types.Relationship, ref:'Post', many:false},
	created_at	: { type: Date },
});

PostComment.relationship({ ref: 'Post', path: 'categories' });

PostComment.schema.pre('save', function(next){
  if ( !this.created_at ) {
    this.created_at = new Date();
  }
  next();
});

PostComment.defaultColumns = 'post, name, text, created_at';

PostComment.register();
