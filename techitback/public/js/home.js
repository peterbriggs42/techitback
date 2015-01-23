var popupStatus = 0;

function loadPopup(popup) {
        if(popupStatus == 0) {
                $(popup).fadeIn(0500);
                $("#backgroundPopup").css("opacity", "0.7");
                $("#backgroundPopup").fadeIn(0001);
                popupStatus = 1;
        }
}

function disablePopup() {
        if(popupStatus == 1) {
                $("#defaultPopup").fadeOut("normal");
                // $("#profilePopup").fadeOut("normal");
                $("#backgroundPopup").fadeOut("normal");
                popupStatus = 0;
        }
}

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
			if (dragging) return;
			e.stopPropagation();

			// var replaceContent = ".popup";
			// $(replaceContent).html("<div id='loading_body'><img src='images/loading.gif'></div>");
			loadPopup("#defaultPopup");

			// change body
			ajaxRequest(e, URL, '', 'GET', function(data) {
				console.log(data);
		    	$("#defaultPopup").html(data);
			});
		});
	}

	[ 	// Tech Addiction links	
		{'element':".tech_addiction_link",	'url':'ajax/home/tech_addiction'},
		{'element':".tech_addiction_sleep_link",	'url':'ajax/home/tech_addiction_sleep'},
		{'element':".tech_addiction_multi_link",	'url':'ajax/home/tech_addiction_multi'},
		{'element':".tech_addiction_desens_link",	'url':'ajax/home/tech_addiction_desens'},
		{'element':".tech_addiction_stress_link",	'url':'ajax/home/tech_addiction_stress'},
		{'element':".tech_addiction_addiction_link",	'url':'ajax/home/tech_addiction_addiction'},
		// About links
		{'element':".about_link",					'url':'ajax/home/about'},
		{'element':".about_intralink_link",			'url':'ajax/home/about_intralink'},
		{'element':".about_questions_link",			'url':'ajax/home/about_questions'}

	].map( function(listener) {
		home_listener(listener['element'], listener['url']);
	});


	$(document).on('click touchend', "#popup_exit", function (e) {
		disablePopup();
    });
});







	/* Listen for events to show or hide popup */

    // $(".textoverlay").click(function() {
    //         loadPopup("#defaultPopup");
    //         return false;
    // });

    // $(this).keyup(function(event) {
    //         if (event.which == 27) { // 27 is 'Esc'
    //                 disablePopup();
    //         }
    // });

    // $("div#backgroundPopup").click(function() {
    //         disablePopup();
    // });

    // $(".navbar").click(function() {
    //         disablePopup();
    // });

    // $("#popup_exit").click(function() {
    //         disablePopup();
    // });


