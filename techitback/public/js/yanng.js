jQuery(function($) {

	/*
	 * NOTE: Because many of these elements are added dynamically, use 
	 * $(document).on('click', "#<element>", function () { ... }); instead of 
	 * $("#<element>").click(function() { ... }); because former won't 
	 * register clicks on elements that are added later than the initial 
	 * javascript. The latter will check for the specified element.
	 */

	function yanng_listener (element, URL) {
		$(document).on('click', element, function () {
			// change body
			ajaxRequest(URL, '', 'GET', function(data) {
				$(".yanng_content").html(data)
			});
		});
	}

	// Back to YANNG home
	yanng_listener(".yanng_header_button", 'ajax/yanng_home');
	
	// Clicking "About"
	yanng_listener(".about_link", 'ajax/yanng_about');
	
	// Clicking second "About" page
	yanng_listener(".yanng_body .next_page", 'ajax/yanng_about2');
	
	// Clicking "Tech Etiquette"
	yanng_listener("#etiquette", 'ajax/yanng_etiquette');

	// Tips
	yanng_listener(".tip_link", 'ajax/yanng_tips');

});