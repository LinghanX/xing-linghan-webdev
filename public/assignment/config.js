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
                    templateUrl: './views/user/templates/login.view.client.html'
                    // controller: 'loginController as model'
                })
                .when('/login', {
                    templateUrl: './views/user/templates/login.view.client.html'
                })
                .when('/profile/:userId', {
                    templateUrl: './views/user/templates/profile.view.client.html',
                    controller: 'profileController as model'
                })
                .when('/user/:uid', {
                    templateUrl: './views/user/templates/profile.view.client.html'
                })
                .when('/user/:uid/website', {
                    templateUrl: './views/website/website-list.view.client.html'
                })
                .when('/user/:uid/website/new', {
                    templateUrl: './views/website/website-new.view.client.html'
                })
                .when('/user/:uid/website/:wid', {
                    templateUrl: './views/website/website-edit.view.client.html'
                })
                .when('/user/:uid/website/:wid/page', {
                    templateUrl: './views/page/page-list.view.client.html'
                })
                .when('/user/:uid/website/:wid/page/new', {
                    templateUrl: './views/page/page-new.view.client.html'
                })
                .when('/user/:uid/website/:wid/page/:pid', {
                    templateUrl: './views/page/page-edit.view.client.html'
                })
                .when('/user/:uid/website/:wid/page/:pid/widget', {
                    templateUrl: './views/widget/widget-list.view.client.html'
                })
                .when('/user/:uid/website/:wid/page/:pid/widget/new', {
                    templateUrl: '/views/widget/widget-chooser.views.client.html'
                })
                .when('/user/:uid/website/:wid/page/:pid/widget/:wgid', {
                    templateUrl: '/views/widget/widget-edit.views.client.html'
                }) ;
        }]);
})();
