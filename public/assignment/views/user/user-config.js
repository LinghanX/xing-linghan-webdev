(function(){
    angular.module('WebAppMaker').config(UserConfig);

    function UserConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: './views/user/templates/login.view.client.html',
                controller: 'LoginController as model'
            })
            .when('/users', {
                templateUrl: './views/user/templates/login.view.client.html',
                controller: 'LoginController as model'
            })
            .when('/user', {
                templateUrl: './views/user/templates/profile.view.client.html',
                controller: 'ProfileController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/login', {
                templateUrl: './views/user/templates/login.view.client.html',
                controller: 'LoginController as model'
            })
            .when('/profile/:userId', {
                templateUrl: './views/user/templates/profile.view.client.html',
                controller: 'ProfileController as model'
            })
            .when('/user/:userId', {
                templateUrl: './views/user/templates/profile.view.client.html',
                controller: 'ProfileController as model'
            });
    }
})();

const checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
    const deferred = $q.defer();

    $http.get('/api/loggedin')
        .then(function(user) {
            $rootScope.errorMessage = null;
            if(user.data !== '0') {
                $rootScope.currentUser = user.data;
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url('/users');
            }
        });
    return deferred.promise;
};
