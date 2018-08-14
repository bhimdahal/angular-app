function Principal(TokenCreator, $sessionStorage,$localStorage) {
    var _authenticated = $sessionStorage.authenticationToken ? true : false;
    if(!($localStorage.user)){
            delete $sessionStorage.authenticationToken;
    }
    var user = {};
    var service = {
        isAuthenticated: isAuthenticated,
        getAuthentication: getAuthentication,
        setUser: setUser,
        getUser: getUser,
        hasAuthority: hasAuthority
    }
    return service;

    function isAuthenticated(val) {
        _authenticated = val;
        if (_authenticated) {
            $sessionStorage.authenticationToken = TokenCreator.getToken();
        }

    }

    function getAuthentication() {
        return _authenticated;
    }


    function setUser(item) {
        user = item;

    }

    function getUser() {
        
        return user;
    }

    function hasAuthority(auth) {
        if (user.type == auth) {
            return true;;
        } else {
            return false;
        }
    }
};

angular.module('app')
    .factory('Principal', Principal);