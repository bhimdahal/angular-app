function hasAuthority(Principal) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	var authority = attrs.hasAuthority.replace(/\s+/g, '');
            var setVisible = function() {
                    element.removeClass('hidden');
                },
                setHidden = function() {
                    element.addClass('hidden');
                },
                defineVisibility = function(reset) {
                    if (reset) {
                        setVisible();
                    }

                    if(Principal.hasAuthority(authority)){
                    	setVisible();
                    }else {
                    	setHidden();
                    }
                    
                };

            if (authority.length > 0) {
                defineVisibility(true);

                scope.$watch(function() {
                    return Principal.getAuthentication();
                }, function() {
                    defineVisibility(true);
                });
            }
        }
    };
}

angular.module('common')
    .directive('hasAuthority', hasAuthority)