(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('chatService',[
		function(){
			var chatInstance = {
				chatID	: null,
				members	: [],
				/*
					{ "name" : "foo" }, //no userIDs here?
					{ "name" : currentUser.name }
				*/
				userID 	: -1
			};

			var service = {
				sendMessage		: sendMessage,
				updateMessages	: updateMessages,
				isChatOpen		: isChatOpen
			};

			return service;

			// TODO: sendMessage(from,to)
			// TODO: checkMessages()
			// TODO: isChatOpen()

			// TODO: listenForMessages()??? // socket.io could work here
			// TODO: sendUserInfo???
			// TODO: sendRepRating???
			// TODO: startChat???
			// TODO: endChat???
			// TODO: requestTranscript???
		}
	]);

})();

