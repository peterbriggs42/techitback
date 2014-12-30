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
	ajax: importRoutes('./ajax'),
	yanng_tips: importRoutes('./ajax/yanng_tips'),
	yanng_girls: importRoutes('./ajax/yanng_girls')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.yanng);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);

	// Main YANNG pages
	app.get('/ajax/yanng_about', routes.ajax.yanng_about);
	app.get('/ajax/yanng_about2', routes.ajax.yanng_about2);
	app.get('/ajax/yanng_etiquette', routes.ajax.yanng_etiquette);
	app.get('/ajax/yanng_home', routes.ajax.yanng_home);
	app.get('/ajax/yanng_tips', routes.ajax.yanng_tips);
	app.get('/ajax/yanng_meetus', routes.ajax.yanng_meetus);

	// All the YANNG tips
	app.get('/ajax/yanng_tips/tips1', routes.yanng_tips.tips1);

	// The Yanng Girls section (Meet us)
	app.get('/ajax/yanng_girls/shlee', routes.yanng_girls.shlee);
	app.get('/ajax/yanng_girls/goldie', routes.yanng_girls.goldie);
	app.get('/ajax/yanng_girls/yumi', routes.yanng_girls.yumi);

	app.all('/contact', routes.views.contact);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
