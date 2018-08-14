var contact = {
    template: `
			<div class="jumbotron"><p>This is contact page!</p>
                 <button type="button" ui-sref="contact.phone" class="btn btn-primary">Phone <span class="glyphicon glyphicon-earphone"></span></button>
                 <button type="button" ui-sref="contact.email" class="btn btn-primary">Email <span class="glyphicon glyphicon-envelope"></span></button>

                 <div ui-view></div>
            </div>

		`
};


angular.module('common')
    .component('contact', contact)
    .config(function($stateProvider) {
        console.log("initializing contact component ...");
            $stateProvider
                .state('contact', {
                    url: '/contact',
                    component: 'contact',
                    redirectTo: 'contact.phone'

                });

    });