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
		{'element':".tech_addiction_link",				'url':'ajax/home/tech_addiction'},
		{'element':".tech_addiction_sleep_link",		'url':'ajax/home/tech_addiction_sleep'},
		{'element':".tech_addiction_multi_link",		'url':'ajax/home/tech_addiction_multi'},
		{'element':".tech_addiction_desens_link",		'url':'ajax/home/tech_addiction_desens'},
		{'element':".tech_addiction_stress_link",		'url':'ajax/home/tech_addiction_stress'},
		{'element':".tech_addiction_addiction_link",	'url':'ajax/home/tech_addiction_addiction'},
		// About links
		{'element':".about_link",						'url':'ajax/home/about'},
		{'element':".about_intralink_link",				'url':'ajax/home/about_intralink'},
		{'element':".about_questions_link",				'url':'ajax/home/about_questions'},
		// About Questions
		{'element':".about_section #mean_by",			'url':'ajax/home/about_questions_mean_by'},
		{'element':".about_section #statistics",		'url':'ajax/home/about_questions_statistics'},
		{'element':".about_section #updated",			'url':'ajax/home/about_questions_updated'},
		{'element':".about_section #social_media",		'url':'ajax/home/about_questions_social_media'},
		{'element':".about_section #why_should_i",		'url':'ajax/home/about_questions_why_should_i'},
		{'element':".about_section #arrested",			'url':'ajax/home/about_questions_arrested'},
		{'element':".about_section #mean_online",		'url':'ajax/home/about_questions_mean_online'},
		{'element':".about_section #bullying",			'url':'ajax/home/about_questions_bullying'},
		{'element':".about_section #better_tech",		'url':'ajax/home/about_questions_better_tech'},
		{'element':".about_section #technology",		'url':'ajax/home/about_questions_technology'},
		{'element':".about_section #schools",			'url':'ajax/home/about_questions_schools'},
		{'element':".about_section #educate",			'url':'ajax/home/about_questions_educate'},
		// Cyberbullying and Abuse
		{'element':".cyberbullying_link",				'url':'ajax/home/cyberbullying'},
		{'element':".online_abuse_link",				'url':'ajax/home/online_abuse'},
		{'element':".oa_cyberbullying_link",			'url':'ajax/home/oa_cyberbullying'},
		{'element':".oa_cybersexting_link",				'url':'ajax/home/oa_cybersexting'},
		{'element':".oa_cyberstalking_link",			'url':'ajax/home/oa_cyberstalking'},
		{'element':".oa_pranking_link",					'url':'ajax/home/oa_pranking'},
		{'element':".oa_stranger_link",			'url':'ajax/home/oa_strangerdanger'},
		{'element':".share_link",						'url':'ajax/home/share_your_story'},
		{'element':".movement_link",					'url':'ajax/home/our_movement'},
		{'element':".report_link",						'url':'ajax/home/report_abuse'}


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


