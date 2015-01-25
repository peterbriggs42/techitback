// common.js
// ========

// Keystone gives a built in s3upload, but we need to customize
// (The thumbnail upload happens after a resize but before image is uploaded)
var uploadThumbnail = function( imageName, callback ) {
	knox = require('knox');
	keystone = require('keystone');
	knox.createClient(keystone.get('s3 config')).putFile("tmp/"+imageName, imageName, {
		'x-amz-acl': 'public-read'
	}, function(err, res) {
		if (err) {
			console.log("Error: "+err);
		} else if (res) {
			res.resume();
		}
		callback(res.req.url);
	});
}

var generateThumbnail = function(item, file, size) {
	easyimg = require('easyimage');
	var dotPosition = file.name.lastIndexOf(".");
	var dstFilename = file.name.substr(0, dotPosition) + "_thumb" + file.name.substr(dotPosition);
	easyimg.resize({
		src: file.path,
		dst: 'tmp/'+dstFilename,
		width: size,
		height: size
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
}

// And export them for module usage
module.exports = {
	uploadThumbnail: 	uploadThumbnail,
	generateThumbnail: 	generateThumbnail
};
