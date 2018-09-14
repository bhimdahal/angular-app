var unauthorizeTemplate = {
    templateUrl: 'app/common/component/error/unauthorize.html',
    controller: UnAuthorizeController,
    controllerAs: 'vm'
        
};

function UnAuthorizeController(LoginService,$state,Principal,$scope) {
    console.log("initializing app controller");
    var vm = this;
    vm.login = LoginService.open;  
    vm.sessionExpired = false;
    console.log("state: " + $state.$current);
    if(Principal.getAuthentication()){
        $state.go("profile");
    }
    $scope.$on('sessionExpired', function() {
            console.log("sessionExpired: ");
            vm.sessionExpired = true;
    });
};

angular.module('common')
    .component('unauthorizeTemplate', unauthorizeTemplate)
    .config(function($stateProvider) {
        $stateProvider
            .state('unauthorize', {
                url: '/unauthorize',
                component: 'unauthorizeTemplate'

            });
    });
