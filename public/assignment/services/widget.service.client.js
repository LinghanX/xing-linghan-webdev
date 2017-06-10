(function(){
    angular.module('WebAppMaker').factory('WidgetService', WidgetService);

    function WidgetService($http) {
        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(pageId, widget) {
            const url = '/api/assignment/page/' + pageId + '/widget';
            return $http.post(url, widget)
                .then(function(response) {
                    return response.data;
                });
        }

        function findWidgetsByPageId(pageId) {
            const url = '/api/assignment/page/' + pageId + '/widget';

            return $http.get(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function findWidgetById(widgetId) {
            const url = '/api/assignment/widget/' + widgetId;

            return $http.get(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function updateWidget(widgetId, widget) {
            const url = '/api/assignment/widget/' + widgetId;

            return $http.put(url, widget)
                .then(function(response) {
                    return response.data;
                });
        }

        function deleteWidget(pageId, widgetId) {
            const url = '/api/assignment/page/' + pageId + '/widget/' + widgetId;

            return $http.delete(url)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();