(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('chatService',['$http', '$log',
		function($http, $log){
			
			return {
				sendMessage		: sendMessage,
				updateMessages	: updateMessages,
				isChatAvailable	: isChatAvailable
			};

			function sendMessage(data) {
				return $http.post('/api/chat/message', data)
					.then(sendOK)
					.catch(sendFailed);

				function sendOK(res) {
					return res.data;
				};
				function sendFailed(err) {
					$log.error('ChatService :: sendMessage : XHR Failed =>' + err.data);
				};
			};
			
			function updateMessages() {};

			function isChatAvailable() {
				return $http.post('/api/reps/check')
					.then(chatCheckOK)
					.catch(chatCheckFailed);

				function chatCheckOK(res) {
					return res.data;
				};
				function chatCheckFailed(err) {
					$log.error('ChatService :: isChatAvailable : XHR Failed =>' + err.data);
				};
			};

			// TODO: listenForMessages()??? // socket.io could work here, for periodic polling
			// TODO: sendUserInfo???
			// TODO: sendRepRating???
			// TODO: startChat???
			// TODO: endChat???
			// TODO: requestTranscript???
		}
	]);

})();

