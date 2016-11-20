(function() {
    'use strict';

    angular.module('chatboy.directives', [])

    .directive('scrollToShow', function () {
        //scroll past an element with this directive attribute, and a jquery selector's via "data-sel", will add class "data-showclass" to $(data-sel)
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                console.log('loading directive');
                console.log(JSON.stringify(elem));
                elem.bind('scroll', function () {
                    console.log('in scroll');
                    console.log(elem.scrollTop + elem.offsetHeight);
                    console.log(elem.scrollHeight);

                    //if we scrolled past
                    if (elem.scrollTop > elem.scrollHeight) { 
                        if (attrs.hasOwnProperty("dataSel") && attrs.hasOwnProperty("dataShowclass")) {
                            //add the showclass to the dataSel element
                            $(attrs.dataSel).addClass(attrs.dataShowclass);
                        }else if ( attrs.hasOwnProperty("dataShowclass") ) {
                            //add the showclass to THIS element
                            $(elem).addClass(attrs.dataShowclass);
                        }

                        
                        scope.$apply(attrs.scrollToShow);
                    }
                });

                scope.$on('$destroy', function(){
                    // manual cleanup of any extra services, as needed
                });
            }
        };
    })
    ;

})();