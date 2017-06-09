(function(){
    angular.module('WebAppMaker').factory('WebsiteService', WebsiteService);

    function WebsiteService($http) {
        var api = {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        return api;

        function createWebsite(userId, website) {
            const url = '/api/assignment/user/' + userId + '/website';

            return $http.post(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

        function findWebsitesByUser(userId) {
            const url = '/api/assignment/user/' + userId + '/website';

            return $http.get(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function findWebsiteById(websiteId) {
            const url = '/api/assignment/website/' + websiteId;

            return $http.get(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function updateWebsite(websiteId, website) {
            const url = '/api/assignment/website/' + websiteId;

            return $http.put(url, website)
                .then(function(response) {
                    return response.data;
                });
        }

        function deleteWebsite(websiteId, userId) {
            const url =
                '/api/assignment/user/' + userId + '/website/' + websiteId;

            return $http.delete(url)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();