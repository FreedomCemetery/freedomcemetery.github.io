// CONTACT FORM VALIDATION
$.validator.addMethod("verify", function (value, element, params) {
    return value == params[0] + params[1];
}, jQuery.validator.format("Please enter the correct value for {0} + {1}"));

$("form").validate({
  rules: {
      verify: {
          verify: [3, 1]
      }
  },
  submitHandler: function() {
    doAjax();
  }
});

var doAjax = function() {
  var responseObj = {
    type: "POST",
    url: "process.php",
    data: $("form").serialize(),
    dataType: "json",
    success: function(response) {
      display(response);
    }
  }
  $.ajax(responseObj);
};

var display = function(response) {
  console.log(response);
  var message = $("#message");
  message.empty();
  $("form").hide();
  $.each(response, function(key, value) {
    console.log(key + ": " + value);
    //message.append("<p><strong>" + key + "</strong>: " + value + "</p>");
    message.empty().append("<p class='h3 txt-lime txt-center'>" + "Thanks for reaching out! I'll get back to you a soon as possible:)" + "</p>");

  });
};

// JQUERY UI SLIDERS
$(function() {
	$( ".slider-range-min" ).each(function (i, sliderDiv) {
		$(sliderDiv).slider({
			range: "min",
			min: 0,
			max: 50,
			value: $('.amount') [i].value
		});
	});
});

// SHOW MORE
$(document).ready(function () {
    size_li = $("#feed .post").size();
    x=4;
    $('#feed .post:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#feed .post:lt('+x+')').show();
    });
    $('#showLess').click(function () {
        x=(x-5<0) ? 4 : x-5;
        $('#feed .post').not(':lt('+x+')').hide();
    });
});

