(function(){
    angular
        .module('WebAppMaker')
        .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.view.client.html'
                })
                .when('/pages', {
                    templateUrl: './views/page/page-list.view.client.html'
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
                })
                .when('/user/:userId/website', {
                    templateUrl: './views/website/website-list.view.client.html'
                })
                .when('/user/:userId/website/new', {
                    templateUrl: './views/website/website-new.view.client.html'
                })
                .when('/user/:userId/website/:wid', {
                    templateUrl: './views/website/website-edit.view.client.html'
                })
                .when('/user/:userId/website/:wid/page', {
                    templateUrl: './views/page/page-list.view.client.html'
                })
                .when('/user/:userId/website/:wid/page/new', {
                    templateUrl: './views/page/page-new.view.client.html'
                })
                .when('/user/:userId/website/:wid/page/:pid', {
                    templateUrl: './views/page/page-edit.view.client.html'
                })
                .when('/user/:userId/website/:wid/page/:pid/widget', {
                    templateUrl: './views/widget/widget-list.view.client.html'
                })
                .when('/user/:userId/website/:wid/page/:pid/widget/new', {
                    templateUrl: '/views/widget/widget-chooser.views.client.html'
                })
                .when('/user/:userId/website/:wid/page/:pid/widget/:wgid', {
                    templateUrl: '/views/widget/widget-edit.views.client.html'
                })
                .when('/register', {
                    templateUrl: 'views/user/templates/register.view.client.html',
                    controller: 'RegisterController as model'
                });
        }]);
})();
