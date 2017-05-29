(function(){
    angular
        .module('WebAppMaker')
        .controller('WidgetNewController', WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, $location){
        var model = this;

        function init(){
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['wid'];
            model.pageId = $routeParams['pid'];
            model.widgetId = (new Date()).getTime() + "";
            model.widgetTypes = [
                "Heading",
                "Image",
                "Youtube",
                "Text Input",
                "Link",
                "Button"
            ];
            model.createWidget = createWidget;
        }
        init();

        function createWidget(widgetType) {
            var newWidget = {
                "_id": (new Date()).getTime() + "",
                "widgetType": widgetType.toUpperCase()
            };

            WidgetService.createWidget(model.pageId, newWidget);
            $location.url(
                '/user/' + model.userId
                + '/website/' + model.websiteId
                + '/page/' + model.pageId
                + '/widget/' + newWidget._id);
        }
    }
})();