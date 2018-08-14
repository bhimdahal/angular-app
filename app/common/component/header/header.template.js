var headerTemplate = {
    templateUrl: 'app/common/component/header/header-template.html',
    controller: AppController,
    controllerAs:'vm'
    // bindings:{
    //     users: '='
    // }
};

function AppController(LoginService, $scope, $state,$sessionStorage,$localStorage,Auth,Principal) {
    console.log("initializing app controller");
    var vm = this;
    vm.$state = $state;
    vm.isAuthenticated = Principal.getAuthentication();
    vm.login = LoginService.open; 
    vm.logout = logout; 
    vm.token = $sessionStorage.authenticationToken;
    if(vm.token){
        vm.isAuthenticated = Principal.getAuthentication();
        tokenLogin();
    }
    $scope.$on('authenticationSuccess', function() {
            //getAccount();
            console.log("authenticationSuccess: " +  true);
            vm.isAuthenticated = Principal.getAuthentication();
        });
    function tokenLogin(){
        Auth.loginWithToken();
    }
    function logout(event) {
        event.preventDefault();
        delete $sessionStorage.authenticationToken;
        Principal.isAuthenticated(false);
        vm.isAuthenticated = Principal.getAuthentication();
        $state.go("unauhtorize");
        
    }

        //getAccount();  
};



angular.module('common')
    .component('headerTemplate', headerTemplate);
