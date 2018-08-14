function LoginController($rootScope,$q, $state, $uibModalInstance, $timeout,Auth,Principal,$localStorage) {
    console.log("initializing login controller");
    var vm = this;

    vm.authenticationError = false;
    vm.cancel = cancel;
    vm.credentials = {};
    vm.login = login;
    vm.password = null;
    vm.rememberMe = true;
    vm.username = null;

    // $timeout(function() {
    //     angular.element('#username').focus();
    // });

    function cancel() {
        vm.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        vm.authenticationError = false;
        $uibModalInstance.dismiss('cancel');
    }
    
    function login(event) {
        event.preventDefault();
        var auth = Auth.login({
            username: vm.username,
            password: vm.password
        });
        auth.then(function(res){
                    $rootScope.$broadcast('authenticationSuccess');
                    $uibModalInstance.close();
                    Principal.isAuthenticated(true);
                    $localStorage.user = {username:vm.username,password:vm.password};
                    $state.go('profile');
        }, function(res){
                vm.authenticationError = true;
        });
        
    }

    

};

angular.module('common')
    .controller('LoginController', LoginController);