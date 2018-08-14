function TokenCreator(TOKEN) {
	return {
		getToken: getToken
	}

	function getToken() {
		var token = "";
		for (var i = 0; i < 12; i++) {
			token += TOKEN.charAt(Math.floor(Math.random() * TOKEN.length));
		}
		return token;
	}

}

angular.module('app')
	.factory('TokenCreator', TokenCreator);
	