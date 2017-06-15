(function(){
    angular.module('WebAppMaker').config(WidgetConfig);

    function WidgetConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/user/website/:wid/page/:pid/widget', {
                templateUrl: './views/widget/templates/widget-list.view.client.html',
                controller: 'WidgetListController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website/:wid/page/:pid/widget/new', {
                templateUrl: './views/widget/templates/widget-chooser.view.client.html',
                controller: 'WidgetNewController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website/:wid/page/:pid/widget/:wgid', {
                templateUrl: './views/widget/templates/widget-edit.view.client.html',
                controller: 'WidgetEditController as model',
                resolve: { loggedin: checkLoggedin }
            })
            .when('/user/website/:wid/page/:pid/widget/:wgit/search', {
                templateUrl: './views/widget/editors/widget-flickr-search.view.client.html',
                controller: 'WidgetFlickrSearchController as model',
                resolve: { loggedin: checkLoggedin }
            });
    }
})();
