(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('repService',[
		function(){
			var repData = {
				userID		: -1, //logged out by default
				chatQueue	: [], //list of waiting customer names with chat IDs
				ratingInfo	: {}  //containing "avg","median", more
			};
			var service = {
				login: login,
				logout: logout,
				getChatQueue: getChatQueue,
				getRatingInfo : getRatingInfo
			};

			return service;

			// TODO: login
			// TODO: logout
			// TODO: getChatQueue
			// TODO: getRatingInfo

		}
	]);

})();
