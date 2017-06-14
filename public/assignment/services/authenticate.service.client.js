(function(){
    angular.module('WebAppMaker').factory('AuthenticateService', AuthenticateService);

    function AuthenticateService($q, $timeout, $http, $location, $rootScope) {
        const api = {
            checkLoggedin: checkLoggedin
        };
        return api;

        function checkLoggedin() {
            const deferred = $q.defer();

            $http.get('/api/loggedin')
                .then(function (user) {
                    $rootScope.errorMessage = null;
                    if (user.data !== '0') {
                        $rootScope.currentUser = user.data;
                        deferred.resolve();
                    } else {
                        deferred.reject();
                        $location.url('/users');
                    }
                });
            return deferred.promise;
        }
    }
})();
