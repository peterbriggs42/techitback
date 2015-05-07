/* VIDEO LISTENERS */
// Handle messages received from the player

// Helper object to test for mobile devices.
var isMobile = {
	Android: function() {
	    return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
	    return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
	    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
	    return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
	    return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
	    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

var f = $('#player'),
url = f.attr('src').split('?')[0];
function post(action, value) {
	var data = { method: action };
	if (value) { 
		data.value = value; 
	}
	f[0].contentWindow.postMessage(JSON.stringify(data), url);
}

function onReady() {
	post('addEventListener', 'finish');
	if (isMobile.any()) {
		window.setTimeout(post('pause'), 400);
	}
}

function onMessageReceived(e) {
	var data = JSON.parse(e.data);

	switch (data.event) {
		case 'ready':
			onReady();
			break;
		case 'finish':
			$(".video_row").fadeOut(1200)
			break;
	}
}

$(document).ready(function() {
	// Listen for messages from the player
	if (window.addEventListener){
		window.addEventListener('message', onMessageReceived, false);
	}
	else {
		window.attachEvent('onmessage', onMessageReceived, false);
	} 

});

/* REST OF JAVASCRIPT */

function countWords(words){
		s = words;
		s = s.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		return s.split(' ').length;
	}

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
			if(!$(e.target).is('a')) {
				e.stopPropagation();
			} else {
				document.location = e.target.href;
			}

			// If link was clicked inside menu, close it
			if($(e.target).parents("#left_menu").length) {
				$(".toggler").click()
			}
			// Try to close mobile menu, as well
			if (jPM) {
				jPM.close();
				$("html,body").animate({ scrollTop: 0 }, "fast");
			}

			// var replaceContent = ".popup";
			// $(replaceContent).html("<div id='loading_body'><img src='images/loading.gif'></div>");
			loadPopup(defaultReplaceArea);
			$(defaultReplaceArea).html("<div id='loading_body' class='main'><img src='images/main_loading.gif'></div>");

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
		// Cybercrime
		{'element':".cybercrime_link",					'url':'ajax/home/cybercrime_home'},
		{'element':".crime_whatis_link",				'url':'ajax/home/cybercrime_whatis'},
		{'element':".crime_mistakes_link",				'url':'ajax/home/cybercrime_mistakes'},
		{'element':".crime_stalking_link",				'url':'ajax/home/cybercrime_stalking'},
		{'element':".crime_sexting_link",				'url':'ajax/home/cybercrime_sexting'},
		{'element':".crime_bullying_link",				'url':'ajax/home/cybercrime_bullying'},

		// Welcome to Our Hour
		{'element':".welcome_link",						'url':'ajax/home/welcome_home'},
		{'element':".welcome_join_link",				'url':'ajax/home/welcome_join'},	
		{'element':".welcome_games_link",				'url':'ajax/home/welcome_games'},
		{'element':".welcome_downloadable_link",		'url':'ajax/home/welcome_downloadable'},
		{'element':".welcome_video_link",				'url':'ajax/home/welcome_video'},
		{'element':".welcome_causes_link",				'url':'ajax/home/welcome_causes'},
		{'element':".welcome_causes2_link",				'url':'ajax/home/welcome_causes2'},
		{'element':".welcome_quizzes_link",				'url':'ajax/home/welcome_quizzes'},
		// Welcome - Games
		{'element':".welcome_games_band_link",			'url':'ajax/home/welcome_games_band'},
		{'element':".welcome_games_forward_link",		'url':'ajax/home/welcome_games_forward'},
		{'element':".welcome_games_talk_link",			'url':'ajax/home/welcome_games_talk'},
		{'element':".welcome_games_challenge_link",		'url':'ajax/home/welcome_games_challenge'},
		{'element':".welcome_games_wikipedia_link",		'url':'ajax/home/welcome_games_wikipedia'},
		// Welcome - Causes
		{'element':".welcome_causes_responsibility_link",		'url':'ajax/home/welcome_causes_responsibility'},
		{'element':".welcome_causes_think_link",		'url':'ajax/home/welcome_causes_think'},
		{'element':".welcome_causes_stomp_link",		'url':'ajax/home/welcome_causes_stomp'},
		{'element':".welcome_causes_healthy_link",		'url':'ajax/home/welcome_causes_healthy'},
		{'element':".welcome_causes_moodoff_link",		'url':'ajax/home/welcome_causes_moodoff'},
		{'element':".welcome_causes_campaign_link",		'url':'ajax/home/welcome_causes_campaign'},
		{'element':".welcome_causes_tyler_link",		'url':'ajax/home/welcome_causes_tyler'},
		{'element':".welcome_causes_headspace_link",	'url':'ajax/home/welcome_causes_headspace'},
		{'element':".welcome_causes_megan_link",		'url':'ajax/home/welcome_causes_megan'},
		{'element':".welcome_causes_amanda_link",		'url':'ajax/home/welcome_causes_amanda'},
		{'element':".welcome_causes_stopbullying_link",	'url':'ajax/home/welcome_causes_stopbullying'},
		{'element':".welcome_causes_thrive_link",		'url':'ajax/home/welcome_causes_thrive'},
		{'element':".welcome_causes_memorial_link",		'url':'ajax/home/welcome_causes_memorial'},

		// Schools and Parents
		{'element':".schools_link",						'url':'ajax/home/schools_home'},
		{'element':".models-tips-for-schools-link", 	'url':'ajax/home/schools_models_schools'},
		{'element':".join-our-e-mail-list-link", 		'url':'ajax/home/schools_join'},
		{'element':".models-tips-for-parents-link", 	'url':'ajax/home/schools_models_parents'},
		{'element':".share-what-works-link", 			'url':'ajax/home/schools_share'},
		// Schools and Parents - Models + Tips For Schools
		{'element':'.talk-about-it-link', 				'url':'ajax/home/schools/talk-about-it'},
		{'element':'.tech-use-in-school-link', 			'url':'ajax/home/schools/tech-use-in-school'},
		{'element':'.discuss-in-the-classroom-link', 	'url':'ajax/home/schools/discuss-in-the-classroom'},
		{'element':'.tech-health-curriculum-link', 		'url':'ajax/home/schools/tech-health-curriculum'},
		{'element':'.parent-school-communication-link', 'url':'ajax/home/schools/parent-school-communication'},
		{'element':'.establish-a-tech-policy-link', 	'url':'ajax/home/schools/establish-a-tech-policy'},
		// Schools and Parents - Models + Tips for Parents 
		{'element': '.talk-it-out-link', 				'url':'ajax/home/parents/talk-it-out'},
		{'element': '.keep-up-with-apps-link', 			'url':'ajax/home/parents/keep-up-with-apps'},
		{'element': '.set-boundaries-link', 			'url':'ajax/home/parents/set-boundaries'},
		{'element': '.join-them-link', 					'url':'ajax/home/parents/join-them'},
		{'element': '.tech-check-link', 				'url':'ajax/home/parents/tech-check'},
		{'element': '.report-it-link', 					'url':'ajax/home/parents/report-it'},
		{'element': '.just-say-no-link', 				'url':'ajax/home/parents/just-say-no'},
		// Schools and Parents - Share Tips
		{'element': '.share-tips-link', 				'url':'ajax/home/school/share-tips'},
		{'element': '.your-tips-link', 					'url':'ajax/home/school/your-tips'},
		
		// Contact us
		{'element': '.contact_us_link', 				'url':'ajax/home/contact_us'},
		
		// Corporate Partners
		{'element': '.corporate_link', 					'url':'ajax/home/corporate'},
		{'element': '.corporatepartners-link', 			'url':'ajax/home/corporate/partners'},
		{'element': '.partnerwithus-link', 				'url':'ajax/home/corporate/partnerwithus'},

		// Tips for Teens
		{'element': '.tips_for_teens_link', 			'url':'ajax/home/tips_for_teens'},
		{'element': '.tips-for-using-tech-responsibly-link', 			'url':'ajax/home/tips-for-using-tech-responsibly'},
		{'element': '.the-yes-and-no-nos-of-online-behavior-link', 		'url':'ajax/home/the-yes-and-no-nos-of-online-behavior'},
		{'element': '.watch-what-you-post-link', 						'url':'ajax/home/tips_section/watch-what-you-post'},
		{'element': '.check-your-connects-link', 						'url':'ajax/home/tips_section/check-your-connects'},
		{'element': '.once-its-there-its-there-link', 					'url':'ajax/home/tips_section/once-its-there-its-there'},
		{'element': '.its-ok-to-take-a-tech-break-link', 				'url':'ajax/home/tips_section/its-ok-to-take-a-tech-break'},
		{'element': '.be-a-part-of-the-solution-link', 					'url':'ajax/home/tips_section/be-a-part-of-the-solution'},

	].map( function(listener) {
		home_listener(listener['element'], listener['url']);

		// If there is a hash (i.e. techitback.com#games), then go there
		var hash;
		if (hash = window.location.hash.replace('#','.')) {
			if (listener['element'] == hash) {

				$(document).ready(function () {
					loadPopup(defaultReplaceArea);
					$(defaultReplaceArea).html("<div id='loading_body' class='main'><img src='images/main_loading.gif'></div>");
					ajaxRequest(null, listener['url'], '', 'GET', function(data) {
						$(defaultReplaceArea).html(data);
						document.location.hash = ''
					}); 
				});
			}
		}
	});

	/* FRONT PAGE LOOP */
	var defaultTiming = 1500;

	var blogSection = 0;
	var changeBlogImage = function () {
		$(".blog_gif").hide();
		switch (blogSection) {
			case 0:
				$("#blog1").show(); break;
			case 1:
				$("#blog2").show(); break;
			case 2:
				$("#blog2").show();
				$("#blog3").show(); break;
			case 3:
				$("#blog2").show();
				$("#blog3").show();
				$("#blog4").show(); break;
		}
		timing = defaultTiming;
		if (blogSection == 0) {
			timing *= 3;
		}
		blogSection = (blogSection + 1) % 4
		setTimeout(changeBlogImage, timing);
	};
	changeBlogImage();

	var aboutSection = 0;
	var changeAboutImage = function () {
		$(".about_gif").hide();
		switch (aboutSection) {
			case 0:
				$("#about2").show(); break;
			case 1:
				$("#about2").show();
				$("#about3").show(); break;
			case 2:
				$("#about2").show();
				$("#about3").show();
				$("#about4").show(); break;
			case 3:
				$("#about1").show(); break;
		}
		// timeout
		timing = defaultTiming;
		if (aboutSection == 3) {
			timing *= 3;
		}
		aboutSection = (aboutSection + 1) % 4
		setTimeout(changeAboutImage, timing);
	};
	changeAboutImage();

	/* LISTEN FOR KEY PRESSES */
	// $(document).keydown(function(e) {
	//     if (e.keyCode == 37) {
	//     	$(".arrow")[0].click()
	//     } else if (e.keyCode == 39) {
	//     	$(".arrow")[1].click()
	//     }
	// });

	// "Email gate" yanng ebook
	$(document).on('click', "#conduct_download a", function (e) {
		e.preventDefault();
		var email = prompt("Please enter your email", "");
		var link = this.href;
		if (email != null) {
			if (!validateEmail(email)) {
				alert("Sorry! That doesn't look like a valid email address. Please try again.");
			} else {
				$.ajax(
				{
					url: "/form/schools/join",
					type: "POST",
					data: {"email": email},
					success:function(data, textStatus, jqXHR) {
						document.location = link;
					},
					error: function(jqXHR, textStatus, errorThrown) {
						alert("Sorry! We couldn't add your email. Please try again.")
					}
				});
			}
		}	
	});


	/* FORMS */
	
	// Update a counter within the textarea with word count
	var addCounter = function(body) {
		var oldValue = "";
		$(document).on('keyup', body+" textarea", function() {
			var maxwords = $(this).attr('maxwords');
			if (!maxwords) maxwords = 500;

			var count = countWords($(this).val());
			if (count > maxwords) {
				$(this).val(oldValue);
				console.log("reached max");
			} else {
				oldValue = $(this).val();
			}
			$(".counter span").html(count);
		});
	}

	// Take a body class and alter the form inside of it.
	// Disable default form submission, replace popup HTML with response
	var customizeForm = function(body, counter) {

		if (counter) addCounter(body);

		$(document).on("submit", body+" form", function(e) {
			e.preventDefault();

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
	}


	$(document).on('click touchend', ".home_link", function (e) {
		disablePopup();
    });

	/* SHARE YOUR STORY */
	addCounter(".share_your_stories_share");

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
	addCounter(".report_it_section");

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

	/* BLOG SUBMIT */
	addCounter(".blog_submit_page");

	var blogFormValidate = function() {
		if ($("input[name='agree']:checked").length < 1) {
			alert("In order to submit an article, you must agree to the terms and conditions");
			return false;
		}
		return true;
	}

	$(document).on("submit", ".blog_submit_page form", function(e) {
		if (!blogFormValidate())
			e.preventDefault();
	});

	/* SHARE TIPS */
	addCounter(".share_tips");

	// User clicks to second page
	$(document).on('click', ".share_tips #next", function (e) {
		$(".first_page_only").hide()
		$(".second_page_only").show();
		$(".share_tips textarea").toggleClass("small_padding");
		$(".share_tips textarea").prop("disabled", true);
	});

	// User clicks to first page
	$(document).on('click', ".share_tips #edit", function (e) {
		$(".first_page_only").show()
		$(".second_page_only").hide();
		$(".share_tips textarea").toggleClass("small_padding");
		$(".share_tips textarea").prop("disabled", false);
	});

	$(document).on("submit", ".share_tips form", function(e) {
		e.preventDefault();

		if ($("input[name='agree']:checked").length < 1) {
			alert("In order to share a tip, you must agree to the terms and conditions");
			return false;
		}

		$(".share_tips textarea").prop("disabled", false);
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

	/* SCHOOLS JOIN */
	customizeForm('.schools_body.join');
	/* CONTACT US */
	customizeForm('.contact_body', true);
	/* PARTNER WITH US */
	customizeForm('.corporate_body', true);
	/* JOIN THE HOUR */
	addCounter('.jointhehour');

});

