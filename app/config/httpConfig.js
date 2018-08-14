angular.module('app')
	.config(function ($httpProvider) {
		console.log("initializing http provider ...");
		$httpProvider.interceptors.push('MyHttpInterceptor');
	});