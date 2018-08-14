var unauhtorizeTemplate = {
    templateUrl: 'app/common/component/error/unauhtorize.html',
    controller: UnAuhtorizeController,
    controllerAs: 'vm'
        
};

function UnAuhtorizeController(LoginService,$state,Principal,$scope) {
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
    .component('unauhtorizeTemplate', unauhtorizeTemplate)
    .config(function($stateProvider) {
        $stateProvider
            .state('unauhtorize', {
                url: '/unauhtorize',
                component: 'unauhtorizeTemplate'

            });
    });