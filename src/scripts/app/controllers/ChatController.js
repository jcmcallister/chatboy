(function() {

	'use strict';

	angular.module('chatboy.controllers')

	.controller('ChatController', ['$scope', 'chatService',
		function($scope, chatService) {
			console.log("hi from ChatCtrl");

			//defaults on init
			$scope.chatIsActive = false;

			var chat = {
				token	: null,
				members	: [],
				/*
					{ "name" : "foo" }, //no userIDs here?
					{ "name" : currentUser.name }
				*/
			};


			// User functions

			// TODO: startChat
			// TODO: endChat
			// TODO: requestTranscript
			// TODO: sendRepRating
			// TODO: saveMessage, max buffer of... ?


			// Messaging Functions

			// TODO: sendMessage


		}
	]);
})();