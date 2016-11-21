(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('chatService',['$http',
		function($http){
			
			return {
				sendMessage		: sendMessage,
				updateMessages	: updateMessages,
				isChatAvailable	: isChatAvailable
			};

			function sendMessage(from,to) {};
			function updateMessages() {};
			function isChatAvailable() {};

			// TODO: listenForMessages()??? // socket.io could work here, for periodic polling
			// TODO: sendUserInfo???
			// TODO: sendRepRating???
			// TODO: startChat???
			// TODO: endChat???
			// TODO: requestTranscript???
		}
	]);

})();

