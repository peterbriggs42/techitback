var keystone = require('keystone'),
	common = require('../common');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Get all Categories
	var TipsForTeens = keystone.list('TipsForTeens');
	TipsForTeens.model.find()
		.exec(function(err, tips) {

		var tip_sections = tips.filter(function(tip) {
			return tip['order'] > 0;
		});

		// Find chosen section by URL param
		var chosen_tip = tip_sections.filter(common.getItemByKey, req.params['section'])[0];
		var order = chosen_tip['order'];

		// Come up with all orders except the selected one
		var all_orders = [1,2,3,4,5];
		all_orders.splice(all_orders.indexOf(order), 1);

		var other_sections = [];
		for (index in all_orders) {
			other_sections.push(tip_sections.filter(common.getItemByOrder, all_orders[index])[0]);
		}

		// Get left and right links
		var left_order = (order - 1 < 1) ? 5 : order - 1;
		var right_order = (order + 1 > 5) ? 1 : order + 1;

		view.render('home/tips_selected', {
			main: 		chosen_tip,
			left: 		tip_sections.filter(common.getItemByOrder, left_order)[0],
			right: 		tip_sections.filter(common.getItemByOrder, right_order)[0],

			one: 		other_sections[0],
			two: 		other_sections[1],
			three: 		other_sections[2],
			four:  		other_sections[3],
		});
	});
};
