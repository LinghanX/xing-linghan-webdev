(function() {
    angular
        .module('WebAppMaker')
        .controller('WidgetEditController', WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $location){
        var model = this;

        function init(){
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['wid'];
            model.pageId = $routeParams['pid'];
            model.widgetId = $routeParams['wgid'];
            model.widget = WidgetService.findWidgetById(model.widgetId);
            model.updateWidget = updateWidget;
            model.deleteWidget = deleteWidget;
        }
        init();

        function updateWidget() {
            WidgetService.updateWidget(model.widgetId, model.widget);
            $location.url(
                '/user/' + model.userId
                + '/website/' + model.websiteId
                + '/page/' + model.pageId
                + '/widget');
        }

        function deleteWidget() {
            WidgetService.deleteWidget(model.widgetId);
            $location.url(
                '/user/' + model.userId
                + '/website/' + model.websiteId
                + '/page/' + model.pageId
                + '/widget');
        }
    }
})();