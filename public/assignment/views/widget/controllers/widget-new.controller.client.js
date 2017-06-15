(function(){
    angular
        .module('WebAppMaker')
        .controller('WidgetNewController', WidgetNewController);

    function WidgetNewController($routeParams,
                                 WidgetService,
                                 $location,
                                 $rootScope){
        var model = this;

        function init(){
            model.user = $rootScope.currentUser;
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
                "HTML",
                "Text Input",
                "Link",
                "Button"
            ];
            model.updateWidget = updateWidget;
        }
        init();

        function updateWidget(widgetType) {
            model.widget.type = widgetType.toUpperCase();

            if(widgetType === "Text Input") {
                model.widget.type = "TEXT";
            }

            WidgetService.updateWidget(model.widget._id, model.widget)
                .then(function(response) {
                    $location.url(
                        '/user/website/' + model.websiteId
                        + '/page/' + model.pageId
                        + '/widget/' + model.widget._id);
                });
        }
    }
})();