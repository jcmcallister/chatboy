'use strict';

angular.module('chatbox', 
	['chatbox.controllers'])

.controller('MainController', [
	function() {
		console.log("hi from MainCtrl");

		$('.animate-chat-callout').one('inview', function(event, isInView) {
		  if (isInView) {
		    // element is now visible in the viewport
		    $(".chat--callout").addClass('show');
		  } else {
		    // element has gone out of viewport 
		  }
		});

	}]
);



