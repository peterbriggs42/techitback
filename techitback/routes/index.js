/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	form_requests: importRoutes('./forms/'),
	ajax: importRoutes('./ajax'),
	yanng_tips: importRoutes('./ajax/yanng_tips'),
	yanng_girls: importRoutes('./ajax/yanng_girls'),
	home: importRoutes('./ajax/home')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/jointhehour', routes.views.jointhehour);

	// Form Submissions
	app.post('/createshareform', routes.form_requests.createshare);
	app.post('/jointhehourform', routes.form_requests.jointhehour);

	// Home content - Tech Addiction
	app.get('/ajax/home/tech_addiction', routes.home.tech_addiction);
	app.get('/ajax/home/tech_addiction_sleep', routes.home.tech_addiction_sleep);
	app.get('/ajax/home/tech_addiction_desens', routes.home.tech_addiction_desens);
	app.get('/ajax/home/tech_addiction_multi', routes.home.tech_addiction_multi);
	app.get('/ajax/home/tech_addiction_stress', routes.home.tech_addiction_stress);
	app.get('/ajax/home/tech_addiction_addiction', routes.home.tech_addiction_addiction);

	// Home content - About
	app.get('/ajax/home/about', routes.home.about);
	app.get('/ajax/home/about_intralink', routes.home.about_intralink);

	// Main YANNG pages
	app.get('/ajax/yanng_about', routes.ajax.yanng_about);
	app.get('/ajax/yanng_about2', routes.ajax.yanng_about2);
	app.get('/ajax/yanng_etiquette', routes.ajax.yanng_etiquette);
	app.get('/ajax/yanng_home', routes.ajax.yanng_home);
	app.get('/ajax/yanng_tips', routes.ajax.yanng_tips);
	app.get('/ajax/yanng_meetus', routes.ajax.yanng_meetus);
	app.get('/ajax/yanng_createshare', routes.ajax.yanng_createshare);

	// All the YANNG tips
	app.get('/ajax/yanng_tips/tips1', routes.yanng_tips.tips1);
	app.get('/ajax/yanng_tips/tips2', routes.yanng_tips.tips2);
	app.get('/ajax/yanng_tips/tips3', routes.yanng_tips.tips3);
	app.get('/ajax/yanng_tips/tips4', routes.yanng_tips.tips4);
	app.get('/ajax/yanng_tips/tips5', routes.yanng_tips.tips5);
	app.get('/ajax/yanng_tips/tips6', routes.yanng_tips.tips6);
	app.get('/ajax/yanng_tips/tips7', routes.yanng_tips.tips7);
	app.get('/ajax/yanng_tips/tips8', routes.yanng_tips.tips8);
	app.get('/ajax/yanng_tips/tips9', routes.yanng_tips.tips9);
	app.get('/ajax/yanng_tips/tips10', routes.yanng_tips.tips10);
	app.get('/ajax/yanng_tips/tips11', routes.yanng_tips.tips11);
	app.get('/ajax/yanng_tips/tips12', routes.yanng_tips.tips12);
	app.get('/ajax/yanng_tips/tips13', routes.yanng_tips.tips13);

	// The Yanng Girls section (Meet us)
	app.get('/ajax/yanng_girls/shlee', routes.yanng_girls.shlee);
	app.get('/ajax/yanng_girls/goldie', routes.yanng_girls.goldie);
	app.get('/ajax/yanng_girls/yumi', routes.yanng_girls.yumi);

	app.all('/contact', routes.views.contact);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
