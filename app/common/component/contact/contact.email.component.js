var email = {
    template: `
                <div>Email: bhim@bhim.com</div>
		`
};


angular.module('common')
    .component('email', email)
    .config(function($stateProvider) {
        console.log("initializing email component ...");
            $stateProvider
                .state('contact.email', {
                    url: '/email',
                    component: 'email'

                });

    });