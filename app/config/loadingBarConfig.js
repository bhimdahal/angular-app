angular.module('app')
	.config(function (cfpLoadingBarProvider) {
		cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    	cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">loading...</div>';
});