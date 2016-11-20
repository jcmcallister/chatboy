(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('chatService',['$http',
		function($http){
			
			return {
				sendMessage		: sendMessage,
				updateMessages	: updateMessages,
				isChatOpen		: isChatOpen
			};

			function sendMessage(from,to) {};
			function updateMessages() {};
			function isChatOpen() {};

			// TODO: listenForMessages()??? // socket.io could work here, for periodic polling
			// TODO: sendUserInfo???
			// TODO: sendRepRating???
			// TODO: startChat???
			// TODO: endChat???
			// TODO: requestTranscript???
		}
	]);

})();

