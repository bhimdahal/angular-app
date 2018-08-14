var about = {
    template: `
			<div class="jumbotron">This is about page!</div>
		`
};


angular.module('common')
    .component('about', about)
    .config(function($stateProvider) {
            console.log("initializing about component ...");
            $stateProvider
                .state('about', {
                    url: '/about',
                    component: 'about'

                });

    });