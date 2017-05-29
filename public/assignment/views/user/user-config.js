(function(){
    angular.module('WebAppMaker').config(UserConfig);

    function UserConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: './views/home.view.client.html'
            })
            .when('/users', {
                templateUrl: './views/user/templates/login.view.client.html',
                controller: 'LoginController as model'
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