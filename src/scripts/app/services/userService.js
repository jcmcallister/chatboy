(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('userService',['$http','$log',
		function($http, $log){
			
			return {
				startChat		: startChat, //send info here to start a chat / wait for a rep to join?
				endChat			: endChat,
				getChatState	: getChatState,
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

					return $http.post('/api/chat/start',data)
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
			
			function getChatState(id) {
				// console.log("userSvc :: getChatState : argument is a " + typeof id);
				var input = parseInt(id);
				if(typeof input === 'number' && Number.isNaN(input) == false) {
					return $http.post('/api/chat/status',{"chatid":input})
						.then(chatStatusOK)
						.catch(chatStatusFailed);

					function chatStatusOK(res) {
						console.log("userSvc :: getChatState : " + JSON.stringify(res) );
						return res.data.status ? res.data.status : undefined;
					};

					function chatStatusFailed(err) {
						$log.error('UserService :: getChatState : XHR Failed =>' + err.data);
					};
				} else {
					return function(){
						console.error('UserService :: getChatState : missing function arg');	
					}
				}
			};
			
			function requestTranscript() {};
			
			function sendRepRating() {};
			

			// TODO: setUserInfo
			// TODO: sendUserInfo
		}
	]);

})();

