var profileTemplate = {
    templateUrl: 'app/common/component/profile/profile.html',
    bindings: {
        auth: '<',
        user: '<'
    },
    // require: {
    //     parent: '^^headerTemplate'
    // },
    controller: function($state) {
        var vm = this;
        vm.$onInit = function() {
            vm.auth;
            if (!vm.auth) {
                $state.go("unauhtorize");
            }
            //vm.user;
        };

    },
    controllerAs: 'vm'

};



angular.module('common')
    .component('profileTemplate', profileTemplate)
    .config(function($stateProvider) {
        console.log("initializing proifle component ...");
        console.log("stateProvider: ", $stateProvider);
        $stateProvider
            .state('profile', {
                url: '/profile',
                component: 'profileTemplate',
                // login: {
                //     username: null,
                //     password:null
                // },
                onEnter: function() {
                    console.log("entering profile component...");

                },
                onExit: function() {
                    console.log("exiting profile component...");

                },
                resolve: {
                    auth: function($transition$, Principal) {
                        console.log("transition object: ", $transition$);
                        return Principal.getAuthentication();
                    },
                    user: function(Principal, Auth,$sessionStorage) {
                        var token = $sessionStorage.authenticationToken;
                        var user = Principal.getUser();
                        if (token && !(Object.keys(user).length)) {
                            return Auth.loginWithToken();
                        }

                        return Principal.getUser();

                    }

                }

            });
    });