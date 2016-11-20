(function() {
	'use strict';

	angular.module('chatboy.controllers')

	.controller('MainController', ['$scope','userService',
		function($scope, chatService) {
			console.log("hi from MainCtrl");


			// are there reps online?
			$scope.repsOnline = true;//	TODO: use chatService:isChatOpen() to get a bool

			//this controller to house user-facing functions
			var currentUser = {
				email: null,
				name: null,
				userID: -1
			};

			// $('.animate-chat-callout').one('inview', function(event, isInView) {
			//   if (isInView) {
			//     // element is now visible in the viewport
			//     $(".chat--callout").addClass('show');
			//   } else {
			//     // element has gone out of viewport 
			//   }
			// });

		}
	]);

})();