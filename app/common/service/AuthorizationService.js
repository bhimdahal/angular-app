function Auth($resource, $q, $http, $rootScope, $state, Principal, $localStorage, $sessionStorage) {
    var url = 'app/common/api/login.json';
    var resource = $resource(url, {
        cache: true
    });
    var service = {
        login: login,
        loginWithToken: loginWithToken
    }
    return service;

    function login(credentials) {
        console.log("username: " + credentials.username + " : password: " + credentials.password);
        var deferred = $q.defer();
        var allUsers = resource.query();
        return allUsers.$promise.then(function(res) {
                res.forEach(function(item, index) {
                    if (item.username == credentials.username && item.password == credentials.password) {
                        deferred.resolve(item);
                        Principal.setUser(item);
                        return deferred.promise;
                    }

                });
                deferred.reject("username or password is wrong!");
                return deferred.promise;
                
            });
        // var user = loginThen();
        // if(user){
        //     deferred.resolve(user);
        //     Principal.setUser(user);
        // }else {
        //     deferred.reject("username or password is wrong!");
        // }
        // return deferred.promise;
        // // return allUsers.$promise.then(function(res) {
        // //     res.forEach(function(item, index) {
        // //         if (item.username == credentials.username && item.password == credentials.password) {
        // //             deferred.resolve(item);
        // //             Principal.setUser(item);
        // //             return item;
        // //         }

        // //     });
        // //     deferred.reject("username or password is wrong!");
        // //     return deferred.promise;
        // // });

        // function loginThen() {
        //     return allUsers.$promise.then(function(res) {
        //         res.forEach(function(item, index) {
        //             if (item.username == credentials.username && item.password == credentials.password) {
        //                 return item;
        //             }

        //         });
                
        //     });
        // }

    }

    function loginWithToken() {
        var principaluser = Principal.getUser();
        if ((Object.keys(principaluser).length)) {
            return;
        }
        if (!($localStorage.user)) {
            $rootScope.$broadcast('sessionExpired');
            $state.go("unauhtorize");
            return;
        }
        var username = $localStorage.user.username;
        var password = $localStorage.user.password;
        var auth = login({
            username: username,
            password: password
        });
        auth.then(function(res) {
            console.log("successfull login with token!");
            return res;
        }, function(err) {
            delete $localStorage.user;
            delete $sessionStorage.authenticationToken;
            $rootScope.$broadcast('sessionExpired');
            $state.go("unauhtorize");

        });
    }
};

angular.module('app')
    .factory('Auth', Auth);