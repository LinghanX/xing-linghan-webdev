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
            const widget = {};
            WidgetService.createWidget(model.pageId, widget)
                .then(function(response) {
                    model.widget = response;
                });

            model.widgetTypes = [
                "Heading",
                "Image",
                "Youtube",
                "Text Input",
                "Link",
                "Button"
            ];
            model.updateWidget = updateWidget;
        }
        init();

        function updateWidget(widgetType) {
            model.widget.type = widgetType.toUpperCase();

            WidgetService.updateWidget(model.widget._id, model.widget)
                .then(function(response) {
                    $location.url(
                        '/user/' + model.userId
                        + '/website/' + model.websiteId
                        + '/page/' + model.pageId
                        + '/widget/' + model.widget._id);
                });
        }
    }
})();