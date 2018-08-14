function RepoService($http){
	console.log("initializing repo service ...");
    this.getRepos = function(params){
        return $http.get('https://api.github.com/users/'+params+'/repos')
                    .then(function(response){
                        console.log("inside service", response.data);
                        return response.data;
                    },function errorCallback(response) {
                    	console.log(response);
  					});

	}
}
angular.module('common')
    .service('RepoService', RepoService);