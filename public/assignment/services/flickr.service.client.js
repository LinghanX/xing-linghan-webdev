(function(){
    angular.module('WebAppMaker').factory('FlickrService', FlickrService);

    function FlickrService($http) {
        const api = {
            searchPhotos: searchPhotos
        };
        return api;

        function searchPhotos(searchTerm) {
            const key = "7cfc123d1b9617b11fff8198381b0bb8";
            const secret = "3b4b4bd84965683c";

            const urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=7cfc123d1b9617b11fff8198381b0bb8&text=" + searchTerm;
            return $http.get(urlBase);
        }
    }
})();
