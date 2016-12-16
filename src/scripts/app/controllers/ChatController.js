(function() {

	'use strict';

	angular.module('chatboy.controllers')

	.controller('ChatController', ['$scope', '$window', 'chatService',
		function($scope, $window, chatService) {
			
			var vm = this;

			vm.currentMsg = "";
			vm.messages = [];
			vm.submitMessage = submitMessage;

			// User functions

			// TODO: startChat
			// TODO: endChat
			// TODO: requestTranscript
			// TODO: sendRepRating
			// TODO: saveMessage, max buffer of... ?


			// Messaging Functions

			function submitMessage() {
				if($scope.currentMsg) {

					var data = {
						"text": $scope.currentMsg,
						"chatId": $window.localStorage.chatId
					};

					console.log("wtf is this, you want to submit THIS message? EWW: " + $scope.currentMsg);
					
					chatService.sendMessage(data).then(function(resultData) {
						console.log("submitMessage :: message sent!");
						console.log(JSON.stringify(resultData));
					});

					// reset the input when done
					$scope.currentMsg = "";
				}
				
			}


		}
	]);
})();