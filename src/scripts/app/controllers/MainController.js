(function() {
	'use strict';

	angular.module('chatboy.controllers')

	.controller('MainController', ['$scope','$window','userService', 'chatService',
		function($scope, $window, userService, chatService) {

			$scope.repsOnline = false;
			$scope.chatInProgress = false; //TODO : receive emitted event from ChatCtrl when chat gets started/ended

			$scope.showCallout = $scope.repsOnline; // by default
			$scope.showChatbox = false;

			$scope.messages = [];
			// anatomy of a message: {ts, text, from}


			//this controller to house user-facing functions

			$scope.user = {
				name: "",
				email: ""
			};

			var userdata = {}, userToken = -1;

			$scope.initChat = function() {
				$scope.showCallout = !$scope.showCallout;
				$scope.toggleChatbox();
			};

			$scope.toggleChatbox = function() {
				$scope.showChatbox = !$scope.showChatbox;
			};


			$scope.submitUserInfo = function() {
				console.log("form submitted");
				console.log("going to start chat for user named `" + $scope.user.name + "` with email address: `" + $scope.user.email + "`");
				var user = {
					email: $scope.user.email,
					name: $scope.user.name
				};
				userService.startChat(user).then(chatStartedOK);

				function chatStartedOK(data){
					// TODO: add a data.token will contain be our user's unique chat token that corresponds with the server-side chat ID, might be mitigated via the session cookie
					userdata = data;
					console.log(JSON.stringify(data));
					if(typeof data.chatData !== "undefined" && typeof data.chatData.repName !== "undefined") {
						$scope.chatInProgress = true;
						$window.localStorage.chatId = data.chatData.chatId;
					}
				}

			};

			$scope.checkForChat = function(){
				//if chat was already open (e.g. localstorage vars indicate so), skip this and open up what we got
				
				// if($window.localStorage.chatId){
					//TODO: check to verify chat state is not ended, and if not, fetch messages & resume
					//if chatService.getState()...
				// } else {
					openChat();
				// }
			};

			function openChat() {
				chatService.isChatAvailable().then(function(data) {
					console.log("openChat :: successful!");
					console.log(JSON.stringify(data));
					enableChat(data == true);
				});
			}

			function enableChat(bool) {
				$scope.repsOnline = bool;
			}


			$scope.checkForChat();

		}
	]);

})();