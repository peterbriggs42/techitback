jQuery(function($) {

	/*
	 * NOTE: Because many of these elements are added dynamically, use 
	 * $(document).on('click', "#<element>", function () { ... }); instead of 
	 * $("#<element>").click(function() { ... }); because former won't 
	 * register clicks on elements that are added later than the initial 
	 * javascript. The latter will check for the specified element.
	 */

	function yanng_listener (element, URL, replace) {
		$(document).on('click', element, function (e) {
			e.stopPropagation();
			// change body
			ajaxRequest(URL, '', 'GET', function(data) {
				var replaceContent = ".yanng_content";
				if (replace!= null) {
					replaceContent = replace;
				}
				var timing = 50;
			    $( replaceContent ).fadeOut( timing , function(){
			    	$(replaceContent).html(data);
			    	$( replaceContent ).fadeIn( timing );
				});
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
		{'element':".tips_link", 			'url':'ajax/yanng_tips'			, 'replace':null},
		// Tip sections
		{'element':".tips_footer", 			'url':'ajax/yanng_etiquette'	, 'replace':null},
		{'element':".tip1_link", 			'url':'ajax/yanng_tips/tips1'	, 'replace':null},
		{'element':".tip2_link", 			'url':'ajax/yanng_tips/tips2'	, 'replace':null},
		{'element':".tip3_link", 			'url':'ajax/yanng_tips/tips3'	, 'replace':null},
		{'element':".tip4_link", 			'url':'ajax/yanng_tips/tips4'	, 'replace':null},
		{'element':".tip5_link", 			'url':'ajax/yanng_tips/tips5'	, 'replace':null},
		{'element':".tip6_link", 			'url':'ajax/yanng_tips/tips6'	, 'replace':null},
		{'element':".tip7_link", 			'url':'ajax/yanng_tips/tips7'	, 'replace':null},
		{'element':".tip8_link", 			'url':'ajax/yanng_tips/tips8'	, 'replace':null},
		{'element':".tip9_link", 			'url':'ajax/yanng_tips/tips9'	, 'replace':null},
		{'element':".tip10_link", 			'url':'ajax/yanng_tips/tips10'	, 'replace':null},
		{'element':".tip11_link", 			'url':'ajax/yanng_tips/tips11'	, 'replace':null},
		{'element':".tip12_link", 			'url':'ajax/yanng_tips/tips12'	, 'replace':null},
		{'element':".tip13_link", 			'url':'ajax/yanng_tips/tips13'	, 'replace':null},
		// Meet Us sections
		{'element':".meetus_body", 				'url':'ajax/yanng_meetus'		, 'replace':null},
		{'element':".meetus_body #shlee img",	'url':'ajax/yanng_girls/shlee'	, 'replace':".meetus_body .row_container"},
		{'element':".meetus_body #goldie img",	'url':'ajax/yanng_girls/goldie'	, 'replace':".meetus_body .row_container"},
		{'element':".meetus_body #yumi img",	'url':'ajax/yanng_girls/yumi'	, 'replace':".meetus_body .row_container"}

		
	].map( function(listener) {
		yanng_listener(listener['element'], listener['url'], listener['replace']);
	} );

});