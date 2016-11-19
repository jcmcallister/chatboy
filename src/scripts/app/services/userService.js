(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('userService',[
		function(){
			var userInstance = {
				email: null,
				name: null,
				userID: -1
			};
			var service = {
				startChat		: startChat,
				endChat			: endChat,
				getTranscript 	: requestTranscript,
				sendRepRating	: sendRepRating
			};
			return service;
			// TODO: setUserInfo

			// TODO: sendUserInfo
			// TODO: sendRepRating
			// TODO: startChat
			// TODO: endChat
			// TODO: requestTranscript
		}
	]);

})();
