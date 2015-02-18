// common.js
// ========
var keystone = require('keystone');

var getItemByKey = function(post) {
  return post.key == this;
}

var getItemByOrder = function(section) {
	return section.order == this;
}

var getFavoritePosts = function(posts) {
	return posts.slice(0,3);
}

// And export them for module usage
module.exports = {
	getItemByKey: 	getItemByKey,
	getFavoritePosts: getFavoritePosts,
	getItemByOrder: getItemByOrder
};