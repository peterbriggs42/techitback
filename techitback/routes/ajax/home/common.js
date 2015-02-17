// common.js
// ========
var keystone = require('keystone');

var getItemByKey = function(post) {
  return post.key == this;
}

var getFavoritePosts = function(posts) {
	return posts.slice(0,2);
}

// And export them for module usage
module.exports = {
	getItemByKey: 	getItemByKey,
	getFavoritePosts: getFavoritePosts
};