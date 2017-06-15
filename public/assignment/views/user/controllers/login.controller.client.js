(function() {
    angular
        .module('WebAppMaker')
        .controller('LoginController', LoginController);

    function LoginController($location, UserService, $rootScope) {
        var model = this;

        function init() {
            model.login = login;
        }
        init();

        function login(username, password) {
            const attemptUser = {
                username: username,
                password: password
            };

            UserService.login(attemptUser)
                .then(function(response) {
                    $rootScope.currentUser = response.data;
                    $location.url('/user');
                });
        }
    }
})();