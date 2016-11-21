(function() {
    'use strict';

    angular.module('chatboy.directives', [])

    .directive('scrollToShow', ['$document', '$window',
        function ($document, $window) {
            //scroll past an element with this directive attribute, and a jquery selector's via "data-sel", will add class "data-showclass" to $(data-sel)
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {

                    var element = elem[0];

                    $(element).on('inview', function(event, isInView) {
                      if (isInView) {
                        // trigger element is now visible in the viewport
                        if (attrs.hasOwnProperty("sel") && attrs.hasOwnProperty("showclass")) {
                            //add the showclass to the sel element
                            $(attrs.sel).addClass(attrs.showclass);
                        }else if ( attrs.hasOwnProperty("showclass") ) {
                            //add the showclass to THIS element
                            $(element).addClass(attrs.showclass);
                        }
                        
                      } else {
                        // trigger element has gone out of viewport
                        if (attrs.hasOwnProperty("sel") && attrs.hasOwnProperty("showclass")) {
                            //remove the showclass from the sel element
                            $(attrs.sel).removeClass(attrs.showclass);
                        }else if ( attrs.hasOwnProperty("showclass") ) {
                            //remove the showclass from THIS element
                            $(element).removeClass(attrs.showclass);
                        }
                      }
                      scope.$apply(attrs.scrollToShow);
                    });

                }
            };
        }
    ])
    ;

})();