(function() {
    angular
        .module('WebAppMaker')
        .controller('WidgetFlickrSearchController', WidgetFlickrSearchController);

    function WidgetFlickrSearchController($routeParams,
                                          WidgetService,
                                          FlickrService,
                                          $location,
                                          $rootScope){
        var model = this;

        function init(){
            model.user = $rootScope.currentUser;
            model.websiteId = $routeParams['wid'];
            model.pageId = $routeParams['pid'];
            model.widgetId = $routeParams['wgit'];
            WidgetService.findWidgetById(model.widgetId)
                .then(function(response) {
                    model.widget = response;
                });

            model.searchPhotos = searchPhotos;
            model.selectPhoto = selectPhoto;
        }
        init();

        function searchPhotos(searchText) {
            FlickrService
                .searchPhotos(searchText)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });
        }

        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";

            model.widget.url = url;
            WidgetService.updateWidget(model.widgetId, model.widget)
                .then(function(response) {
                        $location.url(
                            "/user/website/" + model.websiteId + "/page/" + model.pageId
                            + "/widget"
                        );

                });
        }
    }
})();
