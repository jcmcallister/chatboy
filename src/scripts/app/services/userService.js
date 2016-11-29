(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('userService',['$http','$log',
		function($http, $log){
			
			return {
				startChat		: startChat, //send info here to start a chat / wait for a rep to join?
				endChat			: endChat,
				getTranscript 	: requestTranscript,
				sendRepRating	: sendRepRating
			};
			
			
			function startChat(obj) {
				//obj must contain name & email
				if(obj.hasOwnProperty('name') && obj.hasOwnProperty('email')) {

					//only send what we need
					var data = {
						"name"	: obj.name,
						"email"	: obj.email
					};

					return $http.get('/routes/api/openChatSession',data)
						.then(startChatOK)
						.catch(startChatFailed);

					function startChatOK(res) {
						return res.data;
					};

					function startChatFailed(err) {
						$log.error('UserService :: startChat : XHR Failed =>' + err.data);
					};
				}else {
					$log.error('UserService :: startChat : missing name or email params!');
				}
			};
			function endChat() {};
			function requestTranscript() {};
			function sendRepRating() {};
			// TODO: setUserInfo
			// TODO: sendUserInfo
		}
	]);

})();
