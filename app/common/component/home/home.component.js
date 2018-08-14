var home = {
    bindings: {},
    template: `
            <div class="jumbotron">This is home page!</div>
            <div>The count is: {{$ctrl.count}}</div>
            <button type="button" class="btn btn-primary" ng-click="$ctrl.increment()">Increase </button>
            <button type="button" class="btn btn-primary" ng-click="$ctrl.decrement()">Decrease </button>           
        `,
    controller: function(){
        console.log("initializing home controller ...");
        this.count = 0;
        this.increment = function(){
            this.count++;
        };
        this.decrement = function(){
            if(this.count == 0){
                return;
            }
            this.count--;
        };
    }
};



angular.module('common')
    .component('home', home)
    .config(function($stateProvider, $urlRouterProvider) {
        console.log("initializing home component ...");
            $stateProvider
                .state('home', {
                    url: '/',
                    component: 'home'

                });
        });