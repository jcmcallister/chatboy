(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('chatService',['$http',
		function($http){
			var chatInstance = {
				chatID	: null,
				members	: [],
				/*
					{ "name" : "foo" }, //no userIDs here?
					{ "name" : currentUser.name }
				*/
				userID 	: -1
			};

			return {
				sendMessage		: sendMessage,
				updateMessages	: updateMessages,
				isChatOpen		: isChatOpen
			};

			function sendMessage(from,to) {};
			function updateMessages() {};
			function isChatOpen() {};

			// TODO: listenForMessages()??? // socket.io could work here
			// TODO: sendUserInfo???
			// TODO: sendRepRating???
			// TODO: startChat???
			// TODO: endChat???
			// TODO: requestTranscript???
		}
	]);

})();

