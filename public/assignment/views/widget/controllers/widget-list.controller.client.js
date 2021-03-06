(function() {
    angular
        .module('WebAppMaker')
        .controller('WidgetListController', WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce, $rootScope){
        var model = this;

        function init(){
            model.user = $rootScope.currentUser;
            model.websiteId = $routeParams['wid'];
            model.pageId = $routeParams['pid'];
            WidgetService.findWidgetsByPageId(model.pageId)
                .then(function(response) {
                    model.widgets = response;
                });
            model.widgetUrl = widgetUrl;
            model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
            model.trust = trust;
        }
        init();

        function widgetUrl(widget) {
            var url = 'views/widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.html';
            return url;
        }

        function getYouTubeEmbedUrl(linkUrl) {
            var embedUrl = "https://www.youtube.com/embed/";
            var linkUrlParts = linkUrl.split('/');
            embedUrl += linkUrlParts[linkUrlParts.length - 1];
            return $sce.trustAsResourceUrl(embedUrl);
        }

        function trust(html) {
            // scrubbing the html
            return $sce.trustAsHtml(html);
        }
    }
})();