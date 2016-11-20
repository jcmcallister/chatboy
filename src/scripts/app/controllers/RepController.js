(function() {
	'use strict';

	angular.module('chatboy.controllers')

	.controller('RepController', ['$scope','repService',
		function($scope, repService) {
			console.log("hi from RepCtrl");


			var repData = {
				userID		: -1, //logged out by default
				chatQueue	: [], //list of waiting customer names with chat IDs
				ratingInfo	: {}  //containing "avg","median", more
			};

		}
	]);

})();