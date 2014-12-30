jQuery(function($) {

	/*
	 * NOTE: Because many of these elements are added dynamically, use 
	 * $(document).on('click', "#<element>", function () { ... }); instead of 
	 * $("#<element>").click(function() { ... }); because former won't 
	 * register clicks on elements that are added later than the initial 
	 * javascript. The latter will check for the specified element.
	 */

	function yanng_listener (element, URL, replace) {
		$(document).on('click', element, function () {
			// change body
			ajaxRequest(URL, '', 'GET', function(data) {
				if (replace!= null) {
					$(replace).html(data);
				} else { //default to .yanng_content
					$(".yanng_content").html(data)
				}
			});
		});
	}

	// Add a listener event for element and corresponding ajax request
	[ 	// Main links	
		{'element':".yanng_header_button",	'url':'ajax/yanng_home'			, 'replace':null},
		{'element':".about_link", 			'url':'ajax/yanng_about'		, 'replace':null},
		{'element':".yanng_body .next_page",'url':'ajax/yanng_about2'		, 'replace':null},
		{'element':"#etiquette", 			'url':'ajax/yanng_etiquette'	, 'replace':null},
		{'element':"#meetus", 				'url':'ajax/yanng_meetus'		, 'replace':null},
		{'element':".tip_link", 			'url':'ajax/yanng_tips'			, 'replace':null},
		// Tip sections
		{'element':".tips_begin", 			'url':'ajax/yanng_tips/tips1'	, 'replace':null},
		// Meet Us sections
		{'element':".meetus_body #shlee",	'url':'ajax/yanng_girls/shlee'	, 'replace':".meetus_body .row_container"},
		{'element':".meetus_body #goldie",	'url':'ajax/yanng_girls/goldie'	, 'replace':".meetus_body .row_container"},
		{'element':".meetus_body #yumi",	'url':'ajax/yanng_girls/yumi'	, 'replace':".meetus_body .row_container"}
		
	].map( function(listener) {
		yanng_listener(listener['element'], listener['url'], listener['replace']);
	} );

});