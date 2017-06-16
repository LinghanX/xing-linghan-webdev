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
            if(username === undefined || password === undefined) {
                model.message = "username and password must be filled!";
                return;
            }

            const attemptUser = {
                username: username,
                password: password
            };

            UserService.login(attemptUser)
                .then(function(response) {
                    $rootScope.currentUser = response.data;
                    $location.url('/user');
                }).catch(function(err) {
                    model.message = err.data;
            });
        }
    }
})();