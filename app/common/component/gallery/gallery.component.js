var gallery = {
    bindings: {
        list: '<'
    },
    template: `
            <div class="jumbotron"><p>This is gallery page!</p>
            <p>Github User Repos </p>
            <p> Search Repos: </p>
            <form ng-submit="$ctrl.submitForm()">
                <input ng-model="$ctrl.name">
                <input type="submit" class="btn btn-primary" value="View Repos"></button>

            </form>
            <p ng-hide="$ctrl.list.length">Nothing here yet!</p>
            <table class="table table-condensed" ng-hide="!$ctrl.list.length">
                <thead>
                    <tr>
                    <th>Repo_Name</th>
                    <th>Stargazers_Count</th>
                    </tr>
                </thead>
            <tbody>
             <tr ng-repeat= "repo in $ctrl.list">
                <td><a href="{{repo.html_url}}" target= "_blank">{{repo.name}}</a></td>
                <td>{{repo.stargazers_count}} stars</td>
            </tr>
            </tbody>
            </table>
            </div>
        `,
    controller: function($state){
        console.log("initializing gallery controller...");
        this.submitForm = function(){
            $state.go('gallery', {
                username: this.name
            });
        };
    }
};


angular.module('common')
    .component('gallery', gallery)
    .config(function($stateProvider) {
        console.log("initializing gallery component ...");
        console.log("stateProvider: " , $stateProvider);
        $stateProvider
            .state('gallery', {
                url: '/gallery/?username',
                component: 'gallery',
                params: {
                    username: null
                },
                onEnter: function(){
                    console.log("entering gallery component...");
                },
                onExit: function(){
                    console.log("exiting gallery component...");
                    //window.confirm("are you sure you want to exit?");

                },
                resolve: {
                    list: function(RepoService, $transition$){
                        console.log("transition object: ", $transition$);
                        var params = $transition$.params().username;
                        if(!params) return;
                        return RepoService.getRepos(params);
                    }
                }

            });

    });