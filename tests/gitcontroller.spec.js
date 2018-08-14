describe('Testing Controller', function () {
  beforeEach(module('common'));
  //beforeEach(module('ui.router'));

  var $controller;
  var RepoService;
  var $httpBackend;

  

  // beforeEach(module(function ($stateProvider) {
  //   $stateProvider.state('app', { url: '/' });
  // }));


    beforeEach(inject(function ($injector) {
      $controller = $injector.get('$controller');
      RepoService = $injector.get('RepoService');
      $httpBackend = $injector.get('$httpBackend');

      $httpBackend
      .when('GET', 'https://api.github.com/users/bhimdahal/repos')
      .respond([{
        id: 1,
        name: 'git mock'
      }]);

    }));

    it('should return the two users in users object', function() {
      var $scope = {};
      var controller = $controller('GitController', {
          $scope: $scope,
          RepoService: RepoService
      });
      console.log(controller);
       $scope.users = controller.users;
      expect($scope.users.length).toEqual(2);
    });

    it('should return the list of repos from server', function(done){
        $httpBackend.expectGET('https://api.github.com/users/bhimdahal/repos');
        RepoService.getRepos('bhimdahal')
                    .then(function(res){
                        if(res[0].name === 'git mock'){
                          done();
                        }
                    });

        $httpBackend.flush();

    });
  
});