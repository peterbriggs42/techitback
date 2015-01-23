var keystone = require('keystone'),
	Types = keystone.Field.Types,
	easyimg = require('easyimage'),
	knox = require('knox');

/**
 * Home - Tech Addiction
 * ==========
 */

var TechAddiction = new keystone.List('Tech Addiction', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

// Keystone gives a built in s3upload, but we need to customize
// (The thumbnail upload happens after a resize but before image is uploaded)
var uploadThumbnail = function( imageName, callback ) {
	knox.createClient(keystone.get('s3 config')).putFile("tmp/"+imageName, imageName, {
		'x-amz-acl': 'public-read'
	}, function(err, res) {
		if (err) {
			console.log("Error: "+err);
		} else if (res) {
			res.resume();
		}
		console.log(res.req.url);
		callback(res.req.url);
	});
}

// Customize model
TechAddiction.add({
	title: { type: String, required: true },
	image: { type: Types.S3File },
	thumbnail: {type: String, noedit: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

TechAddiction.schema.virtual('content.full').get(function() {
	return this.content.brief;
});

// Before uploading file, create thumbnail as well and save it
TechAddiction.fields.image.pre('upload', function(item, file, next) {

	var dotPosition = file.name.lastIndexOf(".");
	var dstFilename = file.name.substr(0, dotPosition) + "_thumb" + file.name.substr(dotPosition);
	var thumbnailSize = 200;
	easyimg.resize({
		src: file.path,
		dst: 'tmp/'+dstFilename,
		width: thumbnailSize,
		height: thumbnailSize
	}).then(
		function(image) {
			uploadThumbnail(dstFilename, function(result) {
				item.thumbnail = result;
				item.save();
			});
		},
		function(err) {
			console.log("Error in thumbnail upload: "+err);
		}
	);
	next();
});

TechAddiction.defaultColumns = 'title';

TechAddiction.register();
