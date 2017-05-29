(function(){
    angular.module('WebAppMaker').config(WebsiteConfig);

    function WebsiteConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
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
            });
    }
})();
