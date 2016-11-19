(function() {

	'use strict';

	angular.module('chatboy.controllers')

	.controller('ChatController', ['$scope',
		function($scope) {
			console.log("hi from ChatCtrl");

			//defaults on init
			$scope.chatIsActive = false;


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