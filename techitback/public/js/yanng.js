jQuery(function($) {

	/*
	 * NOTE: Because many of these elements are added dynamically, use 
	 * $(document).on('click', "#<element>", function () { ... }); instead of 
	 * $("#<element>").click(function() { ... }); because former won't 
	 * register clicks on elements that are added later than the initial 
	 * javascript. The latter will check for the specified element.
	 */

	function yanng_listener (element, prescript, header_text, URL) {
		$(document).on('click', element, function () {
			if (prescript != null) {
				prescript();
			}
		 	// change header
		 	if (header_text != null) {
				$("#yanng_header h2").html(header_text);
			}
			// change body
			ajaxRequest(URL, '', 'GET', function(data) {
				$(".yanng_body").html(data)
			});
		});
	}

	function show_header(tips_shown) {
		if (tips_shown) {
			$("#yanng_header").hide();
			$("#yanng_tips_header").show();
		} else {
			$("#yanng_header").show();
			$("#yanng_tips_header").hide();
		}
	}

	// Back to YANNG home
	yanng_listener(".yanng_header_button", function() {
			show_header(false);
		}, "Exclusive Tips from the Yes and No No Girls", 'ajax/yanng_home');
	
	// Clicking "About"
	yanng_listener(".about_link", null, "About Yes and No No Girls", 'ajax/yanng_about');
	
	// Clicking second "About" page
	yanng_listener(".yanng_body .next_page", null, null, 'ajax/yanng_about2');
	
	// Clicking "Tech Etiquette"
	yanng_listener("#etiquette", null, "Yes and No No Girls (AKA Yanng): Tech Etiquette", 'ajax/yanng_etiquette');

	// Tips
	yanng_listener(".tip_link", function() { 
			show_header(true);
		}, null, 'ajax/yanng_tips');

});