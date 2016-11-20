(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('userService',['$http',
		function($http){
			
			return {
				startChat		: startChat, //send info here to start a chat / wait for a rep to join?
				endChat			: endChat,
				getTranscript 	: requestTranscript,
				sendRepRating	: sendRepRating
			};
			
			
			function startChat() {};
			function endChat() {};
			function requestTranscript() {};
			function sendRepRating() {};
			// TODO: setUserInfo
			// TODO: sendUserInfo
		}
	]);

})();
