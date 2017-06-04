(function(){
    angular.module('WebAppMaker').factory('PageService', PageService);

    function PageService($http) {
        var api = {
            createPage: createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function createPage(websiteId, page) {
            const url = '/api/assignment/website/' + websiteId + '/page';

            return $http.post(url, page)
                .then(function(response) {
                    return response.data;
                });
        }

        function findPagesByWebsiteId(websiteId) {
            const url = '/api/assignment/website/' + websiteId + '/page';
            return $http.get(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function findPageById(pageId) {
            const url = '/api/assignment/page/' + pageId;

            return $http.get(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function updatePage(pageId, page) {
            const url = '/api/assignment/page/' + pageId;

            return $http.put(url, page)
                .then(function (response) {
                    return response.data;
                });
        }

        function deletePage(pageId) {
            const url = '/api/assignment/page/' + pageId;

            return $http.delete(url)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();