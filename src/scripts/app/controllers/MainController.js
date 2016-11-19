(function() {
	'use strict';

	angular.module('chatboy.controllers')

	.controller('MainController', ['$scope',
		function($scope) {
			console.log("hi from MainCtrl");


			// are there reps online?
			$scope.repsOnline = true;//	TODO: use our chatService's checkAvailable() fn
			
			



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