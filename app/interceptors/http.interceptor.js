function MyHttpInterceptor($q, $sessionStorage, Principal) {
    console.log("interceptor...");
    return {
        request: function(config) {
            console.log("request config: " + config);
            config.headers = config.headers || {};
            var token = $sessionStorage.authenticationToken;
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }

            return config;
        },
        requestError: function(config) {
            console.log("request error config: " + config);
            return $q.reject(config);
        },
        response: function(response) {
            console.log("response: " + response);
            return response;
        },
        responseError: function(response) {
            if (response.status === 401) {
                delete $sessionStorage.authenticationToken;
                if (Principal.getAuthentication()) {
                    Principal.isAuthenticated(false);
                }
            }
            return $q.reject(response);
        }
    };
}

angular.module('app')
    .factory('MyHttpInterceptor', MyHttpInterceptor);