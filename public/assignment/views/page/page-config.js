(function(){
    angular.module('WebAppMaker').config(PageConfig);

    function PageConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/pages', {
                templateUrl: './views/page/templates/page-list.view.client.html'
            })
            .when('/user/website/:wid/page', {
                templateUrl: './views/page/templates/page-list.view.client.html',
                controller: 'PageListController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website/:wid/page/new', {
                templateUrl: './views/page/templates/page-new.view.client.html',
                controller: 'PageNewController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website/:wid/page/:pid', {
                templateUrl: './views/page/templates/page-edit.view.client.html',
                controller: 'PageEditController as model',
                resolve: { loggedin: checkLoggedin }
            });
    }
})();
