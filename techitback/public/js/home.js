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
			loadPopup(defaultReplaceArea);

			// change body
			ajaxRequest(e, URL, '', 'GET', function(data) {
		    	$(defaultReplaceArea).html(data);
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
		{'element':".about_tib_link",					'url':'ajax/home/about_tib'},
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
		{'element':".oa_stranger_link",					'url':'ajax/home/oa_strangerdanger'},
		{'element':".share_link",						'url':'ajax/home/share_your_story'},
		{'element':".share_share_link",					'url':'ajax/home/share_story'},
		{'element':".share_see_link",					'url':'ajax/home/see_story'},
		{'element':".movement_link",					'url':'ajax/home/our_movement'},
		{'element':".ts_amanda_link",					'url':'ajax/home/ts_amanda'},
		{'element':".ts_rebecca_link",					'url':'ajax/home/ts_rebecca'},
		{'element':".ts_marcus_link",					'url':'ajax/home/ts_marcus'},
		{'element':".report_link",						'url':'ajax/home/report_abuse'},


	].map( function(listener) {
		home_listener(listener['element'], listener['url']);
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


