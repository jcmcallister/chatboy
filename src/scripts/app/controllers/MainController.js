(function() {
	'use strict';

	angular.module('chatboy.controllers')

	.controller('MainController', ['$scope','userService',
		function($scope, userService) {

			$scope.repsOnline = true;//	TODO: use chatService:isChatAvailable() to get a bool
			$scope.chatInProgress = false;//TODO : receive emitted event from ChatCtrl when chat gets started/ended

			$scope.showCallout = $scope.repsOnline; // by default
			$scope.showChatbox = false;

			//this controller to house user-facing functions

			$scope.user = {
				name: "",
				email: ""
			};

			var userdata = {}, userToken = -1;

			$scope.initChat = function() {
				console.log("you initted chat!");
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
				userService.startChat(user).then(function(data){
					// data.token will be our user's unique chat token that corresponds with the server-side chat ID
					userdata = data;
					console.log(JSON.stringify(data));
				});
			};


		}
	]);

})();