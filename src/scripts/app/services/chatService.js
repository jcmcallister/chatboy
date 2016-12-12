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
			function isChatAvailable() {
				return $http.post('/api/reps/check')
					.then(chatCheckOK)
					.catch(chatCheckFailed);

				function chatCheckOK(res) {
					return res.data;
				};
				function chatCheckFailed(res) {
					$log.error('UserService :: isChatAvailable : XHR Failed =>' + err.data);
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

