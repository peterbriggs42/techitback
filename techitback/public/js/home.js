var popupStatus = 0;

var defaultReplaceArea = "#defaultPopup";

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
                $(defaultReplaceArea).fadeOut("normal");
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

	function home_listener (element, URL, callback) {

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
			loadPopup(defaultReplaceArea);
			
			// If there's a callback for that element to modify the URL
			if (callback) {
				URL = callback(this, URL);
			}

			// change body
			ajaxRequest(e, URL, '', 'GET', function(data) {
		    	$(defaultReplaceArea).html(data);
			});
		});
	}

	[ 	// Tech Addiction links	
		{'element':".tech_addiction_link",				'url':'ajax/home/tech_addiction', 'callback':null },
		{'element':".tech_addiction_sleep_link",		'url':'ajax/home/tech_addiction_sleep', 'callback':null },
		{'element':".tech_addiction_multi_link",		'url':'ajax/home/tech_addiction_multi', 'callback':null },
		{'element':".tech_addiction_desens_link",		'url':'ajax/home/tech_addiction_desens', 'callback':null },
		{'element':".tech_addiction_stress_link",		'url':'ajax/home/tech_addiction_stress', 'callback':null },
		{'element':".tech_addiction_addiction_link",	'url':'ajax/home/tech_addiction_addiction', 'callback':null },
		// About links
		{'element':".about_link",						'url':'ajax/home/about', 'callback':null },
		{'element':".about_tib_link",					'url':'ajax/home/about_tib', 'callback':null },
		{'element':".about_intralink_link",				'url':'ajax/home/about_intralink', 'callback':null },
		{'element':".about_questions_link",				'url':'ajax/home/about_questions', 'callback':null },
		// About Questions
		{'element':".about_section #mean_by",			'url':'ajax/home/about_questions_mean_by', 'callback':null },
		{'element':".about_section #statistics",		'url':'ajax/home/about_questions_statistics', 'callback':null },
		{'element':".about_section #updated",			'url':'ajax/home/about_questions_updated', 'callback':null },
		{'element':".about_section #social_media",		'url':'ajax/home/about_questions_social_media', 'callback':null },
		{'element':".about_section #why_should_i",		'url':'ajax/home/about_questions_why_should_i', 'callback':null },
		{'element':".about_section #arrested",			'url':'ajax/home/about_questions_arrested', 'callback':null },
		{'element':".about_section #mean_online",		'url':'ajax/home/about_questions_mean_online', 'callback':null },
		{'element':".about_section #bullying",			'url':'ajax/home/about_questions_bullying', 'callback':null },
		{'element':".about_section #better_tech",		'url':'ajax/home/about_questions_better_tech', 'callback':null },
		{'element':".about_section #technology",		'url':'ajax/home/about_questions_technology', 'callback':null },
		{'element':".about_section #schools",			'url':'ajax/home/about_questions_schools', 'callback':null },
		{'element':".about_section #educate",			'url':'ajax/home/about_questions_educate', 'callback':null },
		// Cyberbullying and Abuse
		{'element':".cyberbullying_link",				'url':'ajax/home/cyberbullying', 'callback':null },
		{'element':".online_abuse_link",				'url':'ajax/home/online_abuse', 'callback':null },
		{'element':".oa_cyberbullying_link",			'url':'ajax/home/oa_cyberbullying', 'callback':null },
		{'element':".oa_cybersexting_link",				'url':'ajax/home/oa_cybersexting', 'callback':null },
		{'element':".oa_cyberstalking_link",			'url':'ajax/home/oa_cyberstalking', 'callback':null },
		{'element':".oa_pranking_link",					'url':'ajax/home/oa_pranking', 'callback':null },
		{'element':".oa_stranger_link",					'url':'ajax/home/oa_strangerdanger', 'callback':null },
		{'element':".share_link",						'url':'ajax/home/share_your_story', 'callback':null },
		{'element':".share_share_link",					'url':'ajax/home/share_story', 'callback':null },
		{'element':".share_see_link",					'url':'ajax/home/see_story', 'callback':null },
		{'element':".movement_link",					'url':'ajax/home/our_movement', 'callback':null },
		{'element':".ts_amanda_link",					'url':'ajax/home/ts_amanda', 'callback':null },
		{'element':".ts_rebecca_link",					'url':'ajax/home/ts_rebecca', 'callback':null },
		{'element':".ts_marcus_link",					'url':'ajax/home/ts_marcus', 'callback':null },
		{'element':".report_link",						'url':'ajax/home/report_abuse', 'callback':null },
		// Cybercrime
		{'element':".cybercrime_link",					'url':'ajax/home/cybercrime_home', 'callback':null },
		{'element':".crime_whatis_link",				'url':'ajax/home/cybercrime_whatis', 'callback':null },
		{'element':".crime_mistakes_link",				'url':'ajax/home/cybercrime_mistakes', 'callback':null },
		{'element':".crime_stalking_link",				'url':'ajax/home/cybercrime_stalking', 'callback':null },
		{'element':".crime_sexting_link",				'url':'ajax/home/cybercrime_sexting', 'callback':null },
		{'element':".crime_bullying_link",				'url':'ajax/home/cybercrime_bullying', 'callback':null },

		// Welcome to Our Hour
		{'element':".welcome_link",						'url':'ajax/home/welcome_home', 'callback':null },
		{'element':".welcome_join_link",				'url':'ajax/home/welcome_join', 'callback':null }, 		
		{'element':".welcome_games_link",				'url':'ajax/home/welcome_games', 'callback':null },
		{'element':".welcome_downloadable_link",		'url':'ajax/home/welcome_downloadable', 'callback':null },
		{'element':".welcome_video_link",				'url':'ajax/home/welcome_video', 'callback':null },
		{'element':".welcome_causes_link",				'url':'ajax/home/welcome_causes', 'callback':null },
		{'element':".welcome_causes2_link",				'url':'ajax/home/welcome_causes2', 'callback':null },
		{'element':".welcome_quizzes_link",				'url':'ajax/home/welcome_quizzes', 'callback':null },
		// Welcome - Games
		{'element':".welcome_games_band_link",			'url':'ajax/home/welcome_games_band', 'callback':null },
		{'element':".welcome_games_forward_link",		'url':'ajax/home/welcome_games_forward', 'callback':null },
		{'element':".welcome_games_talk_link",			'url':'ajax/home/welcome_games_talk', 'callback':null },
		{'element':".welcome_games_challenge_link",		'url':'ajax/home/welcome_games_challenge', 'callback':null },
		{'element':".welcome_games_wikipedia_link",		'url':'ajax/home/welcome_games_wikipedia', 'callback':null },
		// Welcome - Causes
		{'element':".welcome_causes_responsibility_link",		'url':'ajax/home/welcome_causes_responsibility', 'callback':null },
		{'element':".welcome_causes_think_link",		'url':'ajax/home/welcome_causes_think', 'callback':null },
		{'element':".welcome_causes_stomp_link",		'url':'ajax/home/welcome_causes_stomp', 'callback':null },
		{'element':".welcome_causes_healthy_link",		'url':'ajax/home/welcome_causes_healthy', 'callback':null },
		{'element':".welcome_causes_moodoff_link",		'url':'ajax/home/welcome_causes_moodoff', 'callback':null },
		{'element':".welcome_causes_campaign_link",		'url':'ajax/home/welcome_causes_campaign', 'callback':null },
		{'element':".welcome_causes_tyler_link",		'url':'ajax/home/welcome_causes_tyler', 'callback':null },
		{'element':".welcome_causes_headspace_link",	'url':'ajax/home/welcome_causes_headspace', 'callback':null },
		{'element':".welcome_causes_megan_link",		'url':'ajax/home/welcome_causes_megan', 'callback':null },
		{'element':".welcome_causes_amanda_link",		'url':'ajax/home/welcome_causes_amanda', 'callback':null },
		{'element':".welcome_causes_stopbullying_link",	'url':'ajax/home/welcome_causes_stopbullying', 'callback':null },
		{'element':".welcome_causes_thrive_link",		'url':'ajax/home/welcome_causes_thrive', 'callback':null },
		{'element':".welcome_causes_memorial_link",		'url':'ajax/home/welcome_causes_memorial', 'callback':null },

		// BLOG
		{'element':".blog_link",						'url':'ajax/home/blog_home', 'callback':null },
		{'element':".blog_preview_link",				'url':'ajax/home/blog_article/', 'callback': function(elmt, URL) {
				// For some reason URL keeps the last ID bit, so strip it if it's there
				URL = URL.substr(0, URL.lastIndexOf('/') + 1);
				return URL += $(elmt).attr('id');
			}
		},
		{'element':".blog_section",						'url':'ajax/home/blog_section/', 'callback': function(elmt, URL) {
				// For some reason URL keeps the last ID bit, so strip it if it's there
				URL = URL.substr(0, URL.lastIndexOf('/') + 1);
				return URL += ($(elmt).attr('class').trim().split(" ")[1]);
			}
		},

	].map( function(listener) {
		home_listener(listener['element'], listener['url'], listener['callback']);
	});


	$(document).on('click touchend', "#popup_exit", function (e) {
		disablePopup();
    });


	/* SHARE YOUR STORY */
	$(document).on('keyup', ".share_your_stories_share textarea", function() {
		$(".counter span").html($(this).val().length);
	});

	// User clicks to second page
	$(document).on('click', ".share_your_stories_share .next_button", function (e) {
		$(".first_page_only").hide()
		$(".second_page_only").show();
		$(".share_your_stories_share textarea").toggleClass("small_padding");
		$(".share_your_stories_share textarea").prop("disabled", true);
	});

	// User clicks to first page
	$(document).on('click', ".share_your_stories_share .edit_button", function (e) {
		$(".first_page_only").show()
		$(".second_page_only").hide();
		$(".share_your_stories_share textarea").toggleClass("small_padding");
		$(".share_your_stories_share textarea").prop("disabled", false);
	});

	// Override default action for 'Create + Share' form 
	$(document).on("submit", ".share_your_stories_share form", function(e) {
		e.preventDefault();

		if (!formValidate()) return;

		$(".share_your_stories_share textarea").prop("disabled", false);
		var postData = $(this).serializeArray();
		var formURL = $(this).attr("action");
		$.ajax(
		{
			url: formURL,
			type: "POST",
			data: postData,
			success:function(data, textStatus, jqXHR) {
				$(defaultReplaceArea).html(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(errorThrown + ": " + textStatus);
			}
		});
	});

	var formValidate = function() {
		if ($("input[name='agree']:checked").length < 1) {
			alert("In order to share your story, you must agree to the terms and conditions");
			return false;
		}
		return true;
	}


	/* REPORT ONLINE ABUSE */
	$(document).on('keyup', ".report_it_section textarea", function() {
		$(".counter span").html($(this).val().length);
	});

	$(document).on("submit", ".report_it_section form", function(e) {
		e.preventDefault();

		var formData = new FormData($('.report_it_section form')[0]);
		formData.append('file', $("#report_it_upload")[0].files[0]);

		var formURL = $(this).attr("action");
		$.ajax(
		{
			url: formURL,
			type: "POST",
			data: formData,
			success:function(data, textStatus, jqXHR) {
				$(defaultReplaceArea).html(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(errorThrown + ": " + textStatus);
			},
			//Options to tell jQuery not to process data or worry about content-type.
	        cache: false,
	        contentType: false,
	        processData: false
		});
	});

});







	/* Listen for events to show or hide popup */

    // $(".textoverlay").click(function() {
    //         loadPopup(defaultReplaceArea);
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


