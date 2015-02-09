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

	function home_listener (element, URL, blog) {

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

			// If this is a request for a blog post, append the blog ID
			if (blog) {
				URL = URL+= $(this).attr('id');
			}

			// change body
			ajaxRequest(e, URL, '', 'GET', function(data) {
		    	$(defaultReplaceArea).html(data);
			});
		});
	}

	[ 	// Tech Addiction links	
		{'element':".tech_addiction_link",				'url':'ajax/home/tech_addiction', 'blog':false },
		{'element':".tech_addiction_sleep_link",		'url':'ajax/home/tech_addiction_sleep', 'blog':false },
		{'element':".tech_addiction_multi_link",		'url':'ajax/home/tech_addiction_multi', 'blog':false },
		{'element':".tech_addiction_desens_link",		'url':'ajax/home/tech_addiction_desens', 'blog':false },
		{'element':".tech_addiction_stress_link",		'url':'ajax/home/tech_addiction_stress', 'blog':false },
		{'element':".tech_addiction_addiction_link",	'url':'ajax/home/tech_addiction_addiction', 'blog':false },
		// About links
		{'element':".about_link",						'url':'ajax/home/about', 'blog':false },
		{'element':".about_tib_link",					'url':'ajax/home/about_tib', 'blog':false },
		{'element':".about_intralink_link",				'url':'ajax/home/about_intralink', 'blog':false },
		{'element':".about_questions_link",				'url':'ajax/home/about_questions', 'blog':false },
		// About Questions
		{'element':".about_section #mean_by",			'url':'ajax/home/about_questions_mean_by', 'blog':false },
		{'element':".about_section #statistics",		'url':'ajax/home/about_questions_statistics', 'blog':false },
		{'element':".about_section #updated",			'url':'ajax/home/about_questions_updated', 'blog':false },
		{'element':".about_section #social_media",		'url':'ajax/home/about_questions_social_media', 'blog':false },
		{'element':".about_section #why_should_i",		'url':'ajax/home/about_questions_why_should_i', 'blog':false },
		{'element':".about_section #arrested",			'url':'ajax/home/about_questions_arrested', 'blog':false },
		{'element':".about_section #mean_online",		'url':'ajax/home/about_questions_mean_online', 'blog':false },
		{'element':".about_section #bullying",			'url':'ajax/home/about_questions_bullying', 'blog':false },
		{'element':".about_section #better_tech",		'url':'ajax/home/about_questions_better_tech', 'blog':false },
		{'element':".about_section #technology",		'url':'ajax/home/about_questions_technology', 'blog':false },
		{'element':".about_section #schools",			'url':'ajax/home/about_questions_schools', 'blog':false },
		{'element':".about_section #educate",			'url':'ajax/home/about_questions_educate', 'blog':false },
		// Cyberbullying and Abuse
		{'element':".cyberbullying_link",				'url':'ajax/home/cyberbullying', 'blog':false },
		{'element':".online_abuse_link",				'url':'ajax/home/online_abuse', 'blog':false },
		{'element':".oa_cyberbullying_link",			'url':'ajax/home/oa_cyberbullying', 'blog':false },
		{'element':".oa_cybersexting_link",				'url':'ajax/home/oa_cybersexting', 'blog':false },
		{'element':".oa_cyberstalking_link",			'url':'ajax/home/oa_cyberstalking', 'blog':false },
		{'element':".oa_pranking_link",					'url':'ajax/home/oa_pranking', 'blog':false },
		{'element':".oa_stranger_link",					'url':'ajax/home/oa_strangerdanger', 'blog':false },
		{'element':".share_link",						'url':'ajax/home/share_your_story', 'blog':false },
		{'element':".share_share_link",					'url':'ajax/home/share_story', 'blog':false },
		{'element':".share_see_link",					'url':'ajax/home/see_story', 'blog':false },
		{'element':".movement_link",					'url':'ajax/home/our_movement', 'blog':false },
		{'element':".ts_amanda_link",					'url':'ajax/home/ts_amanda', 'blog':false },
		{'element':".ts_rebecca_link",					'url':'ajax/home/ts_rebecca', 'blog':false },
		{'element':".ts_marcus_link",					'url':'ajax/home/ts_marcus', 'blog':false },
		{'element':".report_link",						'url':'ajax/home/report_abuse', 'blog':false },
		// Cybercrime
		{'element':".cybercrime_link",					'url':'ajax/home/cybercrime_home', 'blog':false },
		{'element':".crime_whatis_link",				'url':'ajax/home/cybercrime_whatis', 'blog':false },
		{'element':".crime_mistakes_link",				'url':'ajax/home/cybercrime_mistakes', 'blog':false },
		{'element':".crime_stalking_link",				'url':'ajax/home/cybercrime_stalking', 'blog':false },
		{'element':".crime_sexting_link",				'url':'ajax/home/cybercrime_sexting', 'blog':false },
		{'element':".crime_bullying_link",				'url':'ajax/home/cybercrime_bullying', 'blog':false },

		// Welcome to Our Hour
		{'element':".welcome_link",						'url':'ajax/home/welcome_home', 'blog':false },
		{'element':".welcome_join_link",				'url':'ajax/home/welcome_join', 'blog':false }, 		
		{'element':".welcome_games_link",				'url':'ajax/home/welcome_games', 'blog':false },
		{'element':".welcome_downloadable_link",		'url':'ajax/home/welcome_downloadable', 'blog':false },
		{'element':".welcome_video_link",				'url':'ajax/home/welcome_video', 'blog':false },
		{'element':".welcome_causes_link",				'url':'ajax/home/welcome_causes', 'blog':false },
		{'element':".welcome_causes2_link",				'url':'ajax/home/welcome_causes2', 'blog':false },
		{'element':".welcome_quizzes_link",				'url':'ajax/home/welcome_quizzes', 'blog':false },
		// Welcome - Games
		{'element':".welcome_games_band_link",			'url':'ajax/home/welcome_games_band', 'blog':false },
		{'element':".welcome_games_forward_link",		'url':'ajax/home/welcome_games_forward', 'blog':false },
		{'element':".welcome_games_talk_link",			'url':'ajax/home/welcome_games_talk', 'blog':false },
		{'element':".welcome_games_challenge_link",		'url':'ajax/home/welcome_games_challenge', 'blog':false },
		{'element':".welcome_games_wikipedia_link",		'url':'ajax/home/welcome_games_wikipedia', 'blog':false },
		// Welcome - Causes
		{'element':".welcome_causes_responsibility_link",		'url':'ajax/home/welcome_causes_responsibility', 'blog':false },
		{'element':".welcome_causes_think_link",		'url':'ajax/home/welcome_causes_think', 'blog':false },
		{'element':".welcome_causes_stomp_link",		'url':'ajax/home/welcome_causes_stomp', 'blog':false },
		{'element':".welcome_causes_healthy_link",		'url':'ajax/home/welcome_causes_healthy', 'blog':false },
		{'element':".welcome_causes_moodoff_link",		'url':'ajax/home/welcome_causes_moodoff', 'blog':false },
		{'element':".welcome_causes_campaign_link",		'url':'ajax/home/welcome_causes_campaign', 'blog':false },
		{'element':".welcome_causes_tyler_link",		'url':'ajax/home/welcome_causes_tyler', 'blog':false },
		{'element':".welcome_causes_headspace_link",	'url':'ajax/home/welcome_causes_headspace', 'blog':false },
		{'element':".welcome_causes_megan_link",		'url':'ajax/home/welcome_causes_megan', 'blog':false },
		{'element':".welcome_causes_amanda_link",		'url':'ajax/home/welcome_causes_amanda', 'blog':false },
		{'element':".welcome_causes_stopbullying_link",	'url':'ajax/home/welcome_causes_stopbullying', 'blog':false },
		{'element':".welcome_causes_thrive_link",		'url':'ajax/home/welcome_causes_thrive', 'blog':false },
		{'element':".welcome_causes_memorial_link",		'url':'ajax/home/welcome_causes_memorial', 'blog':false },

		// BLOG
		{'element':".blog_link",						'url':'ajax/home/blog_home', 'blog':false },
		{'element':".blog_preview_link",				'url':'ajax/home/blog_article/', 'blog':true },

	].map( function(listener) {
		home_listener(listener['element'], listener['url'], listener['blog']);
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


