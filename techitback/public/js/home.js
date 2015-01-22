jQuery(function($) {
	/*
	 * NOTE: Because many of these elements are added dynamically, use 
	 * $(document).on('click', "#<element>", function () { ... }); instead of 
	 * $("#<element>").click(function() { ... }); because former won't 
	 * register clicks on elements that are added later than the initial 
	 * javascript. The latter will check for the specified element.
	 */

	function home_listener (element, URL) {

		// necessary for mobile touches
		var dragging;
		$("body").on("touchstart", function(){
		 	dragging = false;
		});
		$("body").on("touchmove", function(){
		  	dragging = true;
		});

		$(document).on('click touchend', element, function (e) {
			// If touch has been dragged, cancel
			console.log(dragging);
			if (dragging) return;
			e.stopPropagation();

			var replaceContent = ".popup";

			$(replaceContent).html("<div id='loading_body'><img src='images/loading.gif'></div>");

			// change body
			ajaxRequest(e, URL, '', 'GET', function(data) {
		    	$(replaceContent).html(data);
			});
		});
	}

	[ 	// Main links	
		{'element':".popup_dude",	'url':'ajax/home/tech_addiction'}
	].map( function(listener) {
		home_listener(listener['element'], listener['URL']);
	});