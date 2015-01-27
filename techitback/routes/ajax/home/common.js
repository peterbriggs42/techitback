// common.js
// ========

var getItemByKey = function(post) {
  return post.key == this;
}

// And export them for module usage
module.exports = {
	getItemByKey: 	getItemByKey
};