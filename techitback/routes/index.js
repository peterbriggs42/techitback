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
	views: 				importRoutes('./views'),
	form_requests: 		importRoutes('./forms/'),
	ajax: 				importRoutes('./ajax'),
	yanng_tips: 		importRoutes('./ajax/yanng_tips'),
	yanng_girls: 		importRoutes('./ajax/yanng_girls'),
	home: 				importRoutes('./ajax/home'),
	about_questions: 	importRoutes('./ajax/home/about_questions'),
	cyberbullying: 		importRoutes('./ajax/home/cyberbullying')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/jointhehour', routes.views.jointhehour);
	app.get('/yanng', routes.views.yanng);

	// Form Submissions
	app.post('/createshareform', routes.form_requests.createshare);
	app.post('/jointhehourform', routes.form_requests.jointhehour);
	app.post('/share_your_story_form', routes.form_requests.share_your_story);
	app.post('/report_it_form', routes.form_requests.report_it);

	// Home content - Tech Addiction
	app.get('/ajax/home/tech_addiction', routes.home.tech_addiction);
	app.get('/ajax/home/tech_addiction_sleep', routes.home.tech_addiction_sleep);
	app.get('/ajax/home/tech_addiction_desens', routes.home.tech_addiction_desens);
	app.get('/ajax/home/tech_addiction_multi', routes.home.tech_addiction_multi);
	app.get('/ajax/home/tech_addiction_stress', routes.home.tech_addiction_stress);
	app.get('/ajax/home/tech_addiction_addiction', routes.home.tech_addiction_addiction);

	// Home content - About
	app.get('/ajax/home/about', routes.home.about);
	app.get('/ajax/home/about_tib', routes.home.about_tib);
	app.get('/ajax/home/about_intralink', routes.home.about_intralink);
	app.get('/ajax/home/about_questions', routes.home.about_questions);

	// Home content - Questions
	app.get('/ajax/home/about_questions_mean_by', routes.about_questions.mean_by);
	app.get('/ajax/home/about_questions_statistics', routes.about_questions.statistics);
	app.get('/ajax/home/about_questions_updated', routes.about_questions.updated);
	app.get('/ajax/home/about_questions_social_media', routes.about_questions.social_media);
	app.get('/ajax/home/about_questions_why_should_i', routes.about_questions.why_should_i);
	app.get('/ajax/home/about_questions_arrested', routes.about_questions.arrested);
	app.get('/ajax/home/about_questions_mean_online', routes.about_questions.mean_online);
	app.get('/ajax/home/about_questions_bullying', routes.about_questions.bullying);
	app.get('/ajax/home/about_questions_better_tech', routes.about_questions.better_tech);
	app.get('/ajax/home/about_questions_technology', routes.about_questions.technology);
	app.get('/ajax/home/about_questions_schools', routes.about_questions.schools);
	app.get('/ajax/home/about_questions_educate', routes.about_questions.educate);

	// Home content - Cyberbullying
	app.get('/ajax/home/cyberbullying', routes.cyberbullying.home);
	app.get('/ajax/home/online_abuse', routes.cyberbullying.online_abuse);
	app.get('/ajax/home/oa_cyberbullying', routes.cyberbullying.oa_cyberbullying);
	app.get('/ajax/home/oa_cybersexting', routes.cyberbullying.oa_cybersexting);
	app.get('/ajax/home/oa_cyberstalking', routes.cyberbullying.oa_cyberstalking);
	app.get('/ajax/home/oa_pranking', routes.cyberbullying.oa_pranking);
	app.get('/ajax/home/oa_strangerdanger', routes.cyberbullying.oa_strangerdanger);
	app.get('/ajax/home/share_your_story', routes.cyberbullying.share_your_story);
	app.get('/ajax/home/share_story', routes.cyberbullying.share_story);
	app.get('/ajax/home/see_story', routes.cyberbullying.see_story);
	app.get('/ajax/home/our_movement', routes.cyberbullying.our_movement);
	app.get('/ajax/home/ts_amanda', routes.cyberbullying.ts_amanda);
	app.get('/ajax/home/ts_rebecca', routes.cyberbullying.ts_rebecca);
	app.get('/ajax/home/ts_marcus', routes.cyberbullying.ts_marcus);
	app.get('/ajax/home/report_abuse', routes.cyberbullying.report_abuse);

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
