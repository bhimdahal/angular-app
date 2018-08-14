function GitController(RepoService){
    var repos = this;
    repos.data = [];
    repos.data = RepoService.getRepos("bhimdahal");
    console.log("initializing git controller ...");
    repos.users = [
        {
         id: 1,
            name: 'bhim'
        },
        {
            id: 2,
            name: 'bhim2'
        }

];
    


};

angular.module('common')
        .controller('GitController', GitController);
