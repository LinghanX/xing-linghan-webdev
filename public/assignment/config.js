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
                    templateUrl: './views/page/templates/page-list.view.client.html'
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
                    templateUrl: './views/website/templates/website-list.view.client.html',
                    controller: 'WebsiteListController as model'
                })
                .when('/user/:userId/website/new', {
                    templateUrl: './views/website/templates/website-new.view.client.html',
                    controller: 'WebsiteNewController as model'
                })
                .when('/user/:userId/website/:wid', {
                    templateUrl: './views/website/templates/website-edit.view.client.html',
                    controller: 'WebsiteEditController as model'
                })
                .when('/user/:userId/website/:wid/page', {
                    templateUrl: './views/page/templates/page-list.view.client.html',
                    controller: 'PageListController as model'
                })
                .when('/user/:userId/website/:wid/page/new', {
                    templateUrl: './views/page/templates/page-new.view.client.html'
                })
                .when('/user/:userId/website/:wid/page/:pid', {
                    templateUrl: './views/page/templates/page-edit.view.client.html'
                })
                .when('/user/:userId/website/:wid/page/:pid/widget', {
                    templateUrl: './views/widget/templates/widget-list.view.client.html'
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