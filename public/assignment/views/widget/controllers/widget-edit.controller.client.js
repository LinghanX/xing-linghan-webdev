(function() {
    angular
        .module('WebAppMaker')
        .controller('WidgetEditController', WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $location, $rootScope){
        var model = this;

        function init(){
            model.user = $rootScope.currentUser;
            model.websiteId = $routeParams['wid'];
            model.pageId = $routeParams['pid'];
            model.widgetId = $routeParams['wgid'];
            WidgetService.findWidgetById(model.widgetId)
                .then(function(response) {
                    model.widget = response;
                });
            model.updateWidget = updateWidget;
            model.deleteWidget = deleteWidget;
        }
        init();

        function updateWidget() {
            WidgetService.updateWidget(model.widgetId, model.widget)
                .then(function(response) {
                    $location.url(
                        '/user/website/' + model.websiteId
                        + '/page/' + model.pageId
                        + '/widget');
                });
        }

        function deleteWidget() {
            WidgetService.deleteWidget(model.pageId, model.widgetId)
                .then(function(response) {
                    $location.url(
                        '/user/website/' + model.websiteId
                        + '/page/' + model.pageId
                        + '/widget');
                });
        }
    }
})();