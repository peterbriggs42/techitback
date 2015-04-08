function ajaxRequestFromForm(form, event, onSuccess) {
	//STOP default action
	event.preventDefault();

	var postData = $(form).serializeArray();
	var formURL = $(form).attr("action");
	$.ajax(
	{
	    url : formURL,
	    type: "POST",
	    data : postData,
	    success:function(data, textStatus, jqXHR) 
	    {
	        if (onSuccess != null) {
	        	onSuccess(data);
	        }
	    },
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
	        alert("Error! Failed response from the server");
	        console.log(errorThrown + " " + textStatus);    
	    }
	});
}

function ajaxRequest(event, URL, data, HTTPVerb, onSuccess) {
	//STOP default action
	if(event) {
		event.preventDefault();
	}

	$.ajax(
	{
	    url : URL,
	    type: HTTPVerb,
	    data : data,
	    success:function(data, textStatus, jqXHR) 
	    {
	        if (onSuccess != null) {
	        	onSuccess(data);
	        }
	    },
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
	        console.log(errorThrown + " " + textStatus);    
	    }
	});
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
