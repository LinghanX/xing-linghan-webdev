(function(){
    angular.module('WebAppMaker').config(WebsiteConfig);

    function WebsiteConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/user/website/new', {
                templateUrl: './views/website/templates/website-new.view.client.html',
                controller: 'WebsiteNewController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website/:wid', {
                templateUrl: './views/website/templates/website-edit.view.client.html',
                controller: 'WebsiteEditController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website', {
                templateUrl: './views/website/templates/website-list.view.client.html',
                controller: 'WebsiteListController as model',
                resolve: { loggedin: checkLoggedin }
            });
    }
})();
