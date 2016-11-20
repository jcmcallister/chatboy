(function() {
	'use strict';

	angular.module('chatboy.services')

	.factory('repService',['$http',
		function($http){
			return {
				login: login,
				logout: logout,
				getChatQueue: getChatQueue,
				getRatingInfo : getRatingInfo
			};

			function login() {};
			function logout() {};
			function getChatQueue() {};
			function getRatingInfo() {};

		}
	]);

})();
