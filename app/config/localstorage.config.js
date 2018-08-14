function localStorageConfig($localStorageProvider, $sessionStorageProvider) {
    $localStorageProvider.setKeyPrefix('auth-');
    $sessionStorageProvider.setKeyPrefix('auth-');
}

angular.module('app')
    .config(localStorageConfig);