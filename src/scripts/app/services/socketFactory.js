(function() {
    'use strict';

    angular.module('chatboy.services')

    // Adapted from Piecemeal's Socket.io Angular wrapper @ https://codepen.io/mi-lee/post/integrate-socket-with-angular

    .factory('socketFactory', ['$rootScope', '$window', 
        function ($rootScope, $window) { 

            var socket;
            var services = {
                on: on,
                emit: emit,
                init: init
            };

            return services;

            function init() {
                var ioRoom = $window.location.origin + '/' + $window.localStorage.chatID;
                $window.socket = io(ioRoom);
            }

            function on(eventName, callback) {
                $window.socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply($window.socket, args);
                    });
                });
            }

            function emit(eventName, data, callback) {
                $window.socket.emit(eventName, data, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        if (callback) {
                            callback.apply($window.socket, args);
                        }
                    });
                });
            }
        }
    ]);

})();