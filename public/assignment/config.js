(function(){
    angular
        .module('WebAppMaker')
        .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/register', {
                    templateUrl: 'views/user/templates/register.view.client.html',
                    controller: 'RegisterController as model'
                });
        }]);
})();
