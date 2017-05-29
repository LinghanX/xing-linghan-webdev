(function(){
    angular.module('WebAppMaker').config(WidgetConfig);

    function WidgetConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/user/:userId/website/:wid/page/:pid/widget', {
                templateUrl: './views/widget/templates/widget-list.view.client.html',
                controller: 'WidgetListController as model'
            })
            .when('/user/:userId/website/:wid/page/:pid/widget/new', {
                templateUrl: './views/widget/templates/widget-chooser.view.client.html',
                controller: 'WidgetNewController as model'
            })
            .when('/user/:userId/website/:wid/page/:pid/widget/:wgid', {
                templateUrl: './views/widget/templates/widget-edit.view.client.html',
                controller: 'WidgetEditController as model'
            });
    }
})();
