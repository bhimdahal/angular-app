
function loginDirective() {
        return {
            restrict: 'E',
            scope: {
                users: '='
            },
            controller: 'AuthController',
            controllerAs: 'ctrl'

        };
    };

  function AuthController($uibModal,$state){
        console.log("initializing AuthController..." );
        var ctrl = this;
        ctrl.users = users;
        console.log(ctrl.users);
  }; 

angular.module('common')
        .directive('loginDirective', loginDirective)
        .controller('AuthController', AuthController);