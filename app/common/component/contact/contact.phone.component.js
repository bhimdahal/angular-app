var phone = {
    template: `
                <div>Phone Number: 412-xxx-xxxx</div>
		`
};


angular.module('common')
    .component('phone', phone)
    .config(function($stateProvider) {
        console.log("initializing phone component ...");
            $stateProvider
                .state('contact.phone', {
                    url: '/phone',
                    component: 'phone'

                });

    });